
const FETCHED_RECIPES = "FETCHED_RECIPES"

const URL = "http://localhost:3000/recipes"

function fetchingRecipes(){
  return (dispatch) => {
  fetch(URL)
  .then(res => res.json())
  .then(recipe_array => console.log(recipe_array))
  }
}

export { fetchingRecipes }
