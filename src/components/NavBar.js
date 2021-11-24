import LogoDM from "../images/logos/Logo Denilson Modas-08.png";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div
      className="d-flex flex-row justify-content-between align-items-start align-self-center p-2"
      style={{ width: "98vw", height: "auto" }}
    >
      <Link to="/purchase-list">
        <i className="fas fa-bars fa-2x" style={{ color: "black" }}></i>
      </Link>
      <Link to="/">
        <img
          src={LogoDM}
          alt="denilsonModas"
          style={{ width: "30vw", height: "auto" }}
        />
      </Link>
      <Link to="/shopping-cart">
        <i
          className="fas fa-shopping-cart fa-2x"
          style={{ color: "black" }}
        ></i>
      </Link>
    </div>
  );
}
