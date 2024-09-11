import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import Navbar from "./components/PageNav";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
