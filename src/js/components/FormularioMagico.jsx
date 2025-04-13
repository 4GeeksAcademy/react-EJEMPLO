import React from "react";
import "../../styles/formulario-magico.css";

export const FormularioMagico = () => {


  return (
    <div className="container p-4 fondo-magico">
      <h2 className="text-center titulo-formulario">📜 Registro de Estudiantes Mágicos</h2>
      <form className="p-4 rounded shadow bg-light form-magico">
        <div className="mb-3">
          <label>Nombre del aprendiz:</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Ej. Hermione Granger"
          />
        </div>

        <div className="mb-3">
          <label>Especialidad mágica:</label>
          <select
            className="form-select"
            name="especialidad"
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
          >
            <option value="">Selecciona tu nivel</option>
            <option value="Principiante">Principiante</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Mascota mágica:</label>
          <input
            type="text"
            className="form-control"
            name="mascota"
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
            <li className="tarjeta-aprendiz">
              <span>🧙‍♂️ <strong>Nombre:</strong></span>
              <span>✨ <strong>Especialidad:</strong></span>
              <span>📚 <strong>Nivel:</strong></span>
              <span>🐾 <strong>Familiar:</strong></span>
              <button
                className="btn btn-outline-danger btn-sm mt-2"
              >
                Eliminar
              </button>
            </li>
        </ul>

      </div>
    </div>
  );
};
