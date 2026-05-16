export type Post = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};

export type PostsResponse = {
  data: Post[];
  pages: number;
};
