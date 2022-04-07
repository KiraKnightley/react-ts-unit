import React, {FC} from 'react';
import {INesting} from '../../types/types';
import image from '../../image/img_card.jpg';
import './Item.css';

interface ItemProps {
    product: INesting;
}

const Item: FC<ItemProps> = ({product}) => {
    return (
        <div className={'item'}>
            <div className={'item_img'}>
                <img src={image} alt="Одежда"/>
            </div>
            <div className={'item-container'}>
                <p className={'item-container_created-name'}>created by</p>
                <h3>{product.created_by.display_name}</h3>
                <div className={'item-container_name'}>
                    <h2>{product.name}</h2>
                </div>
            </div>
            <div className={'item-block_property'}>
                <div className={'item-block_property-left'}>
                    <p className={'item-block_property_grey'}>available</p>
                    <p className={'item-block_property_black'}>{product.quantity_available} of {product.quantity}</p>
                </div>
                <div className={'item-block_property-right'}>
                    <p className={'item-block_property_grey'}>price</p>
                    <p className={'item-block_property_blue'}>{product.initial_price} ETH</p>
                </div>
            </div>
        </div>
    );
};

export default Item;