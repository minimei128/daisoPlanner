import React, {useState, useEffect} from "react";
import { useHistory, Link } from "react-router-dom";
import Axios from 'axios'

//import Login css
import '../css/Login.css'

//import images components here
import logo from '../images/Logo.png';

function Login() {

    let history = useHistory();

    const [employeeNumber, setEmployeeNumber] = useState('')
    const [password, setPassword] = useState('')
   
    const validateLogin = () => {
        Axios.post('http://localhost:3002/post/login', {
            employeeNumber: employeeNumber, 
            password: password,
     }).then((response) =>{
        
                       console.log(response)
                        history.push("/TaskPlannerPage")
     })
};

// useEffect(()=>{
//     Axios.get('http://localhost:3002/get/login').then((response) =>{
//         if (response.data.loggedIn === true) {
//             console.log("hiiii"+response)
//         history.push("/TaskPlannerPage")}
//     });
// });

Axios.defaults.withCredentials = true;

        return(

                <div className="container">

                    {/* daiso logo */}
                    <div className="logo-wrapper">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>

                <div className="login form-container">

                    {/* username input */}
                    <div className="form-group">
                        <input 
                        type="employeeID" 
                        className="form-control" 
                        name="employeeID" 
                        placeholder="Employee ID"
                        onChange={(e)=> {
                            setEmployeeNumber(e.target.value)
                        }}/>
                    </div>

                    {/* password input */}
                    <div className="form-group">
                    <input 
                    type="password" 
                    className="form-control" 
                    name="password" 
                    placeholder="Password"
                    onChange={(e)=> {
                        setPassword(e.target.value)
                    }} />
                    </div>

                    {/* login button */}
                    {/* <Link to = '/TaskPlannerPage'> */}
                    <button 
                    type="login" 
                    className="login-btn"
                    onClick={validateLogin}
                    
                    >LOGIN</button>
                    {/* </Link> */}
                   </div>
                </div>
        );
}
export default Login;