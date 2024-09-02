import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Search from "./components/Search";

function App() {
  return (
    <div className="flex justify-center items-center flex-col h-screen w-full  ">
      <Header />
      <Search />
      <Items />
      <Footer />
    </div>
  );
}

export default App;
