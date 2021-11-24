import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../Style/addProduct.css'

function AddProduct() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: "",
        category: "",
        image: "",
        price: 0,
        brand: ""
    });

  function handleChange(event) {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await axios.post(
        "https://ironrest.herokuapp.com/denilsonmodass",
        product
      );
      navigate("/");
    } catch (error) {
      console.error(error.response.data);
    }
  }

    return (
        <div className="inputs" >
            <form >
                <div className="labelInput">
                    <label HtmlFor="product">Nome do produto</label>
                    <input
                    id="product"
                    value={product.name}
                    type="text"
                    onChange={handleChange}
                    name="name"
                    />
                </div>
                <div className="labelInput">
                    <label HtmlFor="category">Categoria</label>
                    <select
                    id="category"
                    value={product.category}
                    type="text"
                    onChange={handleChange}
                    name="category"
                    >
                    <option value="Camisa">Camisa</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Calça">Calça</option>
                    <option value="Vestido">Vestido</option>
                    <option value="Kimono">Kimono</option>
                    </select>
                </div>

                <div className="labelInput">
                    <label HtmlFor="price">Valor</label>
                    <input 
                    id="price"
                    value={product.price}
                    type="number"
                    onChange={handleChange}
                    name="price"/> 
                </div>

                <div className="labelInput">
                    <label HtmlFor="brand">Marca</label>
                    <input
                    id="brand"
                    value={product.brand}
                    type="text"
                    onChange={handleChange}
                    name="brand"
                    />
                </div>

                <div className="labelInput">
                    <label HtmlFor="image">URL da imagem do produto</label>
                        <textarea
                        id="image"
                        name="image"
                        value={product.image}
                        type="text"
                        onChange={handleChange}
                        
                        ></textarea>

                </div>

                <div className="labelInput-button">
                    <button
                    className="btn"
                    type="submit"
                    onClick={handleSubmit} >Enviar</button>
                </div>
      </form>
    </div>
  );
}
export default AddProduct;
