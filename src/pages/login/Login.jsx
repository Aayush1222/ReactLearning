import React,{useState} from "react";

const Login = () => {
//use state
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

//error state
const [emailError, setEmailError] = useState('')
const [passwordError, setPasswordError] = useState('')


//validation function
var validation = () => {
    let isValid = true;

    if (email === '' || email.includes('@' === false)) {
        setEmailError('Email is empty or invalid')
        isValid = false
    }

    if (password.trim() === ''){
        setPasswordError('Password is Empty')
        isValid = false
    }

    //return the value
    return isValid;
}

// login funtion
const handleLogin = (e) => {
    e.preventDefault()

    //validation
    if(!validation()) {
        return;
    }

    console.log(email,password)
}




return(
    <div className="container">
        <h1> Login to your Account!</h1>

        <form>
            <label>Enter your email : {email}</label>
            <input onChange = {(e)=>setEmail(e.target.value)} type='email' className="form-control" placeholder="Enter your email"/>

            {
                emailError && <p className="text-danger">{emailError}</p>
            }

            <label>Enter your Password</label>
            <input onChange = {(e)=>setPassword(e.target.value)} type='Password' className="form-control" placeholder="Enter your password"/>
            
            {
                passwordError && <p className="text-danger">{passwordError}</p>
            }

            <button onClick={handleLogin} className="btn btn-danger w-100 mt-2">Login</button>
        </form>
    </div>


);
}

//exporting
export default Login;