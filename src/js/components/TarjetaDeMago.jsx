import React, { useEffect, useState } from "react";


export const TarjetaDeMago = () => {

    const [magos, setMagos] = useState([])


    const getMagos = () => {
        fetch("https://hp-api.onrender.com/api/characters/")
            .then(response => response.json())
            .then(data => setMagos(data))
            .catch(error => console.error("error al traer los magos", error))
    }

    useEffect(() => {
        getMagos()
    }, [])

    useEffect(() => {
        console.log(magos);
    }, [magos])

    return (
        <>
            {magos.map((mago) => (
                <div className="card">
                    <div
                        key={mago.id || mago.name}
                        className="card-body"
                    >
                        <img
                            src={mago.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUB-W_y_MKBEiMKMsS9Pg8H7h4irTjKG-4Q&s"}
                            alt={mago.name}
                            className="card-img-top"
                        />
                        <h5
                            className={mago.name}
                        >
                            Nombre del Mago: {mago.name} </h5>
                    <p className={mago.house}>Casa: {mago.house}</p>        
                    </div>
                    


                </div>))}



        </>
    )
}