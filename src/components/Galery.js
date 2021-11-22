import example from "../images/logos/Favicon 01.png";

export default function Galery(){
    return(
        <>
         <div className="card p-3 col-4">
            <img src={example} className="card-img-top" alt="example" />
            <div className="card-body">
              <h5 className="card-title">Nome da roupa</h5>
              <p className="card-text">
                <p className="card-text text-muted">marca</p>
                <strong>R$ 999,99</strong>
              </p>
            </div>
          </div>
          <div className="card p-3 col-4">
            <img src={example} className="card-img-top" alt="example" />
            <div className="card-body">
              <h5 className="card-title">Nome da roupa</h5>
              <p className="card-text">
                <p className="card-text text-muted">marca</p>
                <strong>R$ 999,99</strong>
              </p>
            </div>
          </div>
          <div className="card p-3 col-4">
            <img src={example} className="card-img-top" alt="example" />
            <div className="card-body">
              <h5 className="card-title">Nome da roupa</h5>
              <p className="card-text">
                <p className="card-text text-muted">marca</p>
                <strong>R$ 999,99</strong>
              </p>
            </div>
          </div>
          <div className="card p-3 col-4">
            <img src={example} className="card-img-top" alt="example" />
            <div className="card-body">
              <h5 className="card-title">Nome da roupa</h5>
              <p className="card-text">
                <p className="card-text text-muted">marca</p>
                <strong>R$ 999,99</strong>
              </p>
            </div>
          </div>
        </>
    )
}