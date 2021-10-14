import { productos } from "../data/productos"

export const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(productos)
        },1500)
    })
}
