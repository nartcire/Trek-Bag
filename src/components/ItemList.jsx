export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <Item
            item={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
          ></Item>
        );
      })}
    </ul>
  );
}

function Item({ item, handleDeleteItem, handleToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => handleToggleItem(item.id)}
        />
        {item.name}
      </label>

      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
