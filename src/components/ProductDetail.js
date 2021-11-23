import example from "../images/logos/Favicon 01.png";

export default function ProductDetail(props) {
    return (
        <div className="container m-5" >
            <div className="row">
                <div className="col-sm-8" style={{width: "40vw"}}>
                    <img src={example} className="card-img-top" alt="example" />
                </div>
                <form className="col-sm-4" >
                    <h5>Nome da roupa</h5>
                    <strong>R$ 999,99</strong>
                    <p>Marca</p>

                    
                    <select
                    className="form-select mt-3"
                    name="quantidade"
                    id="quantidade"
                    >
                
                    <option value="Quantidade">Quantidade</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select>
                    
                        <input
                            className="form-check-input mt-3 ms-2"
                            type="radio"
                            name="tamanho"
                            
                        />
                        <label className="form-check-label mt-2 ms-2" htmlFor={props.id}>P
                            
                        </label>

                        <input
                            className="form-check-input mt-3 ms-2"
                            type="radio"
                            name="tamanho"
                            
                        />
                        <label className="form-check-label mt-2 ms-2" htmlFor={props.id}>M
                            
                        </label>

                        <input
                            className="form-check-input mt-3 ms-2"
                            type="radio"
                            name="tamanho"
                            
                        />
                        <label className="form-check-label mt-2 ms-2" htmlFor={props.id}>G
                            
                        </label>

                        <button type="button" className="btn btn-secondary btn-sm ms-3">Add ao carrinho</button>
                   
                </form>
            </div>
        </div>

    );

}