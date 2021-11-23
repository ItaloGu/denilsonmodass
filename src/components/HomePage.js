import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import example from "../images/logos/Favicon 01.png";


import Galery from "./Galery";
export default function HomePage() {
  const [categories, setCategories] = useState("Categories");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [productsBkp, setProductsBkp] = useState([]);

  useEffect(() => {
    async function Products() {
      try {
        setIsLoading(true);
        const productsList = await axios.get(
          "https://ironrest.herokuapp.com/denilsonmodass"
        );
        setProductsBkp([...productsList.data]);
        setProducts([...productsList.data]);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    }

    Products();
  }, []);



  function filterProducts(searchTerm) {
   

    const filtered = productsBkp.filter((currentProductObj) => {
      return (
        currentProductObj.category
          .toLowerCase()
        
          .includes(searchTerm.toLowerCase())
      );
    });

    setProducts(filtered);
  }


  function handleChange(event) {
    setCategories(event.target.value);
    if(event.target.value !== 'Categorias'){
      filterProducts(event.target.value);
    } else {filterProducts('');}

  }


  return (
    <div>
      <div className="d-flex flex-column align-items-center">
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
            <option value="Vestido">Vestido</option>
            <option value="Kimono">Kimono</option>
            <option value="Bermudas">Bermudas</option>
          </select>
        </div>
        <h2>Produtos</h2>
      </div>
      <div className="container mb-5">
        <div className="row">
          {isLoading ? (
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            products.map((product) => <Galery key={product._id} {...product} />)
          )}
          <div className="card p-3 col-4 text-center">
       
          <img src={example} className="card-img-top" alt='...' />
          <div className="card-body">
            <h5 className="card-title text-decoration-none" style={{color : "black", textDecoration: "none"}}>Adicionar Peça</h5>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  );
}
