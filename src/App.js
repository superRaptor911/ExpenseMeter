import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignupPageDesktop from './pages/SignipPageDesktop';
import LoginPage from './pages/LoginPage'

function App() {
  return (
    
      <BrowserRouter>

      <div className="App">

           <Route path = "/"/>
          <Route path = "/signup" component = {SignupPageDesktop} exact/>
          <Route path = "/login" component = {LoginPage}/>
      
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;
