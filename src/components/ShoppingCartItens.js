import example from "../images/logos/Favicon 01.png";

export default function ShoppingCartItens() {
  return (
    <div className="d-flex flex-column align-items-end">
      <table className="border text-center">
        <thead>
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
            Total Parcial
          </th>
          <th className="border" style={{ width: "10vw" }}>
            Total
          </th>
        </thead>

        <tbody className="border">
          <tr className="border">
            <td className="border">
              <div className="m-1">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={example}
                      className="img-fluid rounded-start"
                      alt="example"
                    />
                  </div>
                  <div class="col-md-8">
                    <div className="card-body mt-5">
                      <h5 className="card-title">Nome da roupa</h5>
                      <p className="card-text text-muted">marca</p>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td className="border">R$ 999,99</td>
            <td className="border">
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                style={{ width: "5vw" }}
              />
            </td>
            <td className="border">R$ 999,99</td>
          </tr>
          <tr>
            <td className="border"></td>
            <td className="border"></td>
            <td className="border"></td>
            <td className="border"></td>
            <td className="border">R$ 999,99</td>
          </tr>
        </tbody>
      </table>
      <button type="submit" className="btn btn-outline-secondary">
        Finalizar compra
      </button>
    </div>
  );
}
