import React from "react";


//para controlar la cantidad del producto a pedir
export const ItemCount = ({ quantity, cantidad, setCantidad }) => {
    //condicionamos para no permitir ni cantidad en 0 ni pedir más de lo que se indica en quantity (bd)
    const handleRestar = () => {
        if (cantidad > 0) { 
        setCantidad(cantidad - 1) }
    }
    const handleSumar = () => {
        if (cantidad < quantity) { 
        setCantidad(cantidad + 1)}
    }
    return (
            
        <div>
            <div>Stock: {quantity} kg.</div>
            <br/>
            <button
                onClick={handleRestar}
                className={`btn ${cantidad === 0 ? "invisible" : "btn-success"}`}> - 
            </button>
            <span className="mx-3">{cantidad} Kg</span>
            <button
                onClick={handleSumar}
                className={`btn ${cantidad >= quantity ? "invisible" : "btn-success"}`}>+
            </button>
        </div>
    )
}