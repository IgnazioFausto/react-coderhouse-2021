import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase/config";
import { Loading } from "../../helpers/loading";
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

    const[item, setItem] = useState(null)

    const {itemId} = useParams()

    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)

        const db =getFirestore()
        const productos = db.collection('productos')
        const item = productos.doc(itemId)

        item.get()
            .then( doc => {
                setItem( {
                    id: doc.id,
                    ...doc.data()
                })
                setLoading(false)
            } )
    }, [itemId])

    return(
        <div>
            {
                loading 
                ? <Loading/>
                : <ItemDetail {...item}/>
            }


        </div>
    )
}