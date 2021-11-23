import ShoppingCart from "./ShoppingCart";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail"
import NavBar from "./NavBar";
import OrdersList from "./OrdersList"
import OrdersListDetail from "./OrdersListDetail";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/products/:id" element={<ProductDetail/>} />
        <Route path="/orders-list" element={<OrdersList />} />
        <Route path="/order-list/:id" element={<OrdersListDetail/>} />
      </Routes>
    </div>
  );
}

export default App;