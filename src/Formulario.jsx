import axios from "axios";
import React, { useState } from "react";
import "./Formulario.css";

export default function Formulario() {
  const [formData, setFormData] = useState({
    name: "",
    internal_ref: "",
    sales_price: "",
    cost: "",
    available_quantity: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios
      .post("https://inventario-v6bv.onrender.com/create/", formData)
      .then((response) => {
        console.log("si se hizo la conexion"); 
        console.log(response.data);
      })
      .catch((error) => {
        console.log("no se hizo la conexion");
        console.error(error);
      });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="titulo">
        <h2>Producto Nuevo</h2>
      </div>
      <div className="campos">
        <label>Nombre:</label>
        <input name="name" onChange={handleInputChange} />
        <br></br>
        <label>Referencia Interna:</label>
        <input name="internal_ref" onChange={handleInputChange} />
        <br></br>
        <label>Precio de Venta:</label>
        <input name="sales_price" onChange={handleInputChange} />
        <br></br>
        <label>Costo:</label>
        <input name="cost" onChange={handleInputChange} />
        <br></br>
        <label>Cantidad disponible:</label>
        <input name="available_quantity" onChange={handleInputChange} />
        <br></br>
        <button type="submit">Agregar Producto</button>
      </div>
    </form>
  );
}
