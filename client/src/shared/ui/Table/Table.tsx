import { Table, type TableColumn } from "@consta/table/Table";

type CustomTableProps<T> = {
  tableKey: "users-table" | "posts-table" | undefined;
  tableRows: T[];
  tableColumns: TableColumn<T>[];
};

export const CustomTable = <T,>({
  tableRows,
  tableColumns,
  tableKey,
}: CustomTableProps<T>) => {
  return (
    <Table
      key={tableKey}
      rows={tableRows}
      columns={tableColumns}
      stickyHeader
      style={{ maxHeight: 500, maxWidth: 1000 }}
    />
  );
};
