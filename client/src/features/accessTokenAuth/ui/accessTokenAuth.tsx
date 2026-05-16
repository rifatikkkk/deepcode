import { FieldGroup } from "@consta/uikit/FieldGroup";
import { FieldLabel } from "@consta/uikit/FieldLabel";
import { Layout } from "@consta/uikit/Layout";

import { Button, Input } from "@/shared/ui";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getPosts } from "@/entities/posts";
import { getUsers } from "@/entities/users";

export const AccessTokenAuth = () => {
  const [token, setToken] = useState<string>("");
  const queryClient = useQueryClient();

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
      const posts = await getPosts(token);
      const users = await getUsers(token);

      queryClient.setQueryData(["posts"], posts);
      queryClient.setQueryData(["users"], users);

      localStorage.setItem("accessToken", token);
      return;
    } catch {
      alert("Ошибка при загрузке данных");
      queryClient.setQueryData(["posts"], []);
      queryClient.setQueryData(["users"], []);
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
