import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail(props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({
    name: "",
    category: "",
    image: "",
    price: 0,
    brand: "",
  });
  const [cartProduct, setCartProduct] = useState({
    name: "",
    size: "",
    price: "",
    quantity: 0,
  });
  const { id } = useParams();

  function handleChange(event) {
    setCartProduct({
      ...cartProduct,
      [event.target.name]: event.target.value,
    });
  }

  function handleClick(event) {
    event.preventDefault();

    props.setCartProducts({ ...props.cartProducts, ...cartProduct });
    navigate("/shopping-cart");
  }

  useEffect(() => {
    async function Products() {
      try {
        setIsLoading(true);
        const productsList = await axios.get(
          `https://ironrest.herokuapp.com/denilsonmodass/${id}`
        );
        setProduct({ ...productsList.data });
        setCartProduct({
          ...cartProduct,
          name: productsList.data.name,
          price: productsList.data.price,
          image: productsList.data.image,
          brand: productsList.data.brand,
        });
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    }

    Products();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="container m-5">
          <div className="row">
            <div className="col-sm-8" style={{ width: "40vw" }}>
              <img src={product.image} className="card-img-top" alt="example" />
            </div>
            <form className="col-sm-4">
              <h5>{product.name}</h5>
              <strong>
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
              <p>{product.brand}</p>

              <select
                className="form-select mt-3"
                name="quantity"
                id="quantidade"
                onChange={handleChange}
                value={cartProduct.quantity}
              >
                <option value="0">Quantidade</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <input
                className="form-check-input mt-3 ms-2"
                type="radio"
                name="size"
                onChange={handleChange}
                value="P"
                id="P"
              />
              <label className="form-check-label mt-2 ms-2" htmlFor="P">
                P
              </label>

              <input
                className="form-check-input mt-3 ms-2"
                type="radio"
                name="size"
                onChange={handleChange}
                value="M"
              />
              <label className="form-check-label mt-2 ms-2" htmlFor="M">
                M
              </label>

              <input
                className="form-check-input mt-3 ms-2"
                type="radio"
                name="size"
                onChange={handleChange}
                value="G"
                id="G"
              />
              <label className="form-check-label mt-2 ms-2" htmlFor="G">
                G
              </label>

              <button
                type="button"
                className="btn btn-secondary btn-sm ms-3"
                onClick={handleClick}
              >
                Add ao carrinho
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
