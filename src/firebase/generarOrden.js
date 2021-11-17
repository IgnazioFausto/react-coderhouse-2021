import { getFirestore } from './config'
import firebase from 'firebase'
import 'firebase/firestore'

export const generarOrden = (datos, cart, total) => {

    return new Promise(async (resolve, reject) => {
        //orden para base de datos
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
        const itemsToUpdate = db.collection('productos')
            .where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(el => el.id))

        const query = await itemsToUpdate.get();
        const batch = db.batch();

        const outOfStock = [];

        query.docs.forEach((doc) => {
            const itemInCart = cart.find(prod => prod.id === doc.id)

            if (doc.data().quantity >= itemInCart.cantidad) {
                batch.update(doc.ref, { quantity: doc.data().quantity - itemInCart.cantidad })
            } else {
                outOfStock.push({ ...doc.data(), id: doc.id })
            }
        })

        //en caso de éxito.
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



