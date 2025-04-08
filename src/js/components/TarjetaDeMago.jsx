import React from "react";


export const TarjetaDeMago = () => {
    


    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFq-osZFY-XVZhRyzrpChX_QK5JyhxinXiMtYuKzHoyYklAZPdwnQN9ufRGVAIMbbyV5YmEHQbEBWw7UsJ1PgsbF_U22fkEPKeoyHrxxjttBJZNF1m-LqKG9WN_V4fMd-w6rPXPn2ulCY/s1600/Sombrero+seleccionador+acuarela.JPG" className="card-img-top" alt="Mago" />
                <div className="card-body">
                    <h5 className="nombre-mago">Nombre:</h5>
                    <p className="casa-mago">Casa:</p>
                    <p className="año-mago">Año Escolar:</p>
                    <p className="hechizo-mago">Hechizo:</p>
                    <button className="btn registro-mago btn-primary">
                        Registrar Alumno
                    </button>
                </div>
            </div>

        </>
    )
}