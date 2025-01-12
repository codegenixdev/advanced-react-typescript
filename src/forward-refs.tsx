import { forwardRef, ForwardedRef } from "react";

type InputProps = {
  label: string;
  placeholder?: string;
};

const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div>
        <label>{props.label}</label>
        <input ref={ref} type="text" placeholder={props.placeholder} />
      </div>
    );
  }
);

export { Input };
