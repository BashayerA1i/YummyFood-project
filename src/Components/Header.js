import React from 'react';
import { Link, Switch, Route } from "react-router-dom"
import { Container, Nav, Navbar } from 'react-bootstrap'
import {Carousel} from 'react-bootstrap'
import Icoon from "./icon/Icoon.jpg"


const Header = () => {

    return ( 
        <>
        <nav  class="fixed-top" id="nav" >
            <Navbar className="nav-color" variant="dark">
                <img  id="header-icon"src={Icoon}/>
                <Navbar.Brand>
               
                </Navbar.Brand>

                

                
                <Nav className="mx-auto " >
                
                  <li className="nav-li">  <Link to="/" className="text-color" >Home </Link> &nbsp;&nbsp; </li> 
                  <li className="nav-li"> <Link to="/About" className="text-color">About us</Link> &nbsp;&nbsp;</li> 
                  <li className="nav-li">  <Link to="/Contact" className="text-color">Contact </Link>&nbsp;&nbsp;</li> 
           
    </Nav>
            </Navbar>   
        </nav>      
</>



    ) 
}     
   


export default Header;
