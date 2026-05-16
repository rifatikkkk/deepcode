import { Layout } from "@consta/uikit/Layout";

import { MainPageProvider } from "../provider/MainPageProvider";

import { DataViewer } from "@/widgets/DataViewer";
import { AccessTokenAuth } from "@/features/accessTokenAuth";
import { Title } from "@/shared/ui";

const MainPage = () => {
  return (
    <MainPageProvider>
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
    </MainPageProvider>
  );
};

export default MainPage;
