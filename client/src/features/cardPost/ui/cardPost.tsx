import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";

import { Title, Card } from "@/shared/ui";
import { getPostById } from "@/entities/posts";

export const CardPost = () => {
  const { id } = useParams<{ id: string }>();
  const token = localStorage.getItem("accessToken") || "";

  const { data: post } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPostById(token, id!),
    enabled: !!token && !!id,
  });

  return (
    <>
      {post ? (
        <Card title="Карточка поста">
          <Layout direction="column" style={{ gap: "12px" }}>
            <Layout
              direction="row"
              verticalAlign="top"
              style={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Layout
                direction="row"
                verticalAlign="top"
                style={{ gap: "5px", alignItems: "center" }}
              >
                <Text size="xl" weight="bold">
                  {post.title}
                </Text>
              </Layout>

              <Text size="s" view="ghost">
                ID: {post.user_id}
              </Text>
            </Layout>

            <Text size="l" view="secondary">
              {post.body}
            </Text>
          </Layout>
        </Card>
      ) : (
        <Title size="l" weight="medium">
          Пост не найден
        </Title>
      )}
    </>
  );
};
