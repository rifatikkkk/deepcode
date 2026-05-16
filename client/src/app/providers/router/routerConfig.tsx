import type { RouteProps } from "react-router";

import { MainPage } from "@/pages/Main";
import { CardPage } from "@/pages/Card";

import { AppRoutes, routePaths } from "@/shared/config";

export const routeConfig: RouteProps[] = [
  {
    path: routePaths[AppRoutes.MAIN],
    element: <MainPage />,
  },
  {
    path: routePaths[AppRoutes.CARD],
    element: <CardPage />,
  },
];
