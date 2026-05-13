import { type FC } from "react";

import { Button } from "@consta/uikit/Button";

type ButtonProps = {
  label?: string;
  onClick?: () => void;
  size?: "s" | "m" | "xs" | "l" | undefined;
  disabled?: boolean;
};

export const CustomButton: FC<ButtonProps> = ({
  label,
  onClick,
  size,
  disabled,
}) => {
  return (
    <Button label={label} onClick={onClick} size={size} disabled={disabled} />
  );
};
