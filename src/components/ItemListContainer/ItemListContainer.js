import React from 'react';
import './itemListContainer.css'
import ItemListContainerCard from './ItemListContainerCard';

const ItemListContainer = () => {
    return (
        <div id="itemListContainer">
            <ItemListContainerCard src="http://placekitten.com/200/250" itemName="Gato Macho" price="$0"/>
            <ItemListContainerCard src="http://placekitten.com/250/350" itemName="Gato Hembra" price="$0"/>
        </div>
    );
}

export default ItemListContainer