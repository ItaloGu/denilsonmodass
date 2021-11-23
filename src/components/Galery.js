export default function Galery(props) {
  return (
    <>
      <div className="card p-3 col-4">
        <img src={props.image} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>

          <p className="card-text text-muted"><small>{props.brand}</small></p>
          <p className="card-text">
            <strong>{props.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
          </p>
        </div>
      </div>
    </>
  );
}
