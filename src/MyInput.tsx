import { forwardRef } from "react";

type TextInputProps = {
  placeholder?: string;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    return <input type="text" ref={ref} placeholder={props.placeholder} />;
  }
);

export default TextInput;
