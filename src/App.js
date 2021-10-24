import Header from "./components/Header";
import Items from "./components/Items";
import AddItems from "./components/AddItems";
import Total from "./components/Total";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [items, setItems] = useState([
    /*{
      id: 1,
      text: "Laptop",
      cost: 500,
      discount: 20,
    },
    {
      id: 2,
      text: "Chair",
      cost: 50,
      discount: 10,
    },
    {
      id: 3,
      text: "T-Shirt",
      cost: 30,
      discount: 0,
    },*/
  ]);

  const addItem = (item) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    //console.log(id);

    if (item.discount) {
      item.cost = item.cost * (1 - item.discount / 100);
      item.cost = item.cost.toFixed(2);
    }
    const newItem = { id, ...item };
    setItems([...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowForm(!showForm)} showForm={showForm} />
      {showForm && <AddItems onAdd={addItem} />}
      {items.length > 0 ? (
        <Items items={items} onDelete={deleteItem} />
      ) : (
        <p className="empty-cart">Your Shopping Cart is Currently Empty</p>
      )}
      <Total items={items} />
    </div>
  );
}

export default App;
