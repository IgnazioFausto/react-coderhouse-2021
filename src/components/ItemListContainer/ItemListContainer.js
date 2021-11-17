import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router'
import { getFirestore } from '../../firebase/config'
import { ItemList } from './ItemList'
import { LoadingFull } from '../../helpers/LoadingFull'
import { UIContext } from '../../context/UIContext'


export const ItemListContainer = () => {

    const [items, setItems] = useState([])

    const { loading, setLoading } = useContext(UIContext)

    const { categoryId } = useParams()

    try {
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
        }, [categoryId, setLoading])
    } catch (error) {
        console.log(error)
    }




    return (
        <section className="container my-5">

            {
                loading
                    ? <LoadingFull />
                    : <ItemList items={items} />
            }

        </section>
    )

}