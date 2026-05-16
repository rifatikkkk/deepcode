import { FieldGroup } from "@consta/uikit/FieldGroup";
import { FieldLabel } from "@consta/uikit/FieldLabel";
import { Layout } from "@consta/uikit/Layout";

import { Button, Input } from "@/shared/ui";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getPosts } from "@/entities/posts";
import { getUsers } from "@/entities/users";
import { useDataViewer } from "@/shared/lib";

export const AccessTokenAuth = () => {
  const queryClient = useQueryClient();

  const [token, setToken] = useState<string>("");

  const { setCountItems, setCurrentPagePosts, setCurrentPageUsers } =
    useDataViewer();

  const handleTokenChange = (value: string | null) => {
    setToken(value || "");
  };

  const fetchData = async () => {
    if (!token.trim()) {
      alert("Вам нужно ввести access token");
      localStorage.setItem("accessToken", "");
      return;
    }

    try {
      const [postsResult, usersResult] = await Promise.all([
        getPosts(token),
        getUsers(token),
      ]);

      queryClient.setQueryData(["posts"], postsResult);
      queryClient.setQueryData(["users"], usersResult);

      localStorage.setItem("accessToken", token);

      setCountItems(10);
      setCurrentPagePosts(1);
      setCurrentPageUsers(1);
      return;
    } catch {
      alert("Ошибка при загрузке данных");
      queryClient.setQueryData(["posts"], { data: [], pages: 0 });
      queryClient.setQueryData(["users"], { data: [], pages: 0 });
      localStorage.setItem("accessToken", "");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && token.trim()) {
      fetchData();
    }
  };

  return (
    <Layout direction="column">
      <FieldLabel>Access token</FieldLabel>
      <FieldGroup style={{ gap: "10px" }}>
        <Input
          type="string"
          placeholder="Введите access token"
          autoFocus
          withClearButton
          value={token}
          onChange={handleTokenChange}
          onKeyPress={handleKeyPress}
        />
        <Button label="Применить" onClick={fetchData} />
      </FieldGroup>
    </Layout>
  );
};
