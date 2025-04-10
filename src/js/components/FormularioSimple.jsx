import React, { useState } from "react";



export const FormularioSimple = () => {

    const [datosGuardados, setDatosGuardados] = useState([])

    const [datos, setDatos] = useState({
        nombre: "",
        apellido: "",
        ciudad: "",
        edad: ""
    })


    const handleChange = (miDatoNuevo) => {
        const { name, value } = miDatoNuevo.target
        setDatos({
            ...datos,
            [name]: value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setDatosGuardados([...datosGuardados, {...datos}])
        setDatos({
            nombre: "",
            apellido: "",
            ciudad: "",
            edad: ""
        })
    }






    return (
        <>

            <h2>El formulario mas feo del mundo :D </h2>
            <form onSubmit={handleSubmit} className="d-flex flex-column col-lg-6 mx-auto p-3 gap-4">
                <label>Introduce tu nombre:
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Escribe aquí tu nombre"
                        value={datos.nombre}
                        onChange={handleChange}
                    />
                </label>
                <label>Introduce tu apellido:
                    <input
                        type="text"
                        name="apellido"
                        placeholder="Escribe tu apellido"
                        value={datos.apellido}
                        onChange={handleChange} />
                </label>
                <label>Introduce tu ciudad:
                    <input
                        type="text"
                        name="ciudad"
                        placeholder="Escribe tu apellido"
                        value={datos.ciudad}
                        onChange={handleChange}
                    />
                </label>
                <label>Introduce tu edad:
                    <input
                        type="text"
                        name="edad"
                        placeholder="Escribe tu apellido"
                        value={datos.edad}
                        onChange={handleChange}
                    />
                </label>
                <div>
                    <input
                        type="submit"
                        name="envio" />
                </div>
            </form >

            <ul className="d-flex flex-column col-lg-6 mx-auto p-3 gap-4">
                {datosGuardados.map((el, i)=>(
                   <li key={i}>
                    {el.nombre} {el.apellido}{el.ciudad} {el.edad}
                   </li> 
                ))}
            </ul>
        </>
    )


}


