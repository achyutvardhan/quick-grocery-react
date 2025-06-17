import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SpecialOffer from "./pages/SpecialOffer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Layout}>
            <Route index element={Home} />
            <Route path="Product" element={Product} />
            <Route path="Blog" element={Blog} />
            <Route path="Contact" element={Contact} />
            <Route path="SpecialOffer" element={SpecialOffer} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
