import LogoDM from "../images/logos/Logo Denilson Modas-08.png";
import { Link } from "react-router-dom";
import "../Style/NavBar.css"

export default function NavBar() {
  return (
    <div>
      <div
        className=" NavIcon "
        
      >
        <div>
          <Link to="/purchase-list">
          <i className="fas fa-bars fa-2x" style={{ color: "black" }}></i>
          </Link>
        </div>
        
        <div className=" d-flex align-items-center">
          <Link to="/add-product">
            <button >
              <i className="fas fa-plus"></i> <p>Adicione seu produto</p>
            </button>
          </Link>
          <Link to="/shopping-cart">
            <i
              className="fas fa-shopping-cart fa-2x"
              style={{ color: "black" }}
            ></i>
          </Link>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
          <Link to="/">
            <img
              src={LogoDM}
              alt="denilsonModas"
              style={{ width: "20vw", height: "auto" }}
            />
          </Link>
        </div>
    </div>
  );
}
