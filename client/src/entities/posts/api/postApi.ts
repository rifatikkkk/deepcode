import { api } from "@/shared/api";
import type { PostsResponse } from "../types/postTypes";

export const getPosts = async (
  token: string,
  page: number = 1,
  limit: number = 10,
) => {
  const response = await api.get<PostsResponse>(
    `/posts?page=${page}&per_page=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const pages = parseInt(response.headers["x-pagination-pages"] || "0", 10);

  return {
    data: response.data,
    pages,
  };
};
