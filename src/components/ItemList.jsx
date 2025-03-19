export default function ItemList({ items, setItems }) {
  return (
    <ul>
      {items.map((item) => {
        return <Item item={item} key={item.id}></Item>;
      })}
    </ul>
  );
}

function Item({ item }) {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.packed} onClick={handleClick} />
        {item.name}
      </label>

      <button>❌</button>
    </li>
  );
}
