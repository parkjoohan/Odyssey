import React from 'react';
import { useSelector } from 'react-redux';
import './Productlist.css';

function Productlist({ limit, page }) {
    const products = useSelector((state) => state.products.products);
    const offset = (page - 1) * limit;

    return (
        <>
            {
                // 출력 개수에 맞게 행 출력
                products.slice(offset, offset + limit).map((product, index) => (
                    <div className='products_wrap' key={index}>
                        <div>{product.id}</div>
                        <div>{product.title}</div>
                        <div>{product.brand}</div>
                        <div>
                            <div>
                            {product.description.substr(0,40).concat("...")}
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
