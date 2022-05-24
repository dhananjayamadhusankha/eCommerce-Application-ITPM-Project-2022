import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import NavBar from './components/DM_Components/NavBar'
import Home from './components/DM_Components/Home';
import CreateProducts from './components/DM_Components/CreateProducts'
import EditProducts from './components/DM_Components/EditProducts';
import ProductDetails from './components/DM_Components/ProductDetails';

//Import product add components
import ProductAddList from './components/DM_Components/ProductAddList';
import BooksAdd from './components/DM_Components/ProductsAdd/BooksAdd';
import ComputersAdd from './components/DM_Components/ProductsAdd/ComputersAdd';
import DigitalMusicAdd from './components/DM_Components/ProductsAdd/DigitalMusicAdd';
import ElectronicsAdd from './components/DM_Components/ProductsAdd/ElectronicsAdd';
import HomeAndKitchenAdd from './components/DM_Components/ProductsAdd/HomeAndKitchenAdd';
import MenFashionsAdd from './components/DM_Components/ProductsAdd/MenFashionsAdd';
import MobilePhonesAdd from './components/DM_Components/ProductsAdd/MobilePhonesAdd';
import OthersAdd from './components/DM_Components/ProductsAdd/SportsOutdoorsAdd';
import SportsOutdoorsAdd from './components/DM_Components/ProductsAdd/MobilePhonesAdd';
import WomenFashionsAdd from './components/DM_Components/ProductsAdd/WomenFashionsAdd';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div >
            <NavBar/>
            </div>
                <div className="container">
                    <Route path="/" exact component = {ProductAddList}></Route>
                    <Route path="/productList" component = {Home}></Route>
                    <Route path="/save" component = {CreateProducts}></Route>
                    <Route path="/update/:id" component = {EditProducts}></Route>
                    <Route path="/display/:id" component = {ProductDetails}></Route>
                    
                    {/* Routes for product add components */}
                    <Route path="/display/booksAdd" component = {BooksAdd}></Route>
                    <Route path="/display/ComputersAdd" component = {ComputersAdd}></Route>
                    <Route path="/display/DigitalMusicAdd" component = {DigitalMusicAdd}></Route>
                    <Route path="/display/ElectronicsAdd" component = {ElectronicsAdd}></Route>
                    <Route path="/display/HomeAndKitchenAdd" component = {HomeAndKitchenAdd}></Route>
                    <Route path="/display/MenFashionsAdd" component = {MenFashionsAdd}></Route>
                    <Route path="/display/MobilePhonesAdd" component = {MobilePhonesAdd}></Route>
                    <Route path="/display/OthersAdd" component = {OthersAdd}></Route>
                    <Route path="/display/SportsOutdoorsAdd" component = {SportsOutdoorsAdd}></Route>
                    <Route path="/display/WomenFashionsAdd" component = {WomenFashionsAdd}></Route>

                </div>            
            </BrowserRouter>
        )
    }
}