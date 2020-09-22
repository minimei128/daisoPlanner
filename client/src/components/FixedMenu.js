import React, {Component} from "react";
import { Link } from "react-router-dom";

//import Login css
import '../css/SideMenu.css'

//import images components here
import planner_icon from '../icons/Planner.png';
import settings_icon from '../icons/Settings.png';
import employees_icon from '../icons/Employees.png';


class SideMenu extends Component {

    render(){
        return(
        <div className="dashboard-wrapper">
            
            <div className="sidenav"> 

            <div className="sidebar-item">
            <img src={planner_icon} className="App-logo" alt="icon" />
            <Link to = '/TaskPlanner' className="nav-link">Task Planner</Link>
            </div>
            <div className="sidebar-item">
            <img src={employees_icon} className="App-logo" alt="icon" />
            <Link to = '/Employee' className="nav-link">Employee</Link>
            </div>
            <div className="sidebar-item">
            <img src={settings_icon} className="App-logo" alt="icon" />
            <Link to = '/AccountSetting' className="nav-link">Account Settings</Link>
            </div>
            <div className="sidebar-item">
            <Link to = '/' className="nav-link">Logout</Link>
            </div>

            </div>

         </div>
        );
    }
}

export default SideMenu;