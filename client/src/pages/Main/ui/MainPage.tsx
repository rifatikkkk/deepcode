import { Layout } from "@consta/uikit/Layout";

import { DataViewer } from "@/app/widgets/DataViewer";
import { AccessTokenAuth } from "@/features/accessTokenAuth";
import { Title } from "@/shared/ui";

const MainPage = () => {
  return (
    <Layout
      direction="column"
      className="main-window"
      style={{ gap: "20px", padding: "40px" }}
    >
      <Title size="2xl" weight="bold">
        Главная страница
      </Title>

      <AccessTokenAuth />

      <DataViewer />
    </Layout>
  );
};

export default MainPage;
