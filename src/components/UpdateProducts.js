import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function UpdateProducts() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    image: "",
    price: 0,
    brand: "",
  });
  const [isSending, setIsSending] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      setIsSending(true);
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/denilsonmodass/${id}`
        );
        setFormData([...response.data]);
        setIsSending(false);
      } catch (err) {
        console.error(err);
        setIsSending(false);
      }
    }

    fetchProducts();
  }, [id]);

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    async function updateProduct(id) {
      try {
        await axios.put(
          `https://ironrest.herokuapp.com/denilsonmodass/${id}`,
          formData
        );
        setIsSending(false);
        alert("Successfully updated!");
        navigate("/");
      } catch (err) {
        console.log(err);
        setIsSending(false);
      }
    }

    updateProduct()
  }

  return (<div>
  <form onSubmit={handleSubmit}>
      <div className="">
          <label HtmlFor="product">Nome do produto</label>
          <input
          id="product"
          value={formData.name}
          type="text"
          onChange={handleChange}
          name="name"
          />
      </div>
      <div className="">
          <label HtmlFor="category">Categoria</label>
          <select
          id="category"
          value={formData.category}
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

      <div>
          <label HtmlFor="price">Valor</label>
          <input 
          id="price"
          value={formData.price}
          type="number"
          onChange={handleChange}
          name="price"/> 
      </div>

      <div>
          <label HtmlFor="brand">Marca</label>
          <input
          id="brand"
          value={formData.brand}
          type="text"
          onChange={handleChange}
          name="brand"
          />
      </div>

      <div>
          <label HtmlFor="image">URL da imagem do produto</label>
              <textarea
              id="image"
              name="image"
              value={formData.image}
              type="text"
              onChange={handleChange}
              
              ></textarea>

      </div>

      <div className="mt-3 text-end">
        <button
          disabled={isSending}
          type="submit"
          className="btn btn-primary"
        >
          {isSending ? (
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
          ) : null}
          Submit
        </button>
      </div>


  </form>
</div>);
}
