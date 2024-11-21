import React, { useState } from "react";

const Formulario = () => {
  // Estado para cada campo del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    edad: false,
    lenguaje: "",
    terminos: false,
  });

  // Manejador para actualizar el estado
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Manejador para el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.terminos) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }
    alert("Formulario enviado con éxito!");
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campo de Nombre */}
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Ingresa tu nombre"
          required
        />
      </div>

      {/* Campo de Apellido */}
      <div>
        <label>Apellido:</label>
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          placeholder="Ingresa tu apellido"
          required
        />
      </div>

      {/* Checkbox para Edad */}
      <div>
        <label>
          <input
            type="checkbox"
            name="edad"
            checked={formData.edad}
            onChange={handleChange}
          />
          Soy mayor de edad
        </label>
      </div>

      {/* Lista de Lenguajes */}
      <div>
        <label>Lenguaje de programación favorito:</label>
        <select
          name="lenguaje"
          value={formData.lenguaje}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona un lenguaje</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C++">C++</option>
        </select>
      </div>

      {/* Checkbox para Términos y Condiciones */}
      <div>
        <label>
          <input
            type="checkbox"
            name="terminos"
            checked={formData.terminos}
            onChange={handleChange}
          />
          He leído todos los términos y condiciones
        </label>
      </div>

      {/* Botón de Enviar */}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
