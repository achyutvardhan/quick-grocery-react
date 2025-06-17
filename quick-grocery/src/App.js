import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SpecialOffer from "./pages/SpecialOffer";
import Login from "./Auth/Login";
import PrivateRoute from "./Auth/PrivateRoute";
import Signup from "./Auth/Signup";
import Cart from "./components/Cart";
import NoPage from "./pages/NoPage";
import ViewItem from "./components/ViewItem";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="Login" element={<Login />} />
            <Route path="Signup" element={<Signup />} />
            <Route element={<PrivateRoute />}>
              <Route path="/AddToCart/:userId" element={<Cart />} />
            </Route>
            <Route path="/ViewItem/:Category/:Name" element={<ViewItem />} />
            <Route index element={<Home />} />
            <Route path="Product" element={<Product />} />
            <Route path="Blog" element={<Blog />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="SpecialOffer" element={<SpecialOffer />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
