import ShoppingCart from "./ShoppingCart";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import AddProduct from "./AddProduct";
import { useState } from "react";

import NavBar from "./NavBar";
import PurchaseList from "./PurchaseList";
import PurchaseListDetail from "./PurchaseListDetail";
import UpdateProducts from "./UpdateProducts";
import PurchaseEdit from "./PurchaseEdit";

function App() {
  const [cartProducts, setCartProducts] = useState({
    userName: "",
    name: "",
    image: "",
    size: "",
    price: "",
    brand: "",
    quantity: 0,
    totalPrice: 0,
  });

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route
          path="/shopping-cart"
          element={
            <ShoppingCart
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          }
        />
        <Route path="/add-product" element={<AddProduct />} />
        <Route
          path="/products/:id"
          element={
            <ProductDetail
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          }
        />
        <Route path="/purchase-list" element={<PurchaseList />} />
        <Route
          path="/purchase-list/:id"
          element={
            <PurchaseListDetail
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          }
        />
        <Route path="/update-products/:id" element={<UpdateProducts />} />
        <Route path="/purchase-edit/:id" element={<PurchaseEdit />} />
      </Routes>
    </div>
  );
}

export default App;
