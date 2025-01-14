import { ReactNode } from "react";

type ListProps<O extends { id: string }> = {
  options: O[];
  renderOption: (option: O) => ReactNode;
};

const List = <O extends { id: string }>({
  options,
  renderOption,
}: ListProps<O>) => {
  return (
    <ul>
      {options.map((option) => (
        <li key={option.id}>{renderOption(option)}</li>
      ))}
    </ul>
  );
};

const Example = () => {
  return (
    <List
      options={[
        { id: "1", label: "Pen", price: 2 },
        { id: "2", label: "Mug", price: 8 },
        { id: "3", label: "Book", price: 15 },
        { id: "4", label: "Cap", price: 12 },
        { id: "5", label: "Socks", price: 6 },
        { id: "6", label: "Tea", price: 5 },
        { id: "7", label: "USB", price: 18 },
        { id: "8", label: "Gum", price: 10 },
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
  );
};

export { Example };
