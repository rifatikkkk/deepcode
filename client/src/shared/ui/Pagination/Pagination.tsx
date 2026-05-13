import type { PaginationPropOnChange } from "@consta/uikit/__internal__/src/components/Pagination/types";
import { Pagination } from "@consta/uikit/Pagination";
import { type FC } from "react";

type CustomPaginationProps = {
  countItems: number;
  countDisplay: number;
  value: number;
  onChange: PaginationPropOnChange<number> | undefined;
};

export const CustomPagination: FC<CustomPaginationProps> = ({
  countItems,
  countDisplay,
  value,
  onChange,
}) => {
  const totalPages = Math.ceil(countItems / countDisplay);

  return (
    <Pagination
      items={totalPages}
      value={value}
      onChange={onChange}
      arrows={[{ label: "Предыдущая" }, { label: "Следующая" }]}
    />
  );
};
