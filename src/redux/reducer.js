import { combineReducers } from 'redux'
import { FETCHED_RECIPES } from './actionCreators'

// function reducer(state, action){
//     return state
// }

const recipeReducer = (oldState=[], action) => {
  switch (action.type) {
    case FETCHED_RECIPES:
      return action.payload
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  recipes: recipeReducer
})

export default rootReducer
