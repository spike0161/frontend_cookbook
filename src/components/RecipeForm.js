import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class RecipeForm extends React.Component {
  constructor(){
  super()
  this.state = {
    title: "",
    cookTime: null,
    instructions: "",
    picture: "",
    gluten: false,
    dairy: false,
    vegetarian: false,
    vegan: false,
    addIngredient: {
      name: '',
      amount: '',
      unit: ''
    }
  };
}


nameHandler = e => {
  this.setState({
    addIngredient: {name: e}
  })
}

amountHandler = e => {
  this.setState({
    addIngredient: {amount: e}
  })
}

unitHandler = e => {
  this.setState({
    addIngredient: {unit: e}
  })
}

  // post request here
  render() {
    console.log(this.state)
    return !this.props.ingredients ? null : (
      <div>
        <h2>Add a new Recipe!</h2>
        <div className="added-ingredient-div">
          <h4>Added Ingredients:</h4>
        </div>
        <form>
          <select onChange={ e => this.nameHandler(e.target.value)}>
            <option value="value" selected>Select Ingredient</option>

            {this.props.ingredients.map(ing => (
              <option key={ing.id} value={ing.name}>
                {ing.name}
              </option>
            ))}
          </select>
          <input
            className="form-control form-control-sm"
            type="text"
            placeholder="amount"
            onChange={e => this.amountHandler(e.target.value)}
            style={{ width: 200 }}
          />
          <label>Amount: </label>
          <select>
            <option value="cup">cup</option>
            <option value="g">g</option>
            <option value="oz">oz</option>
            <option value="each">each</option>
            <option value="tsp">tsp</option>
            <option value="Tbs">Tbs</option>
            <option value="whole">whole</option>
          </select>
          <button onClick={ e => this.unitHandler(this.state.addIngredient)}>
            Add Ingredient
          </button>

          <div className="form-group">
            <label>Recipe Title: </label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Recipe Title"
              style={{ width: 200 }}
            />
            <label>Cooktime: </label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="cooktime"
              style={{ width: 200 }}
            />
            <label>Picture: </label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="add image"
              style={{ width: 200 }}
            />
            <label>Instructions: </label>

            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              style={{ width: 200 }}
            ></textarea>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="Dairy Free"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              Dairy Free
            </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="Gluten Free"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Gluten Free
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="Vegetarian"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Vegetarian
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="Vegan"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Vegan
              </label>
            </div>
          </div>
          <div>
            <button>Submit Recipe</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  ingredients: store.ingredients
});

// const mapDispatchToProps = dispatch => {
//   return {
//     addIngredient: () => {dispatch}
//   }
// }

export default withRouter(connect(mapStateToProps)(RecipeForm));
