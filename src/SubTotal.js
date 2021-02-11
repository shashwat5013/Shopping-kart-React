import React from 'react'
import './SubTotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { useHistory } from 'react-router-dom'
function SubTotal(props) {
    const history = useHistory();
    const [state] = useStateValue();
    //console.log(state.sum)
    return (
        <div className="subtotal">
            <CurrencyFormat className="currenyFormat"
                renderText={
                    (value) => (
                        <>
                            <p>
                                SubTotal ( {state.basket?.length} items):<strong>{`${value}`}</strong><br />
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
                value={state.sum}
                prefix={"Rs "}

            />
            {state.sum === 0 ? <p></p> :
                <button onClick={(e) => history.push('/payment')}>Proceed to Checkout</button>
            }
        </div>
    )
}

export default SubTotal
