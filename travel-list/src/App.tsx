import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PackingList from "./components/PackingList";
import Search from "./components/Search";
import Filters from "./components/Filters";

interface ItemType {
  id: number;
  desc: string;
  qty: number;
  packed: boolean;
}

function App() {
  const [items, setItems] = useState<ItemType[]>([]); //! State for items 🧳
  const [desc, setDesc] = useState(""); //! State for item description 📝
  const [qty, setQty] = useState(1); //! State for item quantity 🔢
  const [sortType, setSortType] = useState("inputOrder"); //! State for sorting type 🔄

  //! Handle item submission 🚀
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!desc) return alert("Please enter an item");
    const newItem: ItemType = { id: Date.now(), desc, qty, packed: false };
    const newItems = [...items, newItem];
    setItems(applySort(newItems, sortType)); //! Sort after adding item
    setDesc(""); //! Reset description
    setQty(1); //! Reset quantity
  };

  //! Handle item deletion 🗑️
  const handleDelete = (id: number) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(applySort(updatedItems, sortType)); //! Sort after deleting item
  };

  //! Toggle packed status 📦
  const handleTogglePacked = (id: number) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems(applySort(updatedItems, sortType)); //! Sort after toggling packed status
  };

  //! Toggle all items 📦
  const handleToggleAll = () => {
    const allPacked = items.every((item) => item.packed);
    const updatedItems = items.map((item) => ({ ...item, packed: !allPacked }));
    setItems(applySort(updatedItems, sortType)); //! Sort after toggling all items
  };

  //! Clear all items 🧹
  const handleClearAll = () => setItems([]);

  //! Apply sorting based on sort type 🔄
  const applySort = (items: ItemType[], sortType: string) => {
    const sortedItems = [...items];
    if (sortType === "inputOrder") sortedItems.sort((a, b) => a.id - b.id); //! Sort by input order (by using id)
    if (sortType === "description")
      sortedItems.sort((a, b) => a.desc.localeCompare(b.desc)); //! Sort by Aplhabetical order
    if (sortType === "packedStatus")
      sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed)); //! Sort by packed status
    return sortedItems;
  };

  //! Handle sorting options 🔄
  const handleSort = (sortType: string) => {
    setSortType(sortType); //! Set the selected sort type
    setItems(applySort(items, sortType)); //! Sort items when sort type changes
  };

  //! Calculate packed items and percentage
  const totalItems = items.length;
  const packedCount = items.filter((item) => item.packed).length;
  const packedPercentage =
    totalItems === 0 ? 0 : Math.round((packedCount / totalItems) * 100);

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
a