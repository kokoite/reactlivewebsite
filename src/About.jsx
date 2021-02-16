import React from 'react'
import Common from './Common'
import web from '../src/image/img-4.svg' 
const About = ()=>{
    return(
        <>
        <Common title = "This a About Page of" description = "We are a team of accuracy and management" imgSrc = {web} btnTitle = "Contact Us" btnPath="/contact"/>
        </>
    )
}
export default About;