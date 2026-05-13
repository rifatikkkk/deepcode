import { Pagination, Table } from "@/shared/ui";

import { testPosts, type Post } from "../model/seed/seedPosts";
import type { TableColumn } from "@consta/table/Table";
import { useState, type FC } from "react";

type TablePostsProps = {
  countDispay: number;
};

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

export const TablePosts: FC<TablePostsProps> = ({ countDispay }) => {
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * countDispay;
  const endIndex = startIndex + countDispay;
  const currentPageUsers = testPosts.slice(startIndex, endIndex);
  return (
    <>
      <Table
        tableKey="posts-table"
        tableRows={currentPageUsers}
        tableColumns={columnsPost}
      />
      <Pagination
        value={page}
        countItems={testPosts.length}
        countDisplay={countDispay}
        onChange={setPage}
      />
    </>
  );
};
