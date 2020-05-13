import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class RecipeForm extends React.Component {
  state = {
    title: "",
    cookTime: null,
    ingredients: [],
    instructions: "",
    picture: "",
    gluten: false,
    dairy: false,
    vegetarian: false,
    vegan: false,
    name: ""
  };

  nameHandler = e => {
    this.setState({name: e.target.value, ingredients: [...this.state.ingredients, e.target.value ]});
  };

  render() {
    console.log("Recipe Form:", this.state);
    return !this.props.ingredients ? null : (
      <div>
        <h2>Add a new Recipe!</h2>
        <div className="added-ingredient-div">
          <h4>Added Ingredients:</h4>
          {this.state.ingredients.map(ing => ing)}
        </div>
        <form>
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
          </div>

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
