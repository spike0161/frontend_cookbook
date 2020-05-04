
const RECIPES = "http://localhost:3000/recipes";
const INGREDIENTS = "http://localhost:3000/ingredients";

function fetchedRecipes(recipe_array) {
  return { type: "FETCHED_RECIPES", payload: recipe_array };
}

function onSearch(newSearch) {
  return { type: "CHANGE_SEARCH_TEXT", payload: newSearch}
}

function fetchedIngredients(ingredient_array) {
  return { type: "FETCHED_INGREDIENTS", payload: ingredient_array }
}

function fetchingIngredients() {
  return dispatch => {
    fetch(INGREDIENTS)
    .then(res => res.json())
    .then(ingredient_array => {
      dispatch(fetchedIngredients(ingredient_array))
    })
  }
}


function fetchingRecipes() {
  return dispatch => {
    fetch(RECIPES)
      .then(res => res.json())
      .then(recipe_array => {
        dispatch(fetchedRecipes(recipe_array));
      });
  };
}


export { fetchingRecipes, fetchedRecipes, onSearch, fetchingIngredients, fetchedIngredients };
