const RECIPES = "http://localhost:3000/recipes";
const INGREDIENTS = "http://localhost:3000/ingredients";
const USERS = "http://localhost:3000/users";

// ################################# Action Creators ###################################
function fetchedRecipes(recipe_array) {
  return { type: "FETCHED_RECIPES", payload: recipe_array };
}

function onSearch(newSearch) {
  return { type: "CHANGE_SEARCH_TEXT", payload: newSearch };
}

function fetchedIngredients(ingredient_array) {
  return { type: "FETCHED_INGREDIENTS", payload: ingredient_array };
}

function addIngredient(newIngredient) {
  return { type: "ADD_INGREDIENT", payload: newIngredient };
}

function login(user) {
  return { type: "FETCHED_USER", payload: user };
}

function redirectUser() {
  return { type: "REDIRECT" };
}

function favoriteRecipe(recipe) {
  return { type: "FAVORITE", payload: recipe };
}

function addNewRecipe(recipe) {
  return { type: 'ADD_NEW_RECIPE', payload: recipe }
}


// ############################### Dispatch Functions #################################################

function addingRecipe({ title, cookTime, instructions, ingredients, picture, gluten, dairy, vegan, vegetarian }) {
  return dispatch => {
    fetch('http://localhost:3000/recipes', {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ title, cookTime, instructions, ingredients, picture, gluten, dairy, vegan, vegetarian })
    })
    .then(res => res.json())
    .then(recipe => {
      dispatch(addNewRecipe(recipe))
    })
  }
}

function logginIn({ username, password }) {
  return dispatch => {
  fetch('http://localhost:3000/login', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(user => {
    dispatch(login(user))
  })
}
}


function favorite(recipe, user) {
  let favRecipe = { recipe_id: recipe.id, user_id: user.id}
  return dispatch => {
    fetch("http://localhost:3000/favoriterecipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(favRecipe)
        })
        .then(res => res.json())
        .then(recipe => {
          dispatch(favoriteRecipe(recipe))
    });
  };
}

function signUp({ firstname, lastname, username, password }) {
  return dispatch => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ firstname, lastname, username, password })
    })
      .then(res => res.json())
      .then(user => {
        dispatch(login(user));
      });
  };
}

function fetchingIngredients() {
  return dispatch => {
    fetch(INGREDIENTS)
      .then(res => res.json())
      .then(ingredient_array => {
        dispatch(fetchedIngredients(ingredient_array));
      });
  };
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

export {
  fetchingRecipes,
  fetchedRecipes,
  onSearch,
  fetchingIngredients,
  fetchedIngredients,
  addIngredient,
  login,
  signUp,
  redirectUser,
  favorite,
  logginIn,
  addNewRecipe,
  addingRecipe
};
