import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function PurchaseListDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [purchase, setPurchase] = useState({
    _id: "",
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
    async function Products() {
      try {
        setIsLoading(true);
        const purchaseList = await axios.get(
          `https://ironrest.herokuapp.com/denilsonmodassOrders/${id}`
        );
        setPurchase({ ...purchaseList.data });
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    }

    Products();
  }, [id]);

  async function handleDelete(id) {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/denilsonmodassOrders/${id}`
      );
      navigate("/purchase-list");
    } catch (err) {
      console.error(err.response.data);
    }
  }

  return (
    <>
      {isLoading ? (
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="m-4">
          <h1>{purchase.userName}</h1>
          <table className="border text-center">
            <thead>
              <tr>
                <th className="border" style={{ width: "60vw" }}>
                  Produto
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
                          src={purchase.image}
                          className="img-fluid rounded-start"
                          alt={purchase.name}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body mt-3">
                          <h5 className="card-title">{purchase.name}</h5>
                          <p className="card-text text-muted">
                            {purchase.brand}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border">
                  {parseInt(purchase.price).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td className="border">
                  <p>{parseInt(purchase.quantity)}</p>
                </td>
                <td className="border">
                  <p>{purchase.size}</p>
                </td>
              </tr>
              <tr>
                <td className="border"></td>
                <td className="border"></td>
                <td className="border"></td>
                <td className="border"></td>
                <td className="border">
                  {parseInt(purchase.totalPrice).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type="button"
            onClick={() => {
              navigate(`/purchase-edit/${id}`);
            }}
            className="btn btn-outline-secondary mt-2"
          >
            Editar
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary mt-2"
            onClick={() => {
              handleDelete(id);
            }}
          >
            Apagar
          </button>
        </div>
      )}
    </>
  );
}
