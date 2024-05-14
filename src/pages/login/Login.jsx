import React,{useState} from "react";

const Login = () => {
//use state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')




    return(
        <div className="container">
            <h1> Login to your Account!</h1>

            <form>
                <label>Enter your email : {email}</label>
                <input onChange = {(e)=>setEmail(e.target.value)} type='email' className="form-control" placeholder="Enter your email"/>

                <label>Enter your Password</label>
                <input onChange = {(e)=>setPassword(e.target.value)} type='Password' className="form-control" placeholder="Enter your password"/>

                <button className="btn btn-danger w-100 mt-2">Login</button>
            </form>
        </div>


    );
}

//exporting
export default Login;