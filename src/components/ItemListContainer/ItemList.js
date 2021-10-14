import React from 'react'
import { Item } from './Items'

export const ItemList = ({items = []}) => {

    return (
      
            <div className="row">
                { items.map((item) => <Item {...item} key={item.id}/>)}
                    
            </div>

        

    )
}