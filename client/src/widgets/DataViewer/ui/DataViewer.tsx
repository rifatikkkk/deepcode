import { Layout } from "@consta/uikit/Layout";

import { TableUsers } from "@/features/tableUsers";
import { TablePosts } from "@/features/tablePosts";
import { SelectTabs } from "@/features/selectTabs";
import { ItemsPerPage } from "@/features/itemsPerPage";

import { useDataViewer } from "@/shared/lib";

export const DataViewer = () => {
  const { valueTab } = useDataViewer();

  return (
    <Layout direction="column" style={{ gap: "10px" }}>
      <Layout direction="row">
        <SelectTabs />
        <ItemsPerPage />
      </Layout>

      {valueTab === "Пользователи" ? <TableUsers /> : <TablePosts />}
    </Layout>
  );
};
