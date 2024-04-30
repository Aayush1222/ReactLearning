import React, {useState} from "react";

const Register = () => {
   //Coding Section

   //Make a state variables - 5 STATES
   
   //Format (variableName, ChangingVarName) = state
   
   const [firstName, setFirstname] = useState('')
   const [lastName, setLastname] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')


   //state for Error
   const [firstNameError, setfirstNameError] = useState('')
   const [lastNameError, setlastNameError] = useState('')
   const [emailError, setemailError] = useState('')
   const [passwordError, setpasswordError] = useState('')
   const [confirmPasswordError, setconfirmPasswordError] = useState('')


   //Make a function to save the state
   const handleFirstname = (e) => {
    setFirstname(e.target.value)


   }

   const handleLastname = (e) =>{
    setLastname(e.target.value)
   }

   const handleEmail = (e) =>{
    setEmail(e.target.value)
   }

   const handlePassword = (e) =>{
    setPassword(e.target.value)
   }

   const handleconfirmpassword = (e) =>{
    setConfirmPassword(e.target.value)
   }

   //Validation
   const validate = () => {
    var isValid = true;
    if(firstName.trim() == null) {
        setfirstNameError('Please enter firstname')
        isValid = false;
    }
    return isValid;
   }

//for button
   const handleSubmit = (e) => {
    e.preventDefault()
    var isValid = validate()
    if(!isValid){
        return;  //stop the process
    }
    console.log(firstName,lastName,email,password,confirmPassword)

   }


    return(
       
        <>
        <div className="m-3">
            <h1> Create an Account!</h1>
            
            <form className="w-50">
                <label>Firstname : {firstName}</label>
                <input onChange={handleFirstname}type="text" className="form-control" placeholder="Enter your firstname"/>

                {
                    firstNameError && <small>{firstNameError}</small>
                }

                <label className="mt-2">Lastname : {lastName}</label>
                <input onChange={handleLastname}type="text" className="form-control" placeholder="Enter your Lastname"/>

                <label className="mt-2">Email Address : {email}</label>
                <input onChange={handleEmail}type="text" className="form-control" placeholder="Enter your Email"/>

                <label className="mt-2">Password : {password}</label>
                <input onChange={handlePassword}type="text" className="form-control" placeholder="Enter your Password"/>

                <label className="mt-2">Confirm Password : {confirmPassword}</label>
                <input onChange={handleconfirmpassword}type="text" className="form-control" placeholder="Enter your Password again"/>

                <button onClick={handleSubmit} className="btn btn-dark mt-2 w-100">Create Acccount</button>
                

                 

            </form>
        </div>
        </>

    );
}

//exporting
export default Register;

