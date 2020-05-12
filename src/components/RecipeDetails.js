import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { favorite } from '../redux/actionCreators'

class RecipeDetails extends React.Component {
  render() {
    console.log("Recipe details:",this.props)
    return !this.props.recipe ? null : (
      <div>
        <h3>{this.props.recipe.title}</h3>
        <button onClick={()=> this.props.fav(this.props.recipe, this.props.user.user)}>Favorite Recipe</button>
        <div>
          <p>Dairy Free: {this.props.recipe.dairy_free ? "Yes" : "No"}</p>
          <p>Gluten Free: {this.props.recipe.gluten_free ? "Yes" : "No"}</p>
          <p>Vegan: {this.props.recipe.vegan ? "Yes" : "No"}</p>
          <p>Vegetarian: {this.props.recipe.vegetarian ? "Yes" : "No"}</p>
        </div>
        <h4>Ingredients:</h4>
        {this.props.recipe.ingredients.map(ing => (
          <p>{ing.name} {ing.amount} {ing.unit}</p>
        ))}
        <img src={this.props.recipe.picture} alt="recipe" />
        <p>Cook Time: {this.props.recipe.cook_time} mins</p>
        <h4>Instructions:</h4> <p>{this.props.recipe.instructions}</p>
      </div>
    );
  }
}


const mapStateToProps = (store, ownProps) => ({
  recipe: store.recipes.find(
    recipe => recipe.id === parseInt(ownProps.match.params.id)
  ),
  user: store.user,
  ingredients: store.ingredients
});

const mapDispatchToProps = dispatch => {
  return {
    fav: (recipe, user) => dispatch(favorite(recipe, user))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeDetails));
