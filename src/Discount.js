import React from 'react'
import './Discount.css'
import { useStateValue } from './StateProvider'
import { useHistory } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import FlipMove from 'react-flip-move'
function Discount() {
    const history = useHistory();
    const [state] = useStateValue();
    // let finalSum = 0, actualSum = 0, final_item_list = [];
    //console.log(state.sum)
    const getActualPrice = () => {
        let finalSum = 0;
        let items = state.basket
        let map_items = {}
        let price_tags = {}
        const val = items.map((item) => {
            if (typeof (map_items[item.id]) === 'undefined') {
                map_items[item.id] = 1;
                price_tags[item.id] = item;
            }
            else {
                map_items[item.id]++;
            }
        })
        // console.log(map_items)
        // console.log(price_tags)
        let final_item_list = []
        for (let item in map_items) {
            let count = map_items[item]
            let price = price_tags[item].price
            if (item === 'A') {
                final_item_list.push({
                    actual_price: count * price,
                    final_price: (count * price - (Math.floor((count / 3)) * 15)),
                    itemCount: count,
                    item: price_tags[item]
                })
            }
            else if (item === 'B') {
                final_item_list.push({
                    actual_price: count * price,
                    final_price: (count * price - (Math.floor((count / 2)) * 5)),
                    itemCount: count,
                    item: price_tags[item]
                })
            }
            else {
                final_item_list.push({
                    actual_price: count * price,
                    final_price: (count * price),
                    itemCount: count,
                    item: price_tags[item]
                })
            }
        }
        let actualSum = 0
        final_item_list.map((item) => {
            finalSum += item.final_price;
            actualSum += item.actual_price;
        })
        console.log(final_item_list)
        if (finalSum > 150) finalSum -= 20;
        return { finalSum, actualSum, final_item_list }
    }
    const values = getActualPrice();
    console.log(values.final_item_list)
    return (
        <div className="discount">
            <h2> Your Cark Details</h2>
            {values.final_item_list.map((item) => (
                <div className="discount_product">
                    <div className="discount_product_info">
                        <CheckoutProduct
                            id={item.item.id}
                            title={item.item.title}
                            image={item.item.image}
                            price={item.item.price}
                            rating={item.item.rating}
                            hidebutton
                        />
                    </div>
                    <div className="discount_product_details">
                        <div className="discount_itemCount">
                            <strong>Items: </strong>{item.itemCount}
                        </div>
                        <div className="discount_itemCount">
                            Rs.
                            {item.actual_price !== item.final_price ?
                                <>
                                    < small style={{ "text-decoration": "line-through" }}>
                                        {item.actual_price}
                                    </small>
                                    <strong style={{ "font-size": "25px", "font-weight": "500" }}>{item.final_price}</strong>
                                </> : <strong style={{ "font-size": "25px", "font-weight": "500" }}>{item.final_price}</strong>

                            }

                        </div>

                    </div>
                </div>
            ))
            }
            {state.sum === 0 ? <p></p> :
                <div>
                    <button onClick={(e) => history.push('/payment')}>Proceed to Checkout</button>
                </div>
            }
        </div >
    )
}

export default Discount
