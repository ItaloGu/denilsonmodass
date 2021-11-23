import ShoppingCart from "./ShoppingCart";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
function App() {
  return (
    <div>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;