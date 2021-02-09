import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
function Product({ id, title, imageSrc, price, rating }) {
    const [state, dispatch] = useStateValue();
    console.log(state.sum)
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: imageSrc,
                price: price,
                rating: rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
            </div>
            <img src={imageSrc} alt=""></img>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
