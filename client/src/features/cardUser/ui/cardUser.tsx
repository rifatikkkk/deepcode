import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";
import { Badge } from "@consta/uikit/Badge";
import { Avatar } from "@consta/uikit/Avatar";

import { getUserById } from "@/entities/users";
import { Title, UserCard } from "@/shared/ui";

export const CardUser = () => {
  const { id } = useParams<{ id: string }>();
  const token = localStorage.getItem("accessToken") || "";

  const { data: user } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(token, id!),
    enabled: !!token && !!id,
  });

  return (
    <>
      {user ? (
        <UserCard>
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
                <Avatar name={user.name} />
                <Text size="xl" weight="bold">
                  {user.name}
                </Text>
                <Badge
                  minified={true}
                  status={user.status === "active" ? "success" : "alert"}
                  label="Статус"
                />
              </Layout>

              <Text size="s" view="ghost">
                ID: {user.id}
              </Text>
            </Layout>

            <Text size="l" view="secondary">
              <a
                style={{ color: "black", textDecoration: "none" }}
                href={`mailto:${user.email}`}
              >
                {user.email}
              </a>
            </Text>

            <Layout direction="row">
              <Badge
                form="round"
                size="m"
                status={`${user.gender === "male" ? "normal" : "alert"}`}
                label={`${user.gender === "male" ? "Мужской" : "Женский"}`}
              />
            </Layout>
          </Layout>
        </UserCard>
      ) : (
        <Title size="l" weight="medium">
          Пользователь не найден
        </Title>
      )}
    </>
  );
};
