export const AppRoutes = {
  MAIN: "main",
} as const;

type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
};
