import { useState } from "react";

import { Layout } from "@consta/uikit/Layout";

import { TableUsers } from "@/features/tableUsers";
import { TablePosts } from "@/features/tablePosts";
import { SelectTabs } from "@/features/selectTabs";
import { CountPage } from "@/features/countPage";

export const DataViewer = () => {
  const [valueTab, setValueTab] = useState<string | null>("Пользователи");
  const [pageSize, setPageSize] = useState<number>(10);

  return (
    <Layout direction="column" style={{ gap: "10px" }}>
      <Layout direction="row">
        <SelectTabs valueTab={valueTab} onChangeTab={setValueTab} />
        <CountPage currentCount={pageSize} onCountChange={setPageSize} />
      </Layout>

      {valueTab === "Пользователи" ? (
        <TableUsers countDispay={pageSize} />
      ) : (
        <TablePosts countDispay={pageSize} />
      )}
    </Layout>
  );
};
