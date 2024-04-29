import React, {useState} from "react";

const Register = () => {
   //Coding Section

   //Make a state variables - 5 STATES
   
   //Format (variableName, ChangingVarName) = state
   
   const [firstname, setFirstname] = useState('')
   const [lastname, setLastname] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')

    return(
        <div className="m-3">
            <h1> Create an Account!</h1>
            
            <form className="w-50">
                <label>Firstname</label>
                <input type="text" className="form-control" placeholder="Enter your firstname"/>

                <label className="mt-2">Lastname</label>
                <input type="text" className="form-control" placeholder="Enter your Lastname"/>

                <label className="mt-2">Email Address</label>
                <input type="text" className="form-control" placeholder="Enter your Email"/>

                <label className="mt-2">Password</label>
                <input type="text" className="form-control" placeholder="Enter your Password"/>

                <label className="mt-2">Confirm Password</label>
                <input type="text" className="form-control" placeholder="Enter your Password again"/>

                <button className="btn btn-dark mt-2 w-100">Create Acccount</button>
                

                 

            </form>
        </div>

    );
}

//exporting
export default Register;

