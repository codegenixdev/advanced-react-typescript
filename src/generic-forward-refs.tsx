import { forwardRef, ForwardedRef } from "react";

type BaseOption = {
  id: string;
  label: string;
};

type ListProps<O extends BaseOption> = {
  options: O[];
};

const ListInner = <O extends BaseOption>(
  props: ListProps<O>,
  ref: ForwardedRef<HTMLUListElement>
) => {
  return (
    <ul ref={ref}>
      {props.options.map((item) => (
        <li key={item.id}>{item.label}</li>
      ))}
    </ul>
  );
};

export const List = forwardRef(ListInner);
