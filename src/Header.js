import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
function Header() {
    const [state, dispatch] = useStateValue();
    const userAuthentication = () => {
        if (state.user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div className="header_search">
                <input className="header_serachInput" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <Link to={!state.user && '/login'}>
                    <div onClick={userAuthentication} className="header_option">
                        <span className="header_optionLineOne">
                            {state.user ? state.user.email :
                                'Hello Guest'}
                        </span>
                        <span className="header_optionLineTwo">
                            {state.user ? 'SignOut' : 'SignIn'}
                        </span>
                    </div>
                </Link>

                <div className="header_option">
                    <span className="header_optionLineOne">
                        Returns
                    </span>
                    <span className="header_optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to='/checkout'>
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_basketCount">{state.basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
