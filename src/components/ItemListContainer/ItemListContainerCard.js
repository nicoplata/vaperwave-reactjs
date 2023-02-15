import React from 'react';

const ItemListContainerCard = ({ src, itemName, price }) => {
    return (
        <div className="itemListContainerCard">
            <img src={src}/>
            <div className="cardInfo">
                <p id="itemName">{itemName}</p>
                <p id="price">{price}</p>
            </div>
        </div>
    );
}

export default ItemListContainerCard