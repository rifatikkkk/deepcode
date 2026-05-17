import { type FC } from "react";

import { TextField, type TextFieldPropOnChange } from "@consta/uikit/TextField";

type InputProps = {
  type: string;
  placeholder?: string;
  withClearButton?: boolean;
  autoFocus?: boolean;
  value?: string;
  onChange?: TextFieldPropOnChange;
  onKeyPress?: (e: React.KeyboardEvent) => void;
};

export const Input: FC<InputProps> = ({
  type,
  placeholder,
  withClearButton = true,
  autoFocus,
  value,
  onChange,
  onKeyPress,
}) => {
  return (
    <TextField
      type={type}
      placeholder={placeholder}
      withClearButton={withClearButton}
      autoFocus={autoFocus}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};
