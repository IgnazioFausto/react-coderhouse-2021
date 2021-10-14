import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { pedirProductos } from "../../helpers/pedirProductos";
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

    const[item, setItem] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        pedirProductos()
            .then( res => {
                setItem( res.find( prod => prod.id === Number(itemId)))
            } )
    }, [itemId])

    return(
        <div>
            {
                <ItemDetail {...item}/>
            }


        </div>
    )
}