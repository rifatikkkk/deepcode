import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { Layout } from "@consta/uikit/Layout";
import type { TableColumn } from "@consta/table/Table";

import { getUsers, type User, type UsersResponse } from "@/entities/users";
import { Pagination, Table } from "@/shared/ui";
import { useDataViewer } from "@/shared/lib";

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
  const queryClient = useQueryClient();

  const { countItems, currentPageUsers, setCurrentPageUsers } = useDataViewer();

  const [usersResult, setUsersResult] = useState<UsersResponse | undefined>(
    queryClient.getQueryData(["users"]),
  );

  useEffect(() => {
    const updateUsers = () => {
      const updated = queryClient.getQueryData<UsersResponse>(["users"]);
      setUsersResult(updated);
    };

    const unsubscribe = queryClient.getQueryCache().subscribe(() => {
      updateUsers();
    });

    updateUsers();
    return () => unsubscribe();
  }, [queryClient]);

  const changePage = async (page: number) => {
    const token = localStorage.getItem("accessToken") as string;

    if (!token || token.trim() === "") {
      alert("Access token пустой");
      return;
    }

    try {
      const users = await getUsers(token, page, countItems);
      queryClient.setQueryData(["users"], users);

      setCurrentPageUsers(page);
      return;
    } catch {
      alert("Ошибка при загрузке новой страницы");
    }
  };

  return (
    <>
      {!usersResult?.data || usersResult.data.length === 0 ? (
        <p>Нет данных</p>
      ) : (
        <Layout direction="column" style={{ gap: "10px" }}>
          <Table
            tableKey="users-table"
            tableRows={usersResult.data}
            tableColumns={columnsUser}
          />
          <Pagination
            value={currentPageUsers}
            countItems={usersResult.pages}
            onChange={(page) => changePage(page)}
          />
        </Layout>
      )}
    </>
  );
};
