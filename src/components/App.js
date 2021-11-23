import ShoppingCart from "./ShoppingCart";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;