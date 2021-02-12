import React from 'react'
import './SubTotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { useHistory } from 'react-router-dom'
import FlipMove from 'react-flip-move'
function SubTotal(props) {
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
    return (
        <div className="subtotal">
            <CurrencyFormat className="currenyFormat"
                renderText={
                    (value) => (

                        <>
                            <p>
                                SubTotal ( {state.basket?.length} items):{values.actualSum !== values.finalSum ? <small style={{ "text-decoration": "line-through", "margin": "2px" }}>{`Rs. ${values.actualSum}`}</small> : ""}<strong>{`${value}`}</strong><br />
                                <br />
                                <small className="giftCard">
                                    <input type='checkbox' />This order contains a giftcard
                                </small>
                            </p>
                        </>
                    )
                }
                decimalScale={2}
                thousandSeparator={true}
                displayType={"text"}
                value={values.finalSum}
                prefix={"Rs "}
            />

            {state.sum === 0 ? <p></p> :
                <div>
                    <div className="subtotal_discoundList" onClick={(e) => history.push('/cartDetail')}>
                        Click for full cart detail
                    </div>
                    <button onClick={(e) => history.push('/payment')}>Proceed to Checkout</button>
                </div>
            }
        </div>
    )
}

export default SubTotal
