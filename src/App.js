import './App.css';
import { useEffect } from 'react'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
import Payment from './Payment'
import Orders from './Orders'
import Discount from './Discount'
function App() {
  const [state, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      //console.log("This is our user", authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/about">
            <Header />
            <h1>I am about</h1>
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/cartDetail">
            <Header />
            <Discount />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
