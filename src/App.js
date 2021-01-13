import './App.css';
import React, { useState } from 'react'

import Header from './Components/Header'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { Form } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { InputGroup, FormControl } from 'react-bootstrap'

import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./Components/Recipe";
import Alert from "./Components/Alert";
//import Slides from './Components/Slides'
import { Link, Switch, Route } from "react-router-dom";
import Search from "./Components/Search";



function App() {
  /*
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");


  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };



  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };
*/


  return (



    <div className="container-fluid" id="main">



      <Header />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Search">
          <Search></Search>
        </Route>
        <Route path="/About">
          <About></About>
        </Route>
        <Route path="/Contact">
           <Contact></Contact>
          </Route>
      </Switch>



      <Footer />



    </div>
  );

}

export default App;