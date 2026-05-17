import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { Layout } from "@consta/uikit/Layout";
import type { TableColumn } from "@consta/table/Table";

import { getPosts, type Post, type PostsResponse } from "@/entities/posts";
import { Pagination, Table } from "@/shared/ui";
import { useDataViewer } from "@/shared/lib";

const columnsPost: TableColumn<Post>[] = [
  {
    title: "ID",
    accessor: "id",
    width: "1fr",
  },
  {
    title: "Заголовок",
    accessor: "title",
    width: "1fr",
  },
];

export const TablePosts = () => {
  const queryClient = useQueryClient();

  const { countItems, currentPagePosts, setCurrentPagePosts } = useDataViewer();

  const [postsResult, setPostsResult] = useState<PostsResponse | undefined>(
    queryClient.getQueryData(["posts"]),
  );

  useEffect(() => {
    const updatePosts = () => {
      const updated = queryClient.getQueryData<PostsResponse>(["posts"]);
      setPostsResult(updated);
    };

    const unsubscribe = queryClient.getQueryCache().subscribe(() => {
      updatePosts();
    });

    updatePosts();
    return () => unsubscribe();
  }, [queryClient]);

  const changePage = async (page: number) => {
    const token = localStorage.getItem("accessToken") as string;

    if (!token || token.trim() === "") {
      alert("Access token пустой");
      return;
    }

    try {
      const posts = await getPosts(token, page, countItems);
      queryClient.setQueryData(["posts"], posts);

      setCurrentPagePosts(page);
      return;
    } catch {
      alert("Ошибка при загрузке новой страницы");
    }
  };

  return (
    <>
      {!postsResult?.data || postsResult.data.length === 0 ? (
        <p>Нет данных</p>
      ) : (
        <Layout direction="column" style={{ gap: "10px" }}>
          <Table
            tableKey="posts-table"
            tableRows={postsResult.data}
            tableColumns={columnsPost}
          />
          <Pagination
            value={currentPagePosts}
            countItems={postsResult.pages}
            onChange={(page) => changePage(page)}
          />
        </Layout>
      )}
    </>
  );
};
