/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PackingList from "./components/PackingList";
import Search from "./components/Search";
import Filters from "./components/Filters";

//! Initial items 🛫
const initialItems = [
  { id: 1, desc: "Passports", qty: 2, packed: false },
  { id: 2, desc: "Socks", qty: 12, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems); //! State for items 🧳
  const [desc, setDesc] = useState(""); //! State for item description 📝
  const [qty, setQty] = useState(1); //! State for item quantity 🔢

  //! Handle item submission 🚀
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!desc) return alert("Please enter an item");
    setItems([...items, { id: Date.now(), desc, qty, packed: false }]);
    setDesc(""); //! Reset description
    setQty(1); //! Reset quantity
  };

  //! Handle item deletion 🗑️
  const handleDelete = (id: number) =>
    setItems(items.filter((item) => item.id !== id));

  //! Toggle packed status 📦
  const handleTogglePacked = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  //! Toggle all items 📦
  const handleToggleAll = () => {
    // Check if all items are currently packed
    const allPacked = items.every((item) => item.packed);

    // If all are packed, unpack all; otherwise, pack all
    setItems(items.map((item) => ({ ...item, packed: !allPacked })));
  };

  //! Clear all items 🧹
  const handleClearAll = () => setItems([]);

  //! Handle sorting options 🔄
  const handleSort = (sortType: string) => {
    const sortedItems = [...items];
    if (sortType === "inputOrder") sortedItems.sort((a, b) => a.id - b.id); //! Sort by input order (by using id)
    if (sortType === "description")
      sortedItems.sort((a, b) => a.desc.localeCompare(b.desc)); //! Sort by Aplhabetical order
    if (sortType === "packedStatus")
      sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed)); //! Sort by packed status
    setItems(sortedItems);
  };

  //! Calculate packed items and percentage
  const totalItems = items.length;
  const packedCount = items.filter((item) => item.packed).length;
  const packedPercentage =
    totalItems === 0 ? 0 : Math.round((packedCount / totalItems) * 100);

  console.log(packedCount);

  return (
    <div className="flex flex-col items-center h-screen w-full">
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
      <Filters
        handleClearAll={handleClearAll}
        handleSort={handleSort}
        handleToggleAll={handleToggleAll}
      />
      <Footer
        totalItems={totalItems}
        packedCount={packedCount}
        packedPercentage={packedPercentage}
      />
    </div>
  );
}

export default App;
