import React from "react";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class RecipeDetails extends React.Component {

  render() {
    console.log("RecipeDetails props:", this.props);
    return !this.props.recipe ? null : (

      <div>RecipeDetails
        <h3>{this.props.recipe.title}</h3>
        <p>Dairy Free: {this.props.recipe.dairy_free ? 'Yes' : 'No' }</p>
        <p>Gluten Free: {this.props.recipe.gluten_free ? 'Yes' : 'No' }</p>
        <p>Vegan: {this.props.recipe.vegan ? 'Yes' : 'No' }</p>
        <p>Vegetarian: {this.props.recipe.vegetarian ? 'Yes' : 'No' }</p>



        <img src={this.props.recipe.picture} alt="recipe-picture"/>
        <p>Cook Time: {this.props.recipe.cook_time} mins</p>
        <h4>Instructions:</h4>        <p>{this.props.recipe.instructions}</p>

      </div>
    )
  }
}
// rating, healthscore


const mapStateToProps = (store, ownProps) => ({
  recipe: store.recipes.find(recipe => recipe.id === parseInt(ownProps.match.params.id))
})

export default withRouter(connect(mapStateToProps)(RecipeDetails))
