import React from 'react';

import Registration from './Components/Registration';
import Login from './Components/login';
import Forgotpassword from './Components/Forgotpassword';
// import Resetpassword from './Components/ResetPassword';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom' 
import ResetPassword from './Components/ResetPassword';

function App() {

  return (
    <Router>
      <Route path="/" exact component={Login}></Route>
      <Route path="/register" component={Registration}></Route> 
      <Route path="/login" exact component ={Login}></Route>
      <Route path="/forgot" component={Forgotpassword}/> 
      <Route path="/resetpassword" component={ResetPassword}/>
      </Router>
  
  );
}

export default App;
