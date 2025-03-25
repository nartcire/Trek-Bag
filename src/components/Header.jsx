import Counter from "./Counter";
import Logo from "./Logo";
import { useItemStore } from "../stores/itemsStore";

export default function Header() {
  const items = useItemStore((state) => state.items);

  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
}
