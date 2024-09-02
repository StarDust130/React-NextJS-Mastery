import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PackingList from "./components/PackingList";
import Search from "./components/Search";

function App() {
  const [desc, setDesc] = useState<string>("");
  const [qty, setQty] = useState<number>(1);
  return (
    <div className="flex justify-center items-center flex-col h-screen w-full  ">
      <Header />
      <Search desc={desc} setDesc={setDesc} qty={qty} setQty={setQty} />
      <PackingList desc={desc} setDesc={setDesc} />
      <Footer />
    </div>
  );
}

export default App;
