import { useState, type FC } from "react";

import type { TableColumn } from "@consta/table/Table";

import { testUsers, type User } from "../model/seed/seedUsers";
import { Pagination, Table } from "@/shared/ui";

type TableUsersProps = {
  countDispay: number;
};

const columnsUser: TableColumn<User>[] = [
  {
    title: "Имя",
    accessor: "name",
    width: "1fr",
  },
  {
    title: "Почта",
    accessor: "email",
    width: "1fr",
  },
];

export const TableUsers: FC<TableUsersProps> = ({ countDispay }) => {
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * countDispay;
  const endIndex = startIndex + countDispay;
  const currentPageUsers = testUsers.slice(startIndex, endIndex);

  return (
    <>
      <Table
        tableKey="users-table"
        tableRows={currentPageUsers}
        tableColumns={columnsUser}
      />
      <Pagination
        value={page}
        countItems={testUsers.length}
        countDisplay={countDispay}
        onChange={setPage}
      />
    </>
  );
};
