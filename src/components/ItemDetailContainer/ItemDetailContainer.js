import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UIContext } from "../../context/UIContext";
import { getFirestore } from "../../firebase/config";
import { LoadingFull } from "../../helpers/LoadingFull";
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const { itemId } = useParams()

    const { loading, setLoading } = useContext(UIContext)

    
    useEffect(() => {

        setLoading(true)

        const db = getFirestore()
        const productos = db.collection('productos')
        const item = productos.doc(itemId)

        item.get()
            .then(doc => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
                setLoading(false)
            
            })
           
        }, [itemId, setLoading])
    
    
    return (
            <div>
                {
                    loading
                        ? <LoadingFull />
                        : <ItemDetail {...item} />
                        
                }
            </div>
    )
}