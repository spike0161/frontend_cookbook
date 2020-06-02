import React from "react";
import { connect } from "react-redux";
import ReviewForm from "./ReviewForm";
import { withRouter } from "react-router-dom";
import { favorite, deleteReview } from "../redux/actionCreators";

class RecipeDetails extends React.Component {
  render() {
    return !this.props.recipe ? null : (
      <div className="recipe-details">
        <h3>{this.props.recipe.title}</h3>
        <div>
          <span>Dairy Free: {this.props.recipe.dairy_free ? "Yes" : "No"}</span>
          <span>Gluten Free: {this.props.recipe.gluten_free ? "Yes" : "No"}</span>
          <span>Vegan: {this.props.recipe.vegan ? "Yes" : "No"}</span>
          <span>Vegetarian: {this.props.recipe.vegetarian ? "Yes" : "No"}</span>
        </div>
        <h4>Ingredients:</h4>
        {this.props.recipe.ingredients.map(ing => (
          <p>
            {ing.name} {ing.amount} {ing.unit}
          </p>
        ))}
        <img src={this.props.recipe.picture} alt="recipe" />
        <p>Cook Time: {this.props.recipe.cook_time} mins</p>
        <h4>Recipe Preparation:</h4> <p>{this.props.recipe.instructions}</p>
          <button
            onClick={() =>
              this.props.fav(this.props.recipe, this.props.user.user)
            }
          >
            Favorite Recipe
          </button>
        <ReviewForm />
        {this.props.recipe.reviews
          ? this.props.recipe.reviews.map(rev => (
              <div>
                {rev.review} : {rev.rating}
                {rev.user_id !== this.props.user.user.id ? null : (
                  <button onClick={() => this.props.deleteReview(rev)}>
                    Remove
                  </button>
                )}
              </div>
            ))
          : null}
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
    fav: (recipe, user) => dispatch(favorite(recipe, user)),
    deleteReview: review => dispatch(deleteReview(review))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RecipeDetails)
);
