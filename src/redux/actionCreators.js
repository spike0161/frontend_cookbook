const FETCHED_RECIPES = "FETCHED_RECIPES";

const URL = "http://localhost:3000/recipes";

function fetchedRecipes(recipe_array) {
  return { type: FETCHED_RECIPES, payload: recipe_array };
}

function fetchingRecipes() {
  return dispatch => {
    fetch(URL)
      .then(res => res.json())
      .then(recipe_array => {
        dispatch(fetchedRecipes(recipe_array));
      });
  };
}

export { fetchingRecipes, FETCHED_RECIPES };
