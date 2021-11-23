import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Galery from "./Galery";
import NavBar from "./NavBar";
export default function HomePage() {
  const [categories, setCategories] = useState("Categories");

  function handleChange(event) {
    setCategories(event.target.value);
  }
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
            <option value="Vestido">Vestido</option>
            <option value="Kimono">Kimono</option>
            <option value="Bermudas">Bermudas</option>
          </select>
          <button type="button" className="btn btn-outline-secondary">
            Filtrar
          </button>
        </div>
        <h2>Produtos</h2>
      </div>
      <div className="container">
        <div className="row">
          <Galery />
        </div>
      </div>
    </div>
  );
}
