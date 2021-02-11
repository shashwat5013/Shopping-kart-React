import React from 'react'
import './Checkout.css'
import SubTotal from './SubTotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import { useHistory } from 'react-router-dom'
function Checkout() {
    const history = useHistory();
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
                    <h3>Hello, {state.user?.email}</h3>
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
                    < SubTotal />
                </div>
            </div>
        </>
    )
}

export default Checkout
