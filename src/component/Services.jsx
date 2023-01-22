import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

const Services = () => {
  const ncard = (val,index)=>{
    return(
    <Card 
    img = {val.img} 
    name = {val.text}
    />
    )
  }
  return (
    <>
     {Sdata.map(ncard)}      
    </>
  )
}

export default Services