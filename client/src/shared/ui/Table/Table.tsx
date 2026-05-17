import { Table, type TableColumn } from "@consta/table/Table";
import { useNavigate } from "react-router";

interface HasId {
  id: number;
}

type CustomTableProps<T extends HasId> = {
  tableKey: "users-table" | "posts-table" | undefined;
  tableRows: T[];
  tableColumns: TableColumn<T>[];
};

export const CustomTable = <T extends HasId>({
  tableRows,
  tableColumns,
  tableKey,
}: CustomTableProps<T>) => {
  const navigate = useNavigate();

  const navigateToCard = (id: number) => {
    if (tableKey) {
      navigate(
        tableKey === "users-table" ? `/card/user/${id}` : `/card/post/${id}`,
      );
    }
  };
  return (
    <Table
      key={tableKey}
      rows={tableRows}
      columns={tableColumns}
      stickyHeader
      style={{ maxHeight: 500, maxWidth: 1000 }}
      onRowClick={({ id }) => navigateToCard(id)}
    />
  );
};
