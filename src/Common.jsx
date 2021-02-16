import React from 'react'
// import web from '../src/image/img-1.svg'
import {NavLink} from 'react-router-dom'
const obj = {
    backgroundColor:"light-gray",
}
// const img = " ./image/img-1.svg"
const Common = (props)=>{
    return (
        <section id = "header" className = "d-flex align-items-center">
            <div className = "container-fluid">
                <div className = "row ">
                    <div className = " col-10 mx-auto">
                    <div className = "row ">
                    <div className = "col-md-6 pt-5 pt-lg-0 order-2 order-lg-1  d-flex justify-content-center flex-column">
                    <h1>{props.title} 
                    <br/>
                    <strong>Team CodeMonk</strong></h1>
                    <h2 className = "my-3">
                       {props.description}
                    </h2>
                    
                    <div className = "mt-3">
                        <NavLink  className = "btn-get-btn" activeClassName = "activeClass" exact to = {props.btnPath}><strong>{props.btnTitle}</strong></NavLink>
                    </div>
                    </div>
                    
                    
                    <div className  = "col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center align-items-center">
                    <img src = {props.imgSrc} alt = "random image" className = "img-fluid vert-move"/>

                    </div>
                    </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Common;