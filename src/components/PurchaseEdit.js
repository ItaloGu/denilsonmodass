import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PurchaseEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [updatePurchase, setupdatePurchase] = useState({
    userName: "",
    name: "",
    image: "",
    size: "",
    price: 0,
    brand: "",
    quantity: "",
    totalPrice: 0,
  });

  useEffect(() => {
    async function Purchase() {
      try {
        setIsLoading(true);
        const purchaseList = await axios.get(
          `https://ironrest.herokuapp.com/denilsonmodassOrders/${id}`
        );
        delete purchaseList.data._id;
        setupdatePurchase({ ...purchaseList.data });
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    }

    Purchase();
  }, [id]);

  function handleChange(event) {
    setupdatePurchase({
      ...updatePurchase,
      [event.target.name]: event.target.value,
      totalPrice: updatePurchase.price * updatePurchase.quantity,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    async function updateProduct(id) {
      try {
        await axios.put(
          `https://ironrest.herokuapp.com/denilsonmodassOrders/${id}`,
          updatePurchase
        );
        setIsSending(false);
        alert("Successfully updated!");
        navigate("/purchase-list");
      } catch (err) {
        console.log(err);
        setIsSending(false);
      }
    }

    updateProduct(id);
  }

  return (
    <div>
      <h1>Pagina de Edição</h1>
      {isLoading ? (
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
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
                          src={updatePurchase.image}
                          className="img-fluid rounded-start"
                          alt={updatePurchase.name}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body mt-3">
                          <h5 className="card-title">{updatePurchase.name}</h5>
                          <p className="card-text text-muted">
                            {updatePurchase.brand}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border">
                  {updatePurchase.price.toLocaleString("pt-BR", {
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
                    value={updatePurchase.quantity}
                    onChange={handleChange}
                  />
                </td>
                <td className="border">
                  <p>{updatePurchase.size}</p>
                </td>
              </tr>
              <tr>
                <td className="border"></td>
                <td className="border"></td>
                <td className="border"></td>
                <td className="border"></td>
                <td className="border">
                  {(
                    updatePurchase.price * updatePurchase.quantity
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
                value={updatePurchase.userName}
                type="text"
                onChange={handleChange}
                name="userName"
              />
            </div>
          </form>
          <button
            type="submit"
            className="btn btn-outline-secondary"
            onClick={handleSubmit}
          >
            {" "}
            {isSending ? (
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
            ) : null}
            Finalizar edição
          </button>
        </div>
      )}
    </div>
  );
}
