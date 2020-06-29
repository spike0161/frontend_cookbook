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
        {!this.props.recipe.ingredients ? null :
        this.props.recipe.ingredients.map(ing => (
          <p key={ing.id}>
            {ing.name} {ing.amount} {ing.unit}
          </p>
        ))
      }
        <img src={this.props.recipe.picture} alt="recipe" />
        <p>Cook Time: {this.props.recipe.cook_time} mins</p>
          <div id='dietary'>
            <p>Dairy Free: {this.props.recipe.dairy_free ? "Yes" : "No"}</p>
            <p>Gluten Free: {this.props.recipe.gluten_free ? "Yes" : "No"}</p>
            <p>Vegan: {this.props.recipe.vegan ? "Yes" : "No"}</p>
            <p>Vegetarian: {this.props.recipe.vegetarian ? "Yes" : "No"}</p>
          </div>
        <h4>Recipe Preparation:</h4> <p>{this.props.recipe.instructions}</p>
          <button className="btn btn-primary btn-lg btn-block login-btn" id="fav-btn"
            onClick={() =>
              this.props.fav(this.props.recipe, this.props.user.user)
            }
          >
            Favorite Recipe
          </button>
        <ReviewForm />
        {this.props.recipe.reviews
          ? this.props.recipe.reviews.map(rev => (
              <div id="review-div" key={rev.id}>
                Rating : {rev.rating} / 5
                <h4>{rev.review}</h4>
                {rev.user_id !== this.props.user.user.id ? null : (
                  <button id="delete-review-btn"onClick={() => this.props.deleteReview(rev)}>
                    x
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
