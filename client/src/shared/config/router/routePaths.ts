export const AppRoutes = {
  MAIN: "main",
  CARD: "card",
} as const;

type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.CARD]: "/card/:type/:id",
};
