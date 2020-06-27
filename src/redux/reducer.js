import { combineReducers } from "redux";
import swal from 'sweetalert';


const recipeReducer = (oldState = [], action) => {
  switch (action.type) {
    case "FETCHED_RECIPES":
      return action.payload;
    case "ADD_NEW_RECIPE":
      return [...oldState, action.payload];
    case "ADD_REVIEW":
      return oldState.map(rec => {
        if (rec.id === action.payload.recipe_id) {
          return { ...rec, reviews: [action.payload, ...rec.reviews]};
        } else {
          return rec;
        }
      });
    case "DELETE_REVIEW":
      return oldState.map(rec => {
        if (rec.id !== action.payload.recipe_id) {
          return rec;
        } else {
          return {
            ...rec,
            reviews: rec.reviews.filter(rev => rev.id !== action.payload.id)
          };
        }
      });
    default:
      return oldState;
  }
};

const searchTextReducer = (oldState = "", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.payload;
    default:
      return oldState;
  }
};

const addIngredientReducer = (oldState = [], action) => {
  switch (action.type) {
    case "ADD_INGREDIENT":
      return [...oldState, action.payload] ;
    default:
      return oldState;
  }
};

const ingredientReducer = (oldState = [], action) => {
  switch (action.type) {
    case "FETCHED_INGREDIENTS":
      return action.payload;
    default:
      return oldState;
  }
};

const redirectReducer = (oldState = false, action) => {
  switch (action.type) {
    case "FETCHED_USER":
      return true
    case "REDIRECT":
      return false;
    default:
      return oldState;
  }
};

const currentUserReducer = (oldState = null, action) => {
  switch (action.type) {
    case "FETCHED_USER":
      return action.payload;
    case "FAVORITE":
      return oldState.favorites.map(fav => fav.id).includes(action.payload.id)
        ? swal("Already your favorite") && oldState
        : swal("Added to favorites") && { ...oldState, favorites: [...oldState.favorites, action.payload] };
    case "DELETE_FAVORITE_RECIPE":
      return {
        ...oldState,
        favorites: oldState.favorites.filter(
          rec => rec.id !== action.payload.id
        )
      };
      case "UPDATE_USER":
      debugger
      return  {
        ...oldState,
        user: {...oldState.user,
           picture: {...oldState.user.picture, picture: action.payload }}
      }
     default:
      return oldState;
    }
};

const rootReducer = combineReducers({
  recipes: recipeReducer,
  searchText: searchTextReducer,
  ingredients: ingredientReducer,
  addIngredient: addIngredientReducer,
  user: currentUserReducer,
  redirect: redirectReducer
});

export default rootReducer;
