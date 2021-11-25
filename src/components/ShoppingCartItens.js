import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ShoppingCartItens(props) {
  const navigate = useNavigate();
  function handleChange(event) {
    props.setCartProducts({
      ...props.cartProducts,
      [event.target.name]: event.target.value,
      totalPrice: props.cartProducts.price * props.cartProducts.quantity,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await axios.post(
        "https://ironrest.herokuapp.com/denilsonmodassOrders",
        props.cartProducts
      );
      navigate("/");
    } catch (error) {
      console.error(error.response.data);
    }
  }

  return (
    <div className="d-flex flex-column align-items-end">
      <table className="border text-center mb-2">
        <thead>
          <tr>
            <th className="border" style={{ width: "60vw" }}>
              Produtos
            </th>
            <th className="border" style={{ width: "10vw" }}>
              Preços
            </th>
            <th className="border" style={{ width: "10vw" }}>
              Quantidade
            </th>
            <th className="border" style={{ width: "10vw" }}>
              Tamanho
            </th>
            <th className="border" style={{ width: "10vw" }}>
              Total
            </th>
          </tr>
        </thead>

        <tbody className="border">
          <tr className="border">
            <td className="border">
              <div className="m-1">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={props.cartProducts.image}
                      className="img-fluid rounded-start"
                      alt={props.cartProducts.name}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body mt-3">
                      <h5 className="card-title">{props.cartProducts.name}</h5>
                      <p className="card-text text-muted">
                        {props.cartProducts.brand}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td className="border">
              {parseInt(props.cartProducts.price).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </td>
            <td className="border">
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                style={{ width: "5vw" }}
                value={props.cartProducts.quantity}
                onChange={handleChange}
              />
            </td>
            <td className="border">
              <p>{props.cartProducts.size}</p>
            </td>
          </tr>
          <tr>
            <td className="border"></td>
            <td className="border"></td>
            <td className="border"></td>
            <td className="border"></td>
            <td className="border">
              {(
                parseInt(props.cartProducts.price) * parseInt(props.cartProducts.quantity)
              ).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </td>
          </tr>
        </tbody>
      </table>
      <form>
        <div className="mb-2">
          <label HtmlFor="userNameImput">Nome completo: </label>
          <input
            id="userNameImput"
            value={props.cartProducts.userName}
            type="text"
            onChange={handleChange}
            name="userName"
            required
          />
        </div>
      </form>
      <button
        type="submit"
        className="btn btn-outline-secondary"
        onClick={handleSubmit}
      >
        Finalizar compra
      </button>
    </div>
  );
}
