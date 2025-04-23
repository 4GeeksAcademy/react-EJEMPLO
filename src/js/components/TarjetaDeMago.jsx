import React from "react";

export const TarjetaDeMago = () => {
  return (
    <div className="text-center">
      <div className="card">
        <div className="card-body">
          <img
            className="card-img-top"
            src="https://ik.imagekit.io/hpapi/harry.jpg"
            alt="Harry Potter"
          />
          <h5 className="nombre-mago">Nombre: Harry Potter</h5>
          <p className="casa-mago">Casa: Gryffindor</p>
          <p className="año-mago">Año: 5º</p>
          <p className="hechizo-mago">Hechizo favorito: Expelliarmus</p>
        </div>
      </div>
    </div>
  );
};
