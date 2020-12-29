import React from 'react'
import {Route} from 'react-router-dom'
// import '../nodem   bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Navbar from './Components/Navbar'
import Cart from './Components/Cart'
import './App.css'
import ProductList from './Components/Productlist'
// import LogIn from './Components/LoginPage'
import Welcome from './Components/Welcome'
import store from './Store'
import {Provider} from 'react-redux'

export default function App() {
    return (
        <Provider store ={store}>
            {/* <Navbar /> */}
            <Route exact path="/" component={Welcome}></Route>
            <Route  path="/main" render = {()=><div><Navbar /> <ProductList /> </div>}></Route>
            <Route  path="/cart" render = {()=><div><Navbar /> <Cart /> </div>}></Route>
            {/* <Welcome/> */}
            {/* <Switch>
            <ProductList />
            <Route path="/cart" component={Cart}></Route>
            </Switch> */}
            {/* <LogIn /> */}
            
            {/* <Route path="/cart" component={Cart}></Route>     */}
            
        
        </Provider>
    )
}
