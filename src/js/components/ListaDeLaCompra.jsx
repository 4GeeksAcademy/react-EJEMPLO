import React, { useEffect, useState } from "react";



export const ListaDeLaCompra = () => {

    // Estado para el producto
    // Estado para la lista
    // Input CONTROLADO (el dato que añadimos a traves del input)
    // Añadir a la lista
    // Mostrar los productos
    
    
    const [producto, setProducto] = useState("")
    const [lista, setLista] = useState([])

    const añadirProducto = (nuevoProducto) => {
        setProducto(nuevoProducto.target.value)
    }


    const actualizarLista = (e) => {
        e.preventDefault()
        setLista([...lista, producto])
        setProducto("")
    }

    const eliminarProducto  = (e) => {
        setLista(lista.filter((_,i) => i !== e))
    }

    useEffect(() => {
        console.log(lista);
        
    }, [lista])

    return (
        <>

            <div className="container p-3 tex-center">
                <h2>🛒 Mi lista de la compra</h2>
                <form onSubmit={actualizarLista} className="d-flex gap-2 mb-3">
                    <input
                        type="text"
                        placeholder="Producto"
                        value={producto}
                        onChange={añadirProducto}
                    />
                    {/* <input
                        type="number"
                        placeholder="Cantidad"
                    /> */}
                    <button type="submit">Agregar</button>
                </form>

                <ul className="list-group">
                    { 
                        lista.map((elemento, indice)=> 
                           {return <li key={indice} className="list-group-item d-flex justify-content-between">
                            {elemento}
                            <span onClick={() => {eliminarProducto(indice)}}> ❌ </span>
                        </li> }
                        )
                         
                    }
                       <p> {lista.length > 0 ? `Todo esto tienes que comprar: ${lista.length}` : `Añade productos a la lista`}  </p>
               
                </ul>
            </div>

        </>
    )
}