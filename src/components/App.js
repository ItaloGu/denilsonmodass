import ShoppingCart from "./ShoppingCart";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail"
import AddProduct from "./AddProduct"


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;