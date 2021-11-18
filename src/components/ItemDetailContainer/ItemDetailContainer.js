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

        
        //obtenemos los datos desde firestore 
        const db = getFirestore()
        const productos = db.collection('productos')
        const item = productos.doc(itemId)
        //hacemos un get de los documentos dentro de la colección productos y seteamos los items
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
                { //mostramos en el ItemDetail los items desde bd
                    loading
                        ? <LoadingFull />
                        : <ItemDetail {...item} />
                        
                }
            </div>
    )
}