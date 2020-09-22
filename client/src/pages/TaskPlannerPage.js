import React from "react";
import { useHistory, Link } from "react-router-dom";
import Axios from 'axios';

//import Login css
import '../css/TaskPlanner.css'

//import SideMenu css
import '../css/SideMenu.css'

//import images components here
import planner_icon from '../icons/Planner.png';
import settings_icon from '../icons/Settings.png';
import employees_icon from '../icons/Employees.png';
import logout_icon from '../icons/Logout.png';
import assign_employee_icon from '../icons/AssignEmployee.png';
import delete_card from '../icons/DeletePopUp.png';
import delete_task from '../icons/Delete.png';


function TaskPlanner () {

    let history = useHistory();

    const logout = () => {
        Axios.get('http://localhost:3001/api/gets/logout').then((response) => {
                console.log(response);
                history.push("/");
        });
};

    
        return(
           
            // main container
            <div className="container">

                {/* SideMenu Bar */}
                <div className="sidenav"> 
                    <div className="sidebar-item">
                            <img src={planner_icon} className="App-logo" alt="icon" />
                        <Link to = '/TaskPlannerPage' className="nav-link active">Task Planner</Link>
                    </div>
                    <div className="sidebar-item">
                        <img src={employees_icon} className="App-logo" alt="icon" />
                        <Link to = '/EmployeePage' className="nav-link">Employee</Link>
                    </div>
                        
                    <div className="sidebar-item">
                        <img src={settings_icon} className="App-logo" alt="icon" />
                        <Link to = '/SettingPage' className="nav-link">Account Settings</Link>
                    </div>

                    <div className="sidebar-item" onClick={logout}>
                    <img src={logout_icon} className="App-logo" alt="icon"/>
                    <Link to = '/' className="nav-link">Logout</Link>
                    
                    </div>
             </div>
                {/* end of SideMenu Bar */}
            
            {/* Main View Container */}
                <div className="wrapper">

                    {/* Weekly Planner */}
                    <div className="planner">
                        {/* Monday */}
                        <div className="mon-box">Monday</div>
                            {/* List container */}
                            {/* icon to assign employees */}
                            <div className ="assign-employee-section">
                                    <img src={assign_employee_icon} className="App-icon" alt="icon" />
                                </div>
                            <div className="list-wrapper">
                                {/* body that contains list (light grey) */}
                                <div className="list-group">
                                    {/*Body that contains the card (white)*/ }
                                        <div className="card">
                                        {/* Card header: employee name, position, delete card icon, input-task */}
                                            <div className="card-header">
                                                <div className="top-header">
                                                    <span>Employee Name</span>
                                                    <span>DM</span>
                                                    <span><img src={delete_card} className="Delete-icon" alt="icon" /></span> 
                                                    </div> 
                                                    <hr></hr>
                                                    <div className="form-group">
                                                <input type="text" className="form-control" id="task" placeholder="Name a Task"/>
                                            </div>
                                                
                                            {/* User input: task section */}
                                            {/* end user input section */}
                                            </div>
                                            {/* end card header */}
                                        {/* Card Body */}
                                            <div className="card-body">
                                        
                                            {/* item */}
                                            <ul className="list-of-task-wrapper">   
                                                <li className="list-group-item">
                                                    <div className="task custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="check2"></input>
                                                        <label className="custom-control-label" htmlFor="check2">Task 1</label>
                                                        <img src={delete_task} className="Task-icon" alt="icon" />
                                                </div>
                                                </li>
                                                
                                            </ul>
                                            {/* ends item */}
                                          
                            
                                            </div>
                                        </div>
                                </div>
                         </div>
                         {/* end list container */}
                    </div>
                    {/* end of weekly planner */}

                    {/* Weekly Planner */}
                    <div className="planner">
                        {/* Monday */}
                        <div className="tue-box">Tuesday</div>
                            {/* List container */}
                            {/* icon to assign employees */}
                            <div className ="assign-employee-section">
                                    <img src={assign_employee_icon} className="App-icon" alt="icon" />
                                </div>
                            <div className="list-wrapper">
                                {/* body that contains list (light grey) */}
                                <div className="list-group">
                                    {/*Body that contains the card (white)*/ }
                                        <div className="card">
                                        {/* Card header: employee name, position, delete card icon, input-task */}
                                            <div className="card-header">
                                                <div className="top-header">
                                                    <span>Employee Name</span>
                                                    <span>DM</span>
                                                    <span><img src={delete_card} className="Delete-icon" alt="icon" /></span> 
                                                    </div> 
                                                    <hr></hr>
                                                    <div className="form-group">
                                                <input type="text" className="form-control" id="task" placeholder="Name a Task"/>
                                            </div>
                                                
                                            {/* User input: task section */}
                                            {/* end user input section */}
                                            </div>
                                            {/* end card header */}
                                        {/* Card Body */}
                                            <div className="card-body">
                                        
                                            {/* item */}
                                            <ul className="list-of-task-wrapper">   
                                                <li className="list-group-item">
                                                    <div className="task custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="check2"></input>
                                                        <label className="custom-control-label" htmlFor="check2">Task 1</label>
                                                        <img src={delete_task} className="Task-icon" alt="icon" />
                                                </div>
                                                </li>
                                                
                                            </ul>
                                            {/* ends item */}
                                          
                            
                                            </div>
                                        </div>
                                </div>
                         </div>
                         {/* end list container */}
                    </div>
                    {/* end of weekly planner */}

                    {/* Weekly Planner */}
                    <div className="planner">
                        {/* Monday */}
                        <div className="wed-box">Wednesday</div>
                            {/* List container */}
                            {/* icon to assign employees */}
                            <div className ="assign-employee-section">
                                    <img src={assign_employee_icon} className="App-icon" alt="icon" />
                                </div>
                            <div className="list-wrapper">
                                {/* body that contains list (light grey) */}
                                <div className="list-group">
                                    {/*Body that contains the card (white)*/ }
                                        <div className="card">
                                        {/* Card header: employee name, position, delete card icon, input-task */}
                                            <div className="card-header">
                                                <div className="top-header">
                                                    <span>Employee Name</span>
                                                    <span>DM</span>
                                                    <span><img src={delete_card} className="Delete-icon" alt="icon" /></span> 
                                                    </div> 
                                                    <hr></hr>
                                                    <div className="form-group">
                                                <input type="text" className="form-control" id="task" placeholder="Name a Task"/>
                                            </div>
                                                
                                            {/* User input: task section */}
                                            {/* end user input section */}
                                            </div>
                                            {/* end card header */}
                                        {/* Card Body */}
                                            <div className="card-body">
                                        
                                            {/* item */}
                                            <ul className="list-of-task-wrapper">   
                                                <li className="list-group-item">
                                                    <div className="task custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="check2"></input>
                                                        <label className="custom-control-label" htmlFor="check2">Task 1</label>
                                                        <img src={delete_task} className="Task-icon" alt="icon" />
                                                </div>
                                                </li>
                                                
                                            </ul>
                                            {/* ends item */}
                                          
                            
                                            </div>
                                        </div>
                                </div>
                         </div>
                         {/* end list container */}
                    </div>
                    {/* end of weekly planner */}

                    {/* Weekly Planner */}
                    <div className="planner">
                        {/* Monday */}
                        <div className="thu-box">Thursday</div>
                            {/* List container */}
                            {/* icon to assign employees */}
                            <div className ="assign-employee-section">
                                    <img src={assign_employee_icon} className="App-icon" alt="icon" />
                                </div>
                            <div className="list-wrapper">
                                {/* body that contains list (light grey) */}
                                <div className="list-group">
                                    {/*Body that contains the card (white)*/ }
                                        <div className="card">
                                        {/* Card header: employee name, position, delete card icon, input-task */}
                                            <div className="card-header">
                                                <div className="top-header">
                                                    <span>Employee Name</span>
                                                    <span>DM</span>
                                                    <span><img src={delete_card} className="Delete-icon" alt="icon" /></span> 
                                                    </div> 
                                                    <hr></hr>
                                                    <div className="form-group">
                                                <input type="text" className="form-control" id="task" placeholder="Name a Task"/>
                                            </div>
                                                
                                            {/* User input: task section */}
                                            {/* end user input section */}
                                            </div>
                                            {/* end card header */}
                                        {/* Card Body */}
                                            <div className="card-body">
                                        
                                            {/* item */}
                                            <ul className="list-of-task-wrapper">   
                                                <li className="list-group-item">
                                                    <div className="task custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="check2"></input>
                                                        <label className="custom-control-label" htmlFor="check2">Task 1</label>
                                                        <img src={delete_task} className="Task-icon" alt="icon" />
                                                </div>
                                                </li>
                                                
                                            </ul>
                                            {/* ends item */}
                                          
                            
                                            </div>
                                        </div>
                                </div>
                         </div>
                         {/* end list container */}
                    </div>
                    {/* end of weekly planner */}

                    {/* Weekly Planner */}
                    <div className="planner">
                        {/* Monday */}
                        <div className="fri-box">Friday</div>
                            {/* List container */}
                            {/* icon to assign employees */}
                            <div className ="assign-employee-section">
                                    <img src={assign_employee_icon} className="App-icon" alt="icon" />
                                </div>
                            <div className="list-wrapper">
                                {/* body that contains list (light grey) */}
                                <div className="list-group">
                                    {/*Body that contains the card (white)*/ }
                                        <div className="card">
                                        {/* Card header: employee name, position, delete card icon, input-task */}
                                            <div className="card-header">
                                                <div className="top-header">
                                                    <span>Employee Name</span>
                                                    <span>DM</span>
                                                    <span><img src={delete_card} className="Delete-icon" alt="icon" /></span> 
                                                    </div> 
                                                    <hr></hr>
                                                    <div className="form-group">
                                                <input type="text" className="form-control" id="task" placeholder="Name a Task"/>
                                            </div>
                                                
                                            {/* User input: task section */}
                                            {/* end user input section */}
                                            </div>
                                            {/* end card header */}
                                        {/* Card Body */}
                                            <div className="card-body">
                                        
                                            {/* item */}
                                            <ul className="list-of-task-wrapper">   
                                                <li className="list-group-item">
                                                    <div className="task custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="check2"></input>
                                                        <label className="custom-control-label" htmlFor="check2">Task 1</label>
                                                        <img src={delete_task} className="Task-icon" alt="icon" />
                                                </div>
                                                </li>
                                                
                                            </ul>
                                            {/* ends item */}
                                          
                            
                                            </div>
                                        </div>
                                </div>
                         </div>
                         {/* end list container */}
                    </div>
                    {/* end of weekly planner */}

                    {/* Weekly Planner */}
                    <div className="planner">
                        {/* Monday */}
                        <div className="sat-box">Saturday</div>
                            {/* List container */}
                            {/* icon to assign employees */}
                            <div className ="assign-employee-section">
                                    <img src={assign_employee_icon} className="App-icon" alt="icon" />
                                </div>
                            <div className="list-wrapper">
                                {/* body that contains list (light grey) */}
                                <div className="list-group">
                                    {/*Body that contains the card (white)*/ }
                                        <div className="card">
                                        {/* Card header: employee name, position, delete card icon, input-task */}
                                            <div className="card-header">
                                                <div className="top-header">
                                                    <span>Employee Name</span>
                                                    <span>DM</span>
                                                    <span><img src={delete_card} className="Delete-icon" alt="icon" /></span> 
                                                    </div> 
                                                    <hr></hr>
                                                    <div className="form-group">
                                                <input type="text" className="form-control" id="task" placeholder="Name a Task"/>
                                            </div>
                                                
                                            {/* User input: task section */}
                                            {/* end user input section */}
                                            </div>
                                            {/* end card header */}
                                        {/* Card Body */}
                                            <div className="card-body">
                                        
                                            {/* item */}
                                            <ul className="list-of-task-wrapper">   
                                                <li className="list-group-item">
                                                    <div className="task custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="check2"></input>
                                                        <label className="custom-control-label" htmlFor="check2">Task 1</label>
                                                        <img src={delete_task} className="Task-icon" alt="icon" />
                                                </div>
                                                </li>
                                                
                                            </ul>
                                            {/* ends item */}
                                          
                            
                                            </div>
                                        </div>
                                </div>
                         </div>
                         {/* end list container */}
                    </div>
                    {/* end of weekly planner */}

                    {/* Weekly Planner */}
                    <div className="planner">
                        {/* Monday */}
                        <div className="sun-box">Sunday</div>
                            {/* List container */}
                            {/* icon to assign employees */}
                            <div className ="assign-employee-section">
                                    <img src={assign_employee_icon} className="App-icon" alt="icon" />
                                </div>
                            <div className="list-wrapper">
                                {/* body that contains list (light grey) */}
                                <div className="list-group">
                                    {/*Body that contains the card (white)*/ }
                                        <div className="card">
                                        {/* Card header: employee name, position, delete card icon, input-task */}
                                            <div className="card-header">
                                                <div className="top-header">
                                                    <span>Employee Name</span>
                                                    <span>DM</span>
                                                    <span><img src={delete_card} className="Delete-icon" alt="icon" /></span> 
                                                    </div> 
                                                    <hr></hr>
                                                    <div className="form-group">
                                                <input type="text" className="form-control" id="task" placeholder="Name a Task"/>
                                            </div>
                                                
                                            {/* User input: task section */}
                                            {/* end user input section */}
                                            </div>
                                            {/* end card header */}
                                        {/* Card Body */}
                                            <div className="card-body">
                                        
                                            {/* item */}
                                            <ul className="list-of-task-wrapper">   
                                                <li className="list-group-item">
                                                    <div className="task custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="check2"></input>
                                                        <label className="custom-control-label" htmlFor="check2">Task 1</label>
                                                        <img src={delete_task} className="Task-icon" alt="icon" />
                                                </div>
                                                </li>
                                                
                                            </ul>
                                            {/* ends item */}
                                          
                            
                                            </div>
                                        </div>
                                </div>
                         </div>
                         {/* end list container */}
                    </div>
                    {/* end of weekly planner */}

                </div>
                {/* end of wrapper */}
           </div>
        // end of main container
                
             
                
                
        );

}
export default TaskPlanner;