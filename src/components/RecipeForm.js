import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addingRecipe } from "../redux/actionCreators";

// {this.state.ingredients.map(ing => (
//   <li>
//     {ing} <span onClick={() => this.removeIngredient(ing)}>X</span>
//   </li>
// ))}


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
    vegan: false
  };

  recipeHandler = e => {
    let copyState = { ...this.state };
    copyState[e.target.name] = e.target.value;
    this.setState(copyState);
  };

  // allIngredientObjects = () => {
  //   debugger;
  // };

  ingredientsHandler = (e, ing) => {
    let selectedIng = ing.filter(ing => ing.name === e.target.value).pop()
    this.setState({ingredients: [...this.state.ingredients, selectedIng]});
  };

  veganHandler = e => {
    let toggle = this.state.name ? true : false;
    this.setState({ vegan: !toggle });
  };

  vegetarianHandler = e => {
    let toggle = this.state.vegetarian ? true : false;
    this.setState({ vegetarian: !toggle });
  };

  glutenHandler = e => {
    let toggle = this.state.gluten ? true : false;
    this.setState({ gluten: !toggle });
  };

  dairyHandler = e => {
    let toggle = this.state.dairy ? true : false;
    this.setState({ dairy: !toggle });
  };

  //
  // removeIngredient = ing => {
  //   // debugger
  // };

  onRecipeSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state)
    this.props.history.push('/recipes');
  };

  render() {
    return !this.props.ingredients ? null : (
      <div className="recipe-form">
        <form onSubmit={this.onRecipeSubmit}>
          <h2>Add a new Recipe!</h2>
          <div className="added-ingredient-div">
            <h4>Added Ingredients:</h4>
              {this.state.ingredients.map(ing => (
                <p>{ing.name}</p>
              ))}
          </div>

          <div className="form-group">
            <label>Recipe Title: </label>
            <input
              className="form-control form-control-sm"
              type="text"
              name="title"
              onChange={this.recipeHandler}
              placeholder="Recipe Title"
              style={{ width: 200 }}
            />

            <select
              onChange={e => this.ingredientsHandler(e, this.props.ingredients)}
            >
              <option defaultValue="value">Select Ingredient</option>

              {this.props.ingredients.map(ing => (
                <option key={ing.id} value={ing.name}>
                  {ing.name}
                </option>
              ))}
            </select>

            <label>Cooktime: </label>
            <input
              className="form-control form-control-sm"
              type="text"
              name="cookTime"
              onChange={this.recipeHandler}
              placeholder="cooktime"
              style={{ width: 200 }}
            />
            <label>Picture: </label>
            <input
              className="form-control form-control-sm"
              type="text"
              name="picture"
              onChange={this.recipeHandler}
              placeholder="add image"
              style={{ width: 200 }}
            />
            <label>Instructions: </label>

            <textarea
              className="form-control"
              name="instructions"
              onChange={this.recipeHandler}
              id="exampleFormControlTextarea1"
              rows="3"
              style={{ width: 200 }}
            ></textarea>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              onClick={this.dairyHandler}
              id="inlineCheckbox1"
              value={this.state.dairy}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              Dairy Free
            </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                onClick={this.glutenHandler}
                type="checkbox"
                id="inlineCheckbox1"
                value={this.state.gluten}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Gluten Free
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                onClick={this.vegetarianHandler}
                type="checkbox"
                id="inlineCheckbox1"
                value={this.state.vegetarian}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Vegetarian
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                onClick={this.veganHandler}
                type="checkbox"
                id="inlineCheckbox1"
                value={this.state.vegan}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Vegan
              </label>
            </div>
          </div>
          <div>
            <button type="submit">Submit Recipe</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  ingredients: store.ingredients,
  recipes: store.recipes,
  user: store.user
});

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: recipe => dispatch(addingRecipe(recipe))
  };
};

export default withRouter(
  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(RecipeForm)
));
