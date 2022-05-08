import React, {Component} from 'react';
import  {BrowserRouter, Route} from 'react-router-dom';
import CreateCustomer from './components/CreateCustomer';
import CustomerDetails from './components/CustomerDetails';
import EditCustomer from './components/EditCustomer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Report from './components/Report';
import Login from './components/Login';

export default class App extends Component {
  render() {
    return(
      <BrowserRouter>
      <div className="container">
        <NavBar/>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route path="/add" component={CreateCustomer}></Route>
        <Route path="/edit/:id" component={EditCustomer}></Route>
        <Route path="/customer/:id" component={CustomerDetails}></Route>
        <Route path="/report" component={Report}></Route>



      </div>
      </BrowserRouter>
    )
  }
}