import { forwardRef, ForwardedRef, ReactNode, Fragment, useRef } from "react";

type ListProps<O extends { id: string }> = {
  options: O[];
  renderOption: (option: O) => ReactNode;
};

const ListInner = <O extends { id: string }>(
  { options, renderOption }: ListProps<O>,
  ref: ForwardedRef<HTMLUListElement>
) => {
  return (
    <ul
      ref={ref}
      style={{
        height: "300px",
        overflowY: "auto",
      }}
    >
      {options.map((item) => (
        <Fragment key={item.id}>{renderOption(item)}</Fragment>
      ))}
    </ul>
  );
};

const List = forwardRef(ListInner) as <O extends { id: string }>(
  props: ListProps<O> & { ref?: ForwardedRef<HTMLUListElement> }
) => ReactNode;

const ProductsList = () => {
  const listRef = useRef<HTMLUListElement>(null);

  return (
    <>
      <button onClick={() => listRef.current?.scrollTo({ top: 0 })}>
        Scroll to Top
      </button>
      <List
        ref={listRef}
        options={[
          { id: "1", label: "Pen", price: 2 },
          { id: "2", label: "Mug", price: 8 },
          { id: "3", label: "Book", price: 15 },
          { id: "4", label: "Cap", price: 12 },
          { id: "5", label: "Socks", price: 6 },
          { id: "6", label: "Tea", price: 5 },
          { id: "7", label: "USB", price: 18 },
          { id: "8", label: "Gum", price: 1 },
          { id: "9", label: "Card", price: 3 },
          { id: "10", label: "Soap", price: 4 },
        ]}
        renderOption={(option) => (
          <>
            <p>{option.label}</p>
            <p>{option.price}</p>
          </>
        )}
      />
    </>
  );
};

export { ProductsList };
