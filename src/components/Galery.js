import { Link } from "react-router-dom";

export default function Galery(props) {
  return (
    <>
      
        <div className="card p-3 col-4 text-center">
        <Link to={`/products/${props._id}`}>
        <div style={{height: '507.5px', width: '406px'}}>
          <img src={props.image} className="card-img-top" alt={props.name} />
          </div>
          <div className="card-body">
            <h5 className="card-title text-decoration-none" style={{color : "black", textDecoration: "none"}}>{props.name}</h5>
            <p className="card-text text-muted text-decoration-none">
              <small>{props.brand}</small>
            </p>
            <p className="card-text" style={{color : "black", textDecoration: "none"}}>
              <strong>
                {props.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </p>
          </div>
          </Link>
        </div>
      
    </>
  );
}
