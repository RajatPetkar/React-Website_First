import React from 'react'
import Common from './Common'
import img from './img/img2.png'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './css.css'

const About = () => {
  return (
    <>
        <Common
        id = 'about'
        link = '/contact'
        title="Welcome to About Page"
        name = 'Rajat Petkar'
        sub='we are the team of talented developer making websites'
        btn = 'Conatct Here'
        img = {img}
    />
    </>
  )
}

export default About