import Axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Recipi from "./component/Recipi";

function App() {
   const [query,setQuery] = useState("")
   const [recipies,setRecipies] = useState([])

  const YOUR_APP_ID = "eb8e345a";
  const YOUR_APP_KEY = "4213692b7ddcfa8e52f56376b08775ef";
  let url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

  async function getRecipes() {
    let result = await Axios.get(url);
    setRecipies(result.data.hits)
    console.log(result.data);
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    getRecipes()
  }

  return (
    <div className="container mt-5">
      <h1 className='rapp'>Search Your Favorite Food Recipis</h1>
       <form onSubmit = {onSubmit}>
      <div className="input-group">
       
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(e) => setQuery(e.target.value)}
          value = {query}
        />
        <button
          onClick={getRecipes}
          type="button"
          className="btn btn-outline-primary"
        >
          search
        </button>
     
      </div>
      </form>
      <div>
        {recipies.map((recipe)=>{
          return <Recipi recipe = {recipe} />

        
        })}
      </div>
    </div>
  );
}

export default App;
