import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import Galery from "./Galery";
import NavBar from "./NavBar";
export default function HomePage() {
  const [categories, setCategories] = useState("Categories");
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  function handleChange(event) {
    setCategories(event.target.value);
  }

  useEffect(() => {
    async function Products() {
      try {
        setIsLoading(true);
        const productsList = await axios.get(
          "https://ironrest.herokuapp.com/denilsonmodass"
        );
        setProducts([...productsList.data]);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    }

    Products();
  }, []);


  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <NavBar />
        <div className="d-flex flex-row align-items-center mb-4">
          <select
            className="form-select"
            name="categorias"
            id="categorias"
            onChange={handleChange}
            value={categories}
            style={{ width: "80vw" }}
          >
            <option value="Categorias">Categorias</option>
            <option value="Camisa">Camisa</option>
            <option value="Calça">Calça</option>
            <option value="Regata">Regata</option>
          </select>
          <button type="button" className="btn btn-outline-secondary">
            Filtrar
          </button>
        </div>
        <h2>Produtos</h2>
      </div>
      <div className="container">
        <div className="row">{isLoading ? (<div className="spinner-border text-warning" role="status">
  <span className="visually-hidden">Loading...</span>
</div>) : products.map((product) => <Galery key={product._id} {...product}/>)}</div>
      </div>
    </div>
  );
}
