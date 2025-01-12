import { forwardRef, ForwardedRef, ReactNode, Fragment } from "react";

type ListProps<O extends { id: string }> = {
  options: O[];
  renderOption: (option: O) => ReactNode;
};

const ListInner = <O extends { id: string }>(
  props: ListProps<O>,
  ref: ForwardedRef<HTMLUListElement>
) => {
  return (
    <ul ref={ref}>
      {props.options.map((item) => (
        <Fragment key={item.id}>{props.renderOption(item)}</Fragment>
      ))}
    </ul>
  );
};

const List = forwardRef(ListInner) as <O extends { id: string }>(
  props: ListProps<O> & { ref?: ForwardedRef<HTMLUListElement> }
) => JSX.Element;

const Usage = () => {
  return (
    <List
      options={[{ id: "123", label: "bar", price: 1000 }]}
      renderOption={(value) => (
        <div>
          <span>{value.label}</span>
          <span>{value.price}</span>
        </div>
      )}
    />
  );
};

export { List, Usage };
