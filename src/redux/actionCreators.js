

const URL = "http://localhost:3000/recipes";

function fetchedRecipes(recipe_array) {
  return { type: "FETCHED_RECIPES", payload: recipe_array };
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

function onSearch(newSearch) {
  return { type: "CHANGE_SEARCH_TEXT", payload: newSearch}
}

export { fetchingRecipes, fetchedRecipes, onSearch };
