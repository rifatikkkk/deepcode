import type { PaginationPropOnChange } from "@consta/uikit/__internal__/src/components/Pagination/types";
import { Pagination } from "@consta/uikit/Pagination";
import { type FC } from "react";

type CustomPaginationProps = {
  countItems: number;
  value: number;
  onChange: PaginationPropOnChange<number> | undefined;
};

export const CustomPagination: FC<CustomPaginationProps> = ({
  countItems,
  value,
  onChange,
}) => {
  return (
    <Pagination
      items={countItems}
      value={value}
      onChange={onChange}
      arrows={[{ label: "Предыдущая" }, { label: "Следующая" }]}
      visibleCount={5}
    />
  );
};
