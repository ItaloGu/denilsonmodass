export default function OrdersListDetail() {
  return (
    <div>
      <h2>Client Name</h2>
      <table className="">
        <thead>
          <th>Produtos</th>
          <th>Quantidade</th>
          <th>Valor Produtos</th>
          <th>Valor Total</th>
        </thead>
        <tbody>
          <tr>
            <td>Camisa</td>
            <td>1</td>
            <td>R$ 999,99</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>R$ 999,99</td>
          </tr>
        </tbody>
      </table>
      <button type="submit" className="btn ">Editar</button>
      <button type="submit" className="btn ">Apagar</button>
    </div>
  );
}
