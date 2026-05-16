import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { Layout } from "@consta/uikit/Layout";
import type { TableColumn } from "@consta/table/Table";

import type { Post } from "@/entities/posts";
import { Pagination, Table } from "@/shared/ui";

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
  const [page, setPage] = useState(1);

  const queryClient = useQueryClient();
  const [posts, setPosts] = useState<Post[] | undefined>(
    queryClient.getQueryData(["posts"]),
  );

  useEffect(() => {
    const updatePosts = () => {
      const updatedPosts = queryClient.getQueryData<Post[]>(["posts"]);
      setPosts(updatedPosts);
    };

    const unsubscribe = queryClient.getQueryCache().subscribe(() => {
      updatePosts();
    });

    updatePosts();

    return () => unsubscribe();
  }, [queryClient]);

  return (
    <>
      {!posts || posts.length === 0 ? (
        <p>Нет данных</p>
      ) : (
        <Layout direction="column" style={{ gap: "10px" }}>
          <Table
            tableKey="posts-table"
            tableRows={posts}
            tableColumns={columnsPost}
          />
          <Pagination value={page} countItems={1} onChange={setPage} />
        </Layout>
      )}
    </>
  );
};
