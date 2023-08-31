import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import ProductList from "../Pages/ProductList";
import Product from "../Pages/Product";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import Thankyou from "../Pages/Thankyou";
import Notfound from "../Pages/Notfound";

export default function Main() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou/:id" element={<Thankyou />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}
