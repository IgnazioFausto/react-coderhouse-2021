import React, { useEffect, useState } from "react";
import { pedirProductos } from '../../helpers/pedirProductos'
import { ItemList } from "./ItemList";
import './ItemListContainer.scss'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
   

    useEffect(( ) => {

        pedirProductos()
            .then((res) => {
                setItems(res)
                console.log(res)
            })
            .catch((err) => console.log(err))
    }, [])

    return(
        <section className="container my-5">

                <ItemList items={items}/>

        </section>
    )

}