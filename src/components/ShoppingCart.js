
import ShoppingCartItens from "./ShoppingCartItens";
export default function ShoppingCart(props) {
  return (
    <div>
      <div className="p-2">
        <h1>Meu Carrinho</h1>
        <div className="d-flex justify-content-center">
        <ShoppingCartItens               cartProducts={props.cartProducts}
              setCartProducts={props.setCartProducts}/>
        </div>
      </div>
    </div>
  );
}