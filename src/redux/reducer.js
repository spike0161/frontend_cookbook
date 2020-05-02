import { combineReducers } from 'redux'


const recipeReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_RECIPES":
      return action.payload
    default:
      return oldState
  }
}

const searchTextReducer =(oldState="", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
    return action.payload
    default:
    return oldState

  }
}



const rootReducer = combineReducers({
  recipes: recipeReducer,
  searchText: searchTextReducer
})

export default rootReducer
