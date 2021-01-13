import React, { Component } from "react"; 
import {Carousel} from 'react-bootstrap'  
import { Form, FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'  

const Slides= () => {

        return ( 


<Carousel interval={2000}>
  <Carousel.Item >  
      <div className ="images">
    <img
      className="w-100 d-inline-block"
      src="https://images.pexels.com/photos/6062040/pexels-photo-6062040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"   
         />
   </div>
    <Carousel.Caption>
      <p> Don't Stay Hungry</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}> 
  <div className ="images">
    <img
      className="w-100 d-inline-block"
      src="https://images.unsplash.com/photo-1601628403125-e02115bcb0fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    /> 
    </div>
    <Carousel.Caption>
      <p>What Is Your Favorite Food ?</p>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item> 
  <div className ="images">
    <img
      className="w-100 d-inline-block"
      src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
      /> 

      </div>    
      <Carousel.Caption>  
        <p className="text-lg-center"> Find Your Reicpe Now!</p>
    </Carousel.Caption>
       

  </Carousel.Item>  

</Carousel> 


       
        ) 
} 
export default Slides;