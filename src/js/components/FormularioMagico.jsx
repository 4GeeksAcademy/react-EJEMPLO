import React, { useState } from "react";
import "../../styles/formulario-magico.css";

export const FormularioMagico = () => {
  const [datosGuardados, setDatosGuardados] = useState([]);

  const [datos, setDatos] = useState({
    nombre: "",
    especialidad: "",
    nivel: "",
    familiar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDatosGuardados([...datosGuardados, { ...datos }]);
    setDatos({
      nombre: "",
      especialidad: "",
      nivel: "",
      familiar: "",
    });
  };

  return (
    <div className="container p-4 fondo-magico">
      <h2 className="text-center titulo-formulario">📜 Registro de Estudiantes Mágicos</h2>
      <form onSubmit={handleSubmit} className="p-4 rounded shadow bg-light form-magico">
        <div className="mb-3">
          <label>Nombre del aprendiz:</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={datos.nombre}
            onChange={handleChange}
            placeholder="Ej. Hermione Granger"
          />
        </div>

        <div className="mb-3">
          <label>Especialidad mágica:</label>
          <select
            className="form-select"
            name="especialidad"
            value={datos.especialidad}
            onChange={handleChange}
          >
            <option value="">Selecciona una opción</option>
            <option value="Pociones">Pociones</option>
            <option value="Hechizos">Hechizos</option>
            <option value="Criaturas mágicas">Criaturas mágicas</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Nivel:</label>
          <select
            className="form-select"
            name="nivel"
            value={datos.nivel}
            onChange={handleChange}
          >
            <option value="">Selecciona tu nivel</option>
            <option value="Principiante">Principiante</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Familiar mágico:</label>
          <input
            type="text"
            className="form-control"
            name="familiar"
            value={datos.familiar}
            onChange={handleChange}
            placeholder="Ej. Búho, Gato, Sapo..."
          />
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Registrar aprendiz
        </button>
      </form>

      <div className="mt-4">
        <h4>📖 Lista de aprendices registrados:</h4>
        <ul className="list-group mt-3">
          {datosGuardados.map((el, i) => (
            <li key={i} className="tarjeta-aprendiz">
              <span>🧙‍♂️ <strong>Nombre:</strong> {el.nombre}</span>
              <span>✨ <strong>Especialidad:</strong> {el.especialidad}</span>
              <span>📚 <strong>Nivel:</strong> {el.nivel}</span>
              <span>🐾 <strong>Familiar:</strong> {el.familiar}</span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};
