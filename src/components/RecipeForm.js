import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class RecipeForm extends React.Component {
  state = {
    title: "",
    cookTime: null,
    instructions: "",
    picture: "",
    gluten: false,
    dairy: false,
    vegetarian: false,
    vegan: false,
    name: "",
    amount: "",
    unit: ""

  };

  nameHandler = e => {
    this.setState({ name: e.target.value});
  };

  amountHandler = e => {
    this.setState({amount: e.target.value});
  };

  unitHandler = e => {
    this.setState({ unit: e.target.value });
  };

  addIngredientHandler = (e, state) => {
    e.preventDefault();
    debugger;
    // let name = this.state.ingredient['name']
    // let unit = this.state.ingredient['unit']
    // let amount = this.state.ingredient['amount']
    // let newIngredient = {
    //   this.setState({ ingredient: { name: name, unit: unit, amount: amount}})
    // }

    // return newIngredient
  };

  // post request here
  render() {
    console.log("Recipe Form:", this.state);
    return !this.props.ingredients ? null : (
      <div>
        <h2>Add a new Recipe!</h2>
        <div className="added-ingredient-div">
          <h4>Added Ingredients:</h4>
          <p><span>{this.state.name}  </span>
            <span>  {this.state.amount}</span>
            <span>{this.state.unit}</span>
      </p>
        </div>
        <form>
          // name value for on change handler name="name"
          <select
            value={this.state.name}
            onChange={e => this.nameHandler(e)}
          >
            <option defaultValue="value">Select Ingredient</option>

            {this.props.ingredients.map(ing => (
              <option key={ing.id} value={ing.name}>
                {ing.name}
              </option>
            ))}
          </select>
          <div>
            <p>
              Amount:
              <input
                className="form-control form-control-sm"
                type="text"
                placeholder="amount"
                value={this.state.amount}
                onChange={e => this.amountHandler(e)}
                style={{ width: 200 }}
              />
            </p>
          </div>
          <div>
            <select
              value={this.state.unit}
              onChange={e => this.unitHandler(e)}
            >
              <option value="">Unit</option>
              <option value="cup">cup(s)</option>
              <option value="g">g</option>
              <option value="oz">oz</option>
              <option value="each">each</option>
              <option value="tsp">tsp</option>
              <option value="Tbs">Tbs</option>
              <option value="whole">whole</option>
            </select>
          </div>
          <button onClick={e => this.addIngredientHandler(e, this.state)}>
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
//     ingredients: () => {dispatch}
//   }
// }

export default withRouter(connect(mapStateToProps)(RecipeForm));
