import React from 'react'
import web from '../src/image/img-3.svg'

import Common from './Common'

const Home = ()=>{
    return (
        <Common title = "Grow your Business with" btnTitle = "Get Started"  imgSrc = {web} description = "We are the team of Coder and Developer" btnPath = "/about" />
    );
}
export default Home;