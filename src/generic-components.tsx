import { ReactNode, useState } from "react";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
};

const List = <T,>(props: ListProps<T>) => {
  const { items, renderItem } = props;

  const [state, setState] = useState<T[]>([]); // You can use type T in List function scope.
  return (
    <div>
      {items.map(renderItem)}
      <button onClick={() => setState(items)}>Clone</button>
      {JSON.stringify(state, null, 2)}
    </div>
  );
};

export { List };
