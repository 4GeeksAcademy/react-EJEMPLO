import React from "react"

export const ListaDeLaCompra = () => {

    return (
        <>

            <div className="container p-3 tex-center">
                <h2>🛒 Mi lista de la compra</h2>
                <form className="d-flex gap-2 mb-3">
                    <input
                        type="text"
                        placeholder="Producto"
                    />
                    <button type="submit">Agregar</button>
                </form>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between">
                        <span> ❌ </span>
                    </li>
                    <p>Añade productos a la lista </p>

                </ul>
            </div>

        </>
    )
}
