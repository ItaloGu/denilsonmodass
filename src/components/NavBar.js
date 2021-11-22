import LogoDM from "../images/logos/Logo Denilson Modas-08.png";
export default function NavBar(){
    return(
        <div
        className="d-flex flex-row justify-content-between align-items-start align-self-center p-2"
        style={{ width: "99vw", height: "auto" }}
      >
        <i className="fas fa-bars fa-2x"></i>
        <img
          src={LogoDM}
          alt="denilsonModas"
          style={{ width: "60vw", height: "auto" }}
        />
        <i className="fas fa-shopping-cart fa-2x"></i>
      </div>
    )
}