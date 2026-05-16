import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-expect-error Simulate delay
      setTimeout(() => resolve(import("./MainPage")), 1000);
    }),
);
