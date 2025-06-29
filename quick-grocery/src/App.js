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
import Cart from "./pages/Cart";
import NoPage from "./pages/NoPage";
import ViewItem from "./components/ViewItem";
import Profile from "./pages/Profile";
import { useEffect, useContext, useState } from "react";
import { DataContext } from "./context/DataContext";
import { productFetch } from "./js/productFetch";
import Orders from "./pages/Orders";
import Loader from "./components/Loader";

function App() {
  const { responseHandler } = useContext(DataContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await productFetch();
      responseHandler(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
          width: "100%",
        }}
      >
        <Loader color="#32cd32" size="medium" text="" textColor="" />
      </div>
    );
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="Login" element={<Login />} />
            <Route path="Signup" element={<Signup />} />
            <Route element={<PrivateRoute />}>
              <Route path="/AddToCart/:userId" element={<Cart />} />
              <Route path="/profile/:userId" element={<Profile />} />
              <Route path="/orders/:userId" element={<Orders />} />
            </Route>
            <Route path="/ViewItem/:category/:name" element={<ViewItem />} />
            <Route index element={<Home />} />
            <Route path="ourProduct">
              <Route index element={<Product />} />
              <Route path=":category" element={<Product />} />
            </Route>
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
