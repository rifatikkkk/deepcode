import { api } from "@/shared/api";
import type { User } from "../types/userTypes";

export const getUsers = async (
  token: string,
  page: number = 1,
  limit: number = 10,
) => {
  const { data } = await api.get<User[]>(
    `/users?page=${page}&per_page=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return data;
};
