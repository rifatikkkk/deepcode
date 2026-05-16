import { getPosts } from "@/entities/posts";
import { getUsers } from "@/entities/users";
import { useDataViewer, type CountItemsType } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { Layout } from "@consta/uikit/Layout";
import { useQueryClient } from "@tanstack/react-query";

const counts: CountItemsType[] = [10, 25, 50];

export const ItemsPerPage = () => {
  const { countItems, setCountItems } = useDataViewer();

  const queryClient = useQueryClient();

  const fetchData = async (count: CountItemsType) => {
    const token = localStorage.getItem("accessToken") as string;

    if (!token || token.trim() === "") {
      alert("Access token пустой");
      return;
    }

    try {
      setCountItems(count);

      const posts = await getPosts(token, 1, count);
      const users = await getUsers(token, 1, count);

      queryClient.setQueryData(["posts"], posts);
      queryClient.setQueryData(["users"], users);

      localStorage.setItem("accessToken", token);
      return;
    } catch {
      alert("Ошибка при загрузке данных");
      queryClient.setQueryData(["posts"], []);
      queryClient.setQueryData(["users"], []);
    }
  };

  return (
    <Layout direction="row" style={{ gap: "10px" }}>
      {counts.map((count) => (
        <Button
          key={count}
          label={count.toString()}
          size="s"
          disabled={countItems === count}
          onClick={() => fetchData(count)}
        />
      ))}
    </Layout>
  );
};
