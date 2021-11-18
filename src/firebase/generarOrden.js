import { getFirestore } from './config'
import firebase from 'firebase'
import 'firebase/firestore'

export const generarOrden = (datos, cart, total) => {

    //generamos la orden del cart mediante una promise

    return new Promise(async (resolve, reject) => {
        //orden para base de datos
        //que incluye los datos del comprador, los items del cart (con sus propiedades: id, precio y cantidad)
        // el total por props y en date guardamos la hora del pedido
        const orden = {
            buyer: {
                datos,
            },
            items: cart.map((el) => ({ id: el.id, precio: el.precio, cantidad: el.cantidad })),
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }
        //enviar orden a firestore
        const db = getFirestore()
        const orders = db.collection('orders')

        //indicamos que el update debe hacerse sobre los productos que coincidan en su id
        const itemsToUpdate = db.collection('productos')
            .where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(el => el.id))

        //indicamos que la orden espere para confirmar stock
        const query = await itemsToUpdate.get();
        const batch = db.batch();

        //const donde tendremos los productos que estén fuera de stock
        const outOfStock = [];

        //buscamos, dentro del cart, los productos que no cuenten con stock
        query.docs.forEach((doc) => {
            const itemInCart = cart.find(prod => prod.id === doc.id)

            //condicionamos si la cantidad pedida es menor o igual a la almacenada en bd
            //hacemos batch actualizando, restando la cantidad pedida a la existente en bd
            if (doc.data().quantity >= itemInCart.cantidad) {
                batch.update(doc.ref, { quantity: doc.data().quantity - itemInCart.cantidad })
                
            //si la cantidad pedida es menor a la cantidad de la bd
            //mandamos ese producto al array outOfStock
            } else {
                outOfStock.push({ ...doc.data(), id: doc.id })
            }
        })

        //en caso de tener stock en todos los productos.
        if (outOfStock.length === 0) {

            orders.add(orden)
                .then((res) => {
                    batch.commit()
                    resolve(res.id)
                })
        } else {
            reject(outOfStock)
        }
    })
}



