import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
function CheckoutProduct({ id, title, image, price, rating, hidebutton }) {
    const [state, dispatch] = useStateValue();
    const deleteFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id

        })
    }
    return (
        <div className='checkoutproduct'>
            <div className="checkoutproduct_image">
                <img src={image} ></img>
            </div>
            <div className="checkoutproduct_info">
                <p className="checkoutproduct_title">{title}</p>
                <p className="checkoutproduct_price">
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>
                <p className="checkoutproduct_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}
                </p>
                {!hidebutton && (
                    <button onClick={deleteFromBasket}>Remove From Cart</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
