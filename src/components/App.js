import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail"


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productDetail" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
