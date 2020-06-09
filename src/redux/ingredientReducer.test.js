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
})
