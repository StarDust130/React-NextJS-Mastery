import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PackingList from "./components/PackingList";
import Search from "./components/Search";
import Filters from "./components/Filters"; // Ensure Filters is imported

const initialItems = [
  { id: 1, desc: "Passports", qty: 2, packed: false },
  { id: 2, desc: "Socks", qty: 12, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [desc, setDesc] = useState<string>("");
  const [qty, setQty] = useState<number>(1);
  const [sortType, setSortType] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!desc) {
      alert("Please enter an item");
      return;
    }

    const newItem = {
      id: Date.now(),
      desc,
      qty,
      packed: false,
    };

    setItems([...items, newItem]);

    setDesc("");
    setQty(1);
  };

  const handleDelete = (id: number) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleTogglePacked = (id: number) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems(updatedItems);
  };

  const handleClearAll = () => {
    setItems([]);
  };

  const handleSort = (sortType: string) => {
    setSortType(sortType);
    let sortedItems = [...items];

    if (sortType === "inputOrder") {
      sortedItems = initialItems; // Sorting by input order is the default
    } else if (sortType === "description") {
      sortedItems.sort((a, b) => a.desc.localeCompare(b.desc));
    } else if (sortType === "packedStatus") {
      sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed));
    }

    setItems(sortedItems);
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen w-full">
      <Header />
      <Search
        desc={desc}
        setDesc={setDesc}
        qty={qty}
        setQty={setQty}
        handleSubmit={handleSubmit}
      />
      <PackingList
        items={items}
        handleDelete={handleDelete}
        handleTogglePacked={handleTogglePacked}
      />
      <Filters handleClearAll={handleClearAll} handleSort={handleSort} />
      <Footer />
    </div>
  );
}

export default App;
