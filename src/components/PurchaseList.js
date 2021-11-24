import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PurchaseList() {
  const [purchase, setPurchase] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function Purchases() {
      try {
        setIsLoading(true);
        const purchaseList = await axios.get(
          "https://ironrest.herokuapp.com/denilsonmodassOrders"
        );
        setPurchase([...purchaseList.data]);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    }

    Purchases();
  }, []);

  console.log(purchase);
  return (
    <div>
      <h1>Lista de pedidos</h1>
      <div>
        <ul>
          {isLoading ? (
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            purchase.map((currentPurchase) => {
              return (
                <Link to={`/purchase-list/${currentPurchase._id}`}>
                  <li>
                    Nome do Cliente: {currentPurchase.userName} || Valor da
                    compra: R${currentPurchase.totalPrice},00
                  </li>
                </Link>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
}
