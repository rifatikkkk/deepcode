import { lazy } from "react";

export const CardPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-expect-error Simulate delay
      setTimeout(() => resolve(import("./CardPage")), 1000);
    }),
);
