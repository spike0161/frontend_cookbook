import reducer from '../redux/reducer'

describe("reducer", () => {
  it('handles @@INIT', () => {
    let action = {
      type: "@@INIT"
    }
    expect(reducer(undefined, action)).toEqual({ 'ingredients': [], 'addIngredient': [], 'recipes': [],
    'redirect': false, 'user': null, 'searchText': "" })
  })
  it ('handles ADD_NEW_RECIPE', () => {
    let mockState = { recipes: [] }
    let mockAction = { type: 'ADD_NEW_RECIPE', payload: { id: 1, title: "Fried Chicken", cook_time: 30, instructions: "Bread chicken and fry in oil", picture: null, gluten_free: false, vegetarian: false, vegan: false, dairy_free: false }}
    let result = (reducer(mockState, mockAction))
    expect(result.recipes.length).toBe(1)
  })
  it( 'handles FETCHED_USER', () => {
    let mockState = { user: {} }
    let mockAction = { type: 'FETCHED_USER', payload: { id: 1, first_name: "Dean", last_name: 'Hildebrand', username: "dean88", bio: null, picture: null, password_digest: "h3ll0" }}
    let result = (reducer(mockState, mockAction))
    expect(result.user).toBe(mockAction.payload)
  })
  it( 'handles CHANGE_SEARCH_TEXT', () => {
    let mockState = { searchText: "" }
    let mockAction = { type: 'CHANGE_SEARCH_TEXT', payload: "Chicken"}
    let result = (reducer(mockState, mockAction))
    expect(result.searchText).toBe(mockAction.payload)
  })
  // it( 'handles ADD_REVIEW', () => {
  //   let mockState = { recipes: { reviews: [] } }
  //   let mockAction = {type: 'ADD_REVIEW', payload: { id:1, user_id: 1, rating: 1, review: "terrible", recipe_id: 2 }}
  //   let result = (reducer(mockState, mockAction))
  //   expect(result.recipes[2].reviews.length).toBe(1)
  // })
})
