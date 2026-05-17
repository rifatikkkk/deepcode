import { type FC, type ReactNode } from "react";

import { Text } from "@consta/uikit/Text";

type TitleProps = {
  size?:
    | "s"
    | "m"
    | "2xs"
    | "xs"
    | "l"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | undefined;
  weight?:
    | "bold"
    | "thin"
    | "extralight"
    | "light"
    | "regular"
    | "medium"
    | "semibold"
    | "extrabold"
    | "black"
    | undefined;
  children?: ReactNode;
};

export const CustomTitle: FC<TitleProps> = ({ size, weight, children }) => {
  return (
    <Text size={size} weight={weight}>
      {children}
    </Text>
  );
};
