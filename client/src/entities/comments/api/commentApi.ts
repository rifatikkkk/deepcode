import { api } from "@/shared/api";
import type { CommentsResponse } from "../types/commentTypes";

export const getCommentsByPost = async (token: string, id: string) => {
  const { data } = await api.get<CommentsResponse>(`/posts/${id}/comments`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
