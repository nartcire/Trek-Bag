import { useMemo, useState } from "react";

import EmptyView from "./EmptyView";
import Select from "react-select";
import { useItemStore } from "../stores/itemsStore";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

export default function ItemList() {
  const items = useItemStore((state) => state.items);
  const deleteItem = useItemStore((state) => state.deleteItem);
  const toggleItem = useItemStore((state) => state.toggleItem);
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      if (sortBy === "packed") {
        return b.packed - a.packed;
      }

      if (sortBy === "unpacked") {
        return a.packed - b.packed;
      }

      return;
    });
  }, [items, sortBy]);

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      ) : null}
      {sortedItems.map((item) => {
        return (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={deleteItem}
            onToggleItem={toggleItem}
          ></Item>
        );
      })}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        {item.name}
      </label>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
