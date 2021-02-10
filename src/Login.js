import React from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
function Login() {
    const history = useHistory();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => {
                alert(error.message)
            })
    }
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => {
                alert(error.message)
            })
    }
    return (

        <div className="login">
            <div className="login_container">
                <h2>Sign-In</h2>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" onClick={signIn}>Sign In</button>
                </form>
                <p>By signing-in you are agreeing to our policies</p>
                <button onClick={register}>Create Your Account</button>
            </div>
        </div>
    )
}

export default Login
