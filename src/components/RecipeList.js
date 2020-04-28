import React from 'react'
import RecipeListItem from './RecipeListItem'
import {connect} from 'react-redux'

const RecipeList = props => {
  console.log(props)
  return(
    <div>
    <h3>Recipe List Component</h3>
    {props.recipes.map(recipe =>
      <RecipeListItem recipe={recipe} key={recipe.id}/>
    )}

    </div>
  )
}

const mapStateToProps = (store) => ({
  recipes: store.recipes
})

export default connect(mapStateToProps)(RecipeList);
