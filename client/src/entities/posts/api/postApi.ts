import { api } from "@/shared/api";
import type { Post } from "../types/postTypes";

export const getPosts = async (
  token: string,
  page: number = 1,
  limit: number = 10,
) => {
  const { data } = await api.get<Post[]>(
    `/posts?page=${page}&per_page=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return data;
};
