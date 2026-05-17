import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";

import { Title, Card } from "@/shared/ui";
import { getPostById } from "@/entities/posts";
import { getCommentsByPost } from "@/entities/comments";

export const CardPost = () => {
  const { id } = useParams<{ id: string }>();
  const token = localStorage.getItem("accessToken") || "";

  const { data: post } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPostById(token, id!),
    enabled: !!token && !!id,
  });

  const { data: comments } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => getCommentsByPost(token, id!),
    enabled: !!token && !!id,
  });

  return (
    <>
      {post ? (
        <Layout direction="column" style={{ gap: "10px" }}>
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

          <Layout direction="row" style={{ gap: "10px" }}>
            {!comments || comments.length === 0 ? (
              <Text view="secondary">Нет комментариев к этому посту</Text>
            ) : (
              <Layout direction="column" style={{ gap: "5px" }}>
                <Text view="primary">Комментарии</Text>
                <Layout direction="row" style={{ gap: "10px" }}>
                  {comments.map((comment) => (
                    <Card key={comment.id}>
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
                              {comment.name}
                            </Text>
                          </Layout>

                          <Text size="s" view="ghost">
                            ID: {comment.id}
                          </Text>
                        </Layout>

                        <Text size="l" view="secondary">
                          {comment.body}
                        </Text>
                      </Layout>
                    </Card>
                  ))}
                </Layout>
              </Layout>
            )}
          </Layout>
        </Layout>
      ) : (
        <Title size="l" weight="medium">
          Пост не найден
        </Title>
      )}
    </>
  );
};
