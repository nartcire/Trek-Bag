import { createContext, useEffect, useState } from "react";

import { initialItems } from "../lib/constants";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || initialItems;
  });

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };

    setItems((prev) => [...prev, newItem]);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);

    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      } else {
        return item;
      }
    });

    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAsAllComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });

    setItems(newItems);
  };

  const handleMarkAsAllIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });

    setItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAsAllComplete,
        handleMarkAsAllIncomplete,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
