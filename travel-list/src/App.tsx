import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <div className="flex justify-center items-center flex-col  ">
      <Header />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
