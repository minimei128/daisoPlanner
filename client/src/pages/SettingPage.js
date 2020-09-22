import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import Axios from "axios";

//import Employee css
import '../css/AccountSettings.css'

//import SideMenu css
import '../css/SideMenu.css'

//import images components here
import planner_icon from '../icons/Planner.png';
import settings_icon from '../icons/Settings.png';
import employees_icon from '../icons/Employees.png';
import logout_icon from '../icons/Logout.png';

function AccountSettings () {

    const [newEmployeeNumber, setNewEmployeeNumber] = useState("");
    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3002/api/get/user").then((response)=>{
            setUserList(response.data);
        });
    });

    const updateUser= () => {
        Axios.put("http://localhost:3002/api/update/updateUserDetail", {
            employeeNumber: newEmployeeNumber,
            firstName: newFirstName,
            lastName: newLastName,
            password: newPassword,
        });
        setNewEmployeeNumber("")
        setNewFirstName("")
        setNewLastName("")
        setNewPassword("")
    };

        return(

                <div className="container">

                {/* SideMenu Bar */}
                <div className="sidenav"> 

                <div className="sidebar-item">
                    <img src={planner_icon} className="App-logo" alt="icon" />
                    <Link to = '/TaskPlannerPage' className="nav-link">Task Planner</Link>
                </div>

                <div className="sidebar-item">
                    <img src={employees_icon} className="App-logo" alt="icon" />
                    <Link to = '/EmployeePage' className="nav-link">Employee</Link>
                </div>
    
                <div className="sidebar-item">
                    <img src={settings_icon} className="App-logo" alt="icon" />
                    <Link to = '/SettingPage' className="nav-link active">Account Settings</Link>
                </div>

                <div className="sidebar-item">
                    <img src={logout_icon} className="App-logo" alt="icon" />
                        <Link to = '/' className="nav-link">Logout</Link>
                    </div>

                </div>

<div className="main-view-container">
           
            <div className="left-side-wrapper">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Employee Number</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Position</th>
                        </tr>
                       </thead>
  
                       {userList.map((val, key) => {
                return (
                    <tbody key={key}>
                    <tr>
                              
                        <th scope="row">{val.employeeNumber}</th>
                        <td >{val.firstName}</td>
                        <td >{val.lastName}</td>
                        <td >{val.positionTitle}</td>
                        
                    </tr>
                </tbody>
                );
            })}
            </table>
            </div>

<div className="right-side-wrapper">
                
                <form className = "login-form-container" id="employee-form">
                    {/* title */}
                    <h3>Account Settings</h3>
                    <hr></hr>
                    {/* employee number on table */}

                     {/* employee number */}
                     <div className="form-group">
                        <input 
                        type="employeeID" 
                        className="form-control" 
                        placeholder="Employee Number"
                        onChange={(e)=> {
                            setNewEmployeeNumber(e.target.value)
                        }}/>
                    </div>

                    {/* first name */}
                    <div className="form-group">
                        <input 
                        type="employeeFirstName" 
                        className="form-control" 
                        placeholder="First Name"
                        onChange={(e)=> {
                            setNewFirstName(e.target.value)
                        }}/>
                    </div>

                    {/* last name */}
                    <div className="form-group">
                        <input 
                        type="employeeLastName" 
                        className="form-control" 
                        placeholder="Last Name"
                        onChange={(e)=> {
                            setNewLastName(e.target.value)
                        }}/>
                    </div>

                    {/* change password */}

                    <div className="form-group">
                        <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Change Password"
                        onChange={(e)=> {
                            setNewPassword(e.target.value)
                        }}/>
                    </div>
                    
                <div className="button-group">
                    {/* update button */}
                   
                    <button 
                    type="update" 
                    className="update-btn"
                    onClick={updateUser}>Update</button>
                    
                </div>
                    </form>
                    </div>
                    </div>
                </div>
        );
}
export default AccountSettings;