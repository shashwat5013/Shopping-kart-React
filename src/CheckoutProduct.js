import React, { forwardRef } from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
import FlipMove from 'react-flip-move'
const CheckoutProduct = forwardRef(({ id, title, image, price, rating, hidebutton }, ref) => {
    const [state, dispatch] = useStateValue();
    const deleteFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id

        })
    }
    return (
        <div ref={ref} className='checkoutproduct'>
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
})

export default CheckoutProduct
