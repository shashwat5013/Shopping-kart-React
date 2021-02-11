import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
function Order({ order }) {
    return (
        <div className="order">
            <h1> Order </h1>
            <span><small>DATE:</small></span>
            <span className="date">{moment.unix(order?.data.created).format("MMMM Do YYYY, h:mma")}</span>
            <br />
            <span><small>Order ID:</small></span>
            <span className="order_id">
                <small>{order?.id}</small>
            </span>
            <br />
            <br />
            {order?.data.basket?.map((item) => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
            ))}
            <p className="order_amount">
                TOTAL ORDER AMOUNT WAS:Rs.{order.data.amount}
            </p>
        </div>
    )
}

export default Order
