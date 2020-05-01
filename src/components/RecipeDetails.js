import React from "react";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class RecipeDetails extends React.Component {
  render() {
    return !this.props.recipe ? null : (

      <div>RecipeDetails
        <h3>{this.props.recipe.title}</h3>
      </div>
    )
  }
}



const mapStateToProps = (store, ownProps) => ({
  recipe: store.recipes.find(recipe => recipe.id === parseInt(ownProps.match.params.id))
})

export default withRouter(connect(mapStateToProps)(RecipeDetails))
