import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import NavBar from './components/DM_Components/NavBar'
import Home from './components/DM_Components/Home';
import CreateProducts from './components/DM_Components/CreateProducts'
import EditProducts from './components/DM_Components/EditProducts';
import ProductDetails from './components/DM_Components/ProductDetails';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="container">
            <NavBar/>
            </div>
                <div className="container">
                    <Route path="/" exact component = {Home}></Route>
                    <Route path="/add" component = {CreateProducts}></Route>
                    <Route path="/edit/:id" component = {EditProducts}></Route>
                    <Route path="/products/:id" component = {ProductDetails}></Route>
                </div>            
            </BrowserRouter>
        )
    }
}