import React from 'react'

import { Route,Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Catalog from '../pages/Catalog'
import Contact from '../pages/Contact'
import About from '../pages/About'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/san-pham/:slug'  component={Product}/>
            <Route path='/san-pham'  component={Catalog}/>
            <Route path='/gio-hang'  component={Cart}/>
            <Route path='/lien-he'  component={Contact}/>
            <Route path='/ve-chung-toi'  component={About}/>

        </Switch>
    )
}

export default Routes