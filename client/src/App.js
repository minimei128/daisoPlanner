import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import all page components here
import Login from './pages/LoginPage';
import TaskPlanner from './pages/TaskPlannerPage';
import Employee from './pages/EmployeePage';
import AccountSettings from './pages/SettingPage';
import NotFoundPage from './pages/404';
import SideMenu from './components/FixedMenu';

function App() {
  return (
    
    <Router>

    <Route path="/" exact render= {(props) => <Login/>} />
    <Route path="/TaskPlannerPage" render= {(props) => <TaskPlanner/>} />
    <Route path="/EmployeePage" render= {(props) => <Employee/>}/>
    <Route path="/SettingPage" render= {(props) => <AccountSettings/>} />
    <Route path="/FixedMenu" render= {(props) => <SideMenu/>}/>
    <Route path="/404" render= {(props) => <NotFoundPage/>} />

  </Router>

  );
}

export default App;
