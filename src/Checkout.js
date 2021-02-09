import React from 'react'
import './Checkout.css'
import SubTotal from './SubTotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
function Checkout() {
    const [state] = useStateValue();
    return (
        <>
            <div className="checkout_ad">
                <p>
                    <strong>Pay faster for all your shopping needs with Amazon Pay balance</strong>
                    <br />
                    <small>Get Instant refund on cancellations | Zero payment failures</small>
                </p>
            </div>
            <div className="checkout">

                <div className="checkout_left">
                    <div className="checkout_title">
                        <h2>Your Shopping Basket</h2>
                        {state.basket.map((item) => {
                            return <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        })}
                    </div>
                </div>
                <div className="checkout_right">
                    < SubTotal  />
                </div>
            </div>
        </>
    )
}

export default Checkout
