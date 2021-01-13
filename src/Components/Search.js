import React, { useState } from "react";
import "../App.css";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "../Components/Recipe";
import Alert from "../Components/Alert";

function Search() {
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

  return (
    <>

    <div class="container-fluid">

    <div class="p-5 text-center bg-image" id="img" >
 
<div class="mask" id="mask">
<div>
          <h1 class="mb-3" id="h1-search"> Search your favorite food </h1>
      
         </div>
      <div class="d-flex justify-content-center align-items-center h-100">
     
         
         <form  id="form-search" class="form-group" onSubmit={onSubmit} className="search-form">
          {alert !== "" && <Alert alert={alert} />}
          <div class="form-group">
           <input
             type="text"
             name="query"
             class="form-control input-lg" id="inputlg"            
               onChange={onChange}
             value={query}
             autoComplete="off"
               placeholder=" Search your recipes .."
            />
         <br></br>
            <input class="mb-3" type="submit" value="Search" id="btn"/>
         </div>
         </form>
         </div>
         
         </div>
         </div> 
</div>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
     

      </div>


</>

  );


}

export default Search;