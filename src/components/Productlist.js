import React from 'react';
import { useSelector } from 'react-redux';
import './Productlist.css';

function Productlist({limit, page}) {
    const products = useSelector((state) => state.products.products);
    console.log(products);
    const offset = (page - 1) * limit;

    return (
        <>
        {
            products.slice(offset, offset + limit).map((product, index) => (
                <div className='products_wrap' key={index}>
                    <div>{product.id}</div>
                    <div>{product.title}</div>
                    <div>{product.brand}</div>
                    <div>
                        <div>
                        {product.description}
                        </div>
                    </div>
                    <div>{product.price}</div>
                    <div>{product.rating}</div>
                    <div>{product.stock}</div>
                </div>
            ))
        }
        </>
    );
}

export default Productlist;
