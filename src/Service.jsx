import React from 'react'
import web from '../src/image/web.jpg'
import app from '../src/image/app.jpg'
import data from '../src/image/data.jpg'
import ml from '../src/image/ml.jpg'
import ai from '../src/image/ai.jpg'
import full from '../src/image/full.jpg'
import CardComponent from './CardComponent'

const Service = ()=>{
    return(
        <>
        <div className = "my-5">
        <h1 className = "text-center">Our Services</h1>
        </div>
        <div className = "container-fluid mb -4">
            <div className = "row">
                <div className = "col-10 mx-auto">
                <div className = "row gy-4">
          
                 <CardComponent imgSrc = {web} title = "Web Developer" description  = "Want a webDeveloper for your website Here is the correct place" btnTitle = "Accept the service"/>   
                 <CardComponent imgSrc = {app} title = "Android Developer" description  = "Need of a App Developer for your app.Here is the place" btnTitle = "Accept the service"/>   
                 <CardComponent imgSrc = {full} title = "Full Stack Developer" description  = "Having problem in finding a Full stack developer" btnTitle = "Accept the service"/>   
                 <CardComponent imgSrc = {data} title = "Data Scientist" description  = "In a hurry for founding a Data Scientist here is the place" btnTitle = "Accept the service"/>   
                 <CardComponent imgSrc = {ml} title = "ML developer" description  = "Work Load is high and You need a Ml developer You are at a right place" btnTitle = "Accept the service"/>   
                 <CardComponent imgSrc = {ai} title = "Aritificial Intelligence expert" description  = "Urgent Need ! of a Artificial Intelligence expert here is the correct place" btnTitle = "Accept the service"/>   
                    
                </div>

                </div>
            </div>
        </div>
        </>
    )
}
export default Service;