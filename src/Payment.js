import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { useHistory } from 'react-router-dom'
import { db } from './firebase'
import uuid from 'react-uuid'
function Payment() {
    const history = useHistory()
    const [state, dispatch] = useStateValue();
    // console.log(state.basket)
    const makePayment = () => {
        let d = new Date();
        db
            .collection('users')
            .doc(state.user?.uid)
            .collection('orders')
            .doc(uuid())
            .set({
                basket: state.basket,
                amount: state.sum,
                created: d
            })
        dispatch({
            type: 'EMPTY_BASKET'
        })
        history.replace('/orders')
    }
    return (
        <div className='payment'>
            <div className='payment_section'>
                <div className="payment_title">
                    <h4>Delivery Address</h4>
                    <div className="payment_info">

                        <h3>{state.user?.email}</h3>
                        <h5>Your address will come here</h5>
                    </div>
                </div>
            </div>
            <div className='payment_section'>
                <div className="payment_title">
                    <h3>Review Items and Delivery</h3>
                </div>
                <div className='payment_items'>
                    {
                        state.basket.map((item, index) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                </div>
            </div>
            <div className='payment_section'>
                <div className="payment_title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment_details">
                    <button onClick={(e) => makePayment()}>Click to complete your payment</button>
                </div>
            </div>
        </div>
    )
}

export default Payment
