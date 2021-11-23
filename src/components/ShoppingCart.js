import NavBar from "./NavBar";
import ShoppingCartItens from "./ShoppingCartItens";
export default function ShoppingCart() {
  return (
    <div>
      <NavBar />
      <div className="p-2">
        <h1>Meu Carrinho</h1>
        <div className="d-flex justify-content-center">
        <ShoppingCartItens />
        </div>
      </div>
    </div>
  );
}