import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { Layout } from "@consta/uikit/Layout";
import type { TableColumn } from "@consta/table/Table";

import type { User } from "@/entities/users";
import { Pagination, Table } from "@/shared/ui";

const columnsUser: TableColumn<User>[] = [
  {
    title: "Имя Фамилия",
    accessor: "name",
    width: "1fr",
  },
  {
    title: "Почта",
    accessor: "email",
    width: "1fr",
  },
];

export const TableUsers = () => {
  const [page, setPage] = useState(1);

  const queryClient = useQueryClient();
  const [users, setUsers] = useState<User[] | undefined>(
    queryClient.getQueryData(["users"]),
  );

  useEffect(() => {
    const updateUsers = () => {
      const updatedUsers = queryClient.getQueryData<User[]>(["users"]);
      setUsers(updatedUsers);
    };

    const unsubscribe = queryClient.getQueryCache().subscribe(() => {
      updateUsers();
    });

    updateUsers();

    return () => unsubscribe();
  }, [queryClient]);

  return (
    <>
      {!users || users.length === 0 ? (
        <p>Нет данных</p>
      ) : (
        <Layout direction="column" style={{ gap: "10px" }}>
          <Table
            tableKey="users-table"
            tableRows={users}
            tableColumns={columnsUser}
          />
          <Pagination value={page} countItems={1} onChange={setPage} />
        </Layout>
      )}
    </>
  );
};
