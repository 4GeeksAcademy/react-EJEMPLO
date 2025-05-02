import { useState } from "react";

function FormularioMagico({ registrarAlumno }) {
  const [nombre, setNombre] = useState("");
  const [casa, setCasa] = useState("");
  const [anio, setAnio] = useState("");
  const [hechizo, setHechizo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && casa && anio && hechizo) {
      registrarAlumno({ nombre, casa, anio, hechizo });
      setNombre("");
      setCasa("");
      setAnio("");
      setHechizo("");
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold mb-2">Registrar Aprendiz</h2>

      <input
        type="text"
        placeholder="Nombre del aprendiz"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />

      <input
        type="text"
        placeholder="Casa (Ej: Gryffindor)"
        value={casa}
        onChange={(e) => setCasa(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />

      <input
        type="number"
        placeholder="Año"
        value={anio}
        onChange={(e) => setAnio(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />

      <input
        type="text"
        placeholder="Hechizo favorito"
        value={hechizo}
        onChange={(e) => setHechizo(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />

      <button
        type="submit"
        className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
      >
        Registrar
      </button>
    </form>
  );
}

export default FormularioMagico;
