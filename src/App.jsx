import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './Home.jsx'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'
import './index.css'
const App = ()=>{
    return (
        <>
        <Navbar/>
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/about" component = {About} />
            <Route exact path = "/contact" component = {Contact} />
            <Route exact path = "/service" component = {Service} />
            <Redirect to ="/"/>
        </Switch>
        <Footer/>
        </>
    )
}
export default App;