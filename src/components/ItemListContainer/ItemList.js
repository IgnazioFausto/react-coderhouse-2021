import React from 'react'
import { Item } from './Items'

export const ItemList = ({items = []}) => {

    return (
            //mapeamos los items pasados por props y le asignamos por key su id
            <div className="row">
                { items.map((item) => <Item {...item} key={item.id}/>)}
                    
            </div>

        

    )
}