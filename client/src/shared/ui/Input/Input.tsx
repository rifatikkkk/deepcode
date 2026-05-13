import { type FC } from "react";

import { TextField } from "@consta/uikit/TextField";

type InputProps = {
  type: string;
  placeholder?: string;
  withClearButton?: boolean;
  autoFocus?: boolean;
};

export const Input: FC<InputProps> = ({
  type,
  placeholder,
  withClearButton,
  autoFocus,
}) => {
  return (
    <TextField
      type={type}
      placeholder={placeholder}
      withClearButton={withClearButton}
      autoFocus={autoFocus}
    />
  );
};
