import React, { Component } from "react"; 
import { Button } from 'react-bootstrap'; 

const Contact = () => {

    
        return ( 


            <div className="contact-style">
            <form action="maileTo:salwa333s68@gmail.com" >
  <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
    <h1>Contact Us   </h1>
    <label for="Name" className="contact-label"> Name : </label>
    <input type="text" class="form-control" placeholder="Type your name here "required/>
  </div>
  
  <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4 ">
    <label for="email" className="contact-label"> Email :</label> 
    <input type="email" class="form-control" name="_replyto" placeholder="Type your email here " required/> 
  </div>  
<div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4"> 
<label for="message" className="contact-label"> Message: </label>
<textarea class="form-control" rows="5"  ></textarea> <br></br>
<input type="submit" value="Send" id="contact-btn"/>
  
  </div>
</form>  

</div> 
        )

    

}
export default Contact;
