import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PackingList from "./components/PackingList";
import Search from "./components/Search";

function App() {
  const [desc, setDesc] = useState<string>("");
  const [qty, setQty] = useState<number>(1);

  let initialItems = [
    { id: 1, desc: "Passports", qty: 2, packed: false },
    { id: 2, desc: "Socks", qty: 12, packed: false },
  ];

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

    initialItems.push(newItem);

    console.log(initialItems);

    setDesc("");
    setQty(1);

    console.log(desc);
  };

  const handleDelete = (id: number) => {
    const newItems = initialItems.filter((item) => item.id !== id);
    initialItems = newItems;
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen w-full  ">
      <Header />
      <Search
        desc={desc}
        setDesc={setDesc}
        qty={qty}
        setQty={setQty}
        handleSubmit={handleSubmit}
      />
      <PackingList initialItems={initialItems} handleDelete={handleDelete} />
      <Footer />
    </div>
  );
}

export default App;
