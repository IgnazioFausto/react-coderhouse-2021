import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getFirestore } from '../../firebase/config'
import { ItemList } from './ItemList'
import { Loading } from '../../helpers/loading'


export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    
    const [loading, setLoading] = useState(false)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const db = getFirestore();
        const productos = db.collection('productos');

        if (categoryId) {
            const filtrado = productos.where('category', '==', categoryId)
            filtrado.get()
                .then((response) => {
                    const newItems = response.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() }
                    })
                    setItems(newItems)
                })

                .catch((err) => console.log(err))
                .finally(() => {
                    setLoading(false)
                })
            
        } else {

            
            productos.get()
            .then((response) => {
                const newItems = response.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                setItems(newItems)
            })

            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })
            
        }
    }, [categoryId])

    return (
        <section className="container my-5">

            {
                loading
                    ? <Loading />
                    : <ItemList items={items} />
            }

        </section>
    )

}