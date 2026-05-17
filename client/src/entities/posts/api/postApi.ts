import { api } from "@/shared/api";
import type { Post, PostsResponse } from "../types/postTypes";

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

export const getPostById = async (token: string, id: string) => {
  const { data } = await api.get<Post>(`/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
