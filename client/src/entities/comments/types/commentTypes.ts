export type Comment = {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
};

export type CommentsResponse = Comment[];
