import React from 'react';

import Registration from './Components/Registration';
import Login from './Components/login';
import Forgotpassword from './Components/Forgotpassword';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom' 
import ResetPassword from './Components/ResetPassword';
import DashBord from './Components/DashBord'
import LogOut from './Components/LogOut';
import NavBar from './Components/NavBar';
// import SideNavPage from './Components/SideNavPage';
 


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
      {/* <Route path="/sidenav" component={SideNavPage}/> */}
    
      </Router>
  
  );
}

export default App;
