import type { FC, ReactNode } from "react";
import { Layout } from "@consta/uikit/Layout";
import { Card } from "@consta/uikit/Card";

import { Title } from "..";

type CustomCardProps = {
  title?: string;
  children: ReactNode;
};

export const CustomCard: FC<CustomCardProps> = ({ title, children }) => {
  return (
    <Layout direction="column" style={{ gap: "10px" }}>
      <Title size="2xl" weight="bold">
        {title}
      </Title>
      <Card
        style={{
          maxWidth: 500,
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {children}
      </Card>
    </Layout>
  );
};
