import React from 'react';

import Registration from './Components/Registration';
import Login from './Components/login';
import Forgotpassword from './Components/Forgotpassword';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom' 
import ResetPassword from './Components/ResetPassword';
import DashBord from './Components/DashBord'
import LogOut from './Components/LogOut';
import NavBar from './Components/NavBar';
import Label from './Components/Label';
import SideBar from './Components/SideBar'
import Creatlabel from './Components/Creatlabel';

import getNotes from './Components/GetNotes'
import createnote from './Components/createnote'

import Icon from './Components/Icon'
import AppBar from './Components/AppNav';
import sideNav from './Components/sideNav';
import DemoColour from './Components/DemoColour';
import Demo2 from './Components/Demo2';
 


function App() {

  return (
    <Router>
      <Route path="/" exact component={Login}></Route>
      <Route path="/register" component={Registration}></Route> 
      <Route path="/login" exact component ={Login}></Route>
      <Route path="/forgot" component={Forgotpassword}/> 
      <Route path="/resetpassword" component={ResetPassword}/>
      
      <Route path="/dashbord" component={DashBord}/>
      <Route path="/logout"  component={LogOut}/>
      <Route path="/sidenav" component={SideBar}/>
      <Route path="/label" component={Label}/>
      <Route path="/creatlabel" component={Creatlabel}/>
     
       <Route path="/note" component={createnote}/>
       <Route path="/getnotes" component={getNotes}/>
      
       <Route path="/icon" component={Icon}/>
       <Route path="/app" component={AppBar}/>
       <Route path="/side" component={sideNav}/>
       <Route path="/demo" component={DemoColour}/>
       <Route path="/demo2" component={Demo2}/>
      </Router>
  
  );
}

export default App;
