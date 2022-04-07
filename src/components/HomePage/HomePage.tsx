import React, {FC, useCallback, useEffect, useState} from 'react';
import './HomePage.css';
import axios from "axios";
import List from "../List/List";
import {INesting} from "../../types/types";
import Item from "../Item/Item";

const HomePage: FC = () => {
    const [product, setProduct] = useState<INesting[]>([]);
    const [check, setCheck] = useState(false);

    useEffect(() => {
        fetchProduct();
    }, []);

    async function fetchProduct() {
        try {
            const response = await axios.get('https://artisant.io/api/products')
            setProduct(response.data.data.products)
        } catch (e) {
            alert(e);
        }
    }
    const available: INesting[] = [];
    for (let i=0; i < product.length; i++){
        let count = product[i].quantity_available
        if (count >= 1){
            available.push(product[i])
        }
    }
    const handleClick = useCallback((check) => {
        if (!check){
            setCheck(true);
        } else {
            setCheck(false);
        }

    },[])
    return (
        <div className={'homepage'}>
            <h1>Explore</h1>
            <p className={'homepage_title'}>Buy and sell digital fashion NFT art</p>
            <input type="checkbox" id={'available'} onClick={() => handleClick(check)}/>
            <label>available</label>
            <div className={'homepage_list'}>
                {!check ? (<List items={product} renderItem={(product : INesting) =>
                    <Item
                        key={product.product_id}
                        product={product}/>}
                />) : (<List items={available} renderItem={(available : INesting) =>
                    <Item
                        key={available.product_id}
                        product={available}/>}
                />)}
            </div>
        </div>
    );


};

export default HomePage;