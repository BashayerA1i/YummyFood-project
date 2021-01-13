import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Slides from './Slides';
import { Form, FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import About from '../Components/About'
import Contact from '../Components/Contact'
import { Redirect } from "react-router-dom";
import Search from '../Components/Search'

// Api


class Home extends Component {

  render() {
    return (
      <>

        <Slides />
        <br>
        </br>

        

        <div className="row">
<div className="col" id="col1">   
 
<h1 id="col1-h1"> Search Over <br></br>  <span id="span-h1">  5000 Recipe  </span> </h1>
​
</div>  
​
<div className="col" id="col-btn">  
​
<h1 >Feeling Hungry ? </h1> 
<h3 id="id-h3"> Search Your Favourite food</h3>
​
<Link to="./Search"> <button type="button" class="btn btn-lg btn-primary" id="btn"> Go Here! </button> </Link>
​
</div>
​
</div>

      </>

    )

  }

}
export default Home;
