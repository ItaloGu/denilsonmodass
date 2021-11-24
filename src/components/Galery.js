import { Link } from "react-router-dom";
import axios from "axios";

export default function Galery(props) {
  
  async function handleDelete(id) {
    try {
      await axios.delete(`https://ironrest.herokuapp.com/denilsonmodass/${id}`);
      window.location.reload();
    } catch (err) {
      console.error(err.response.data);
    }
  }

  return (
    <>
      <div className="card p-3 col-4 text-center">
        <Link to={`/products/${props._id}`}>
          <img src={props.image} className="card-img-top" alt={props.name} />
          <div className="card-body">
            <h5
              className="card-title text-decoration-none"
              style={{ color: "black", textDecoration: "none" }}
            >
              {props.name}
            </h5>
            <p className="card-text text-muted text-decoration-none">
              <small>{props.brand}</small>
            </p>
            <p
              className="card-text"
              style={{ color: "black", textDecoration: "none" }}
            >
              <strong>
                {props.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </p>
          </div>
        </Link>
        <i className="fas fa-pen"></i>
        <button
          type="button"
          onClick={() => {
            handleDelete(props._id);
          }}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </>
  );
}
