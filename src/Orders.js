import React from 'react'
import './Orders.css'
import { db } from './firebase'
import { useStateValue } from './StateProvider'
import FlipMove from 'react-flip-move'
import Order from './Order'
function Orders() {
    const [orders, setOrders] = React.useState([]);
    const [state, dispatch] = useStateValue();
    React.useEffect(() => {
        if (state.user) {
            db.collection('users')
                .doc(state.user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => {
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                })
        }
        else setOrders([])
    }, [state.user])
    // console.log(orders)
    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders_order">
                {
                    orders?.map((order) => (
                        <Order order={order} />
                    ))
                }
            </div>
        </div>
    )
}

export default Orders
