import { api } from "@/shared/api";
import type { UsersResponse } from "../types/userTypes";

export const getUsers = async (
  token: string,
  page: number = 1,
  limit: number = 10,
) => {
  const response = await api.get<UsersResponse>(
    `/users?page=${page}&per_page=${limit}`,
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
