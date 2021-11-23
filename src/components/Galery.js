export default function Galery(props) {
  return (
    <>
      <div className="card p-3 col-4">
        <img src={props.products[0].image} className="card-img-top" alt={props.products[0].name} />
        <div className="card-body">
          <h5 className="card-title">{props.products[0].name}</h5>

          <p className="card-text text-muted"><small>{props.products[0].brand}</small></p>
          <p className="card-text">
            <strong>{props.products[0].price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
          </p>
        </div>
      </div>
    </>
  );
}
