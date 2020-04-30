import React from "react";
import RecipeListItem from "./RecipeListItem";
import { connect } from "react-redux";

const RecipeList = props => {
  return (
    <div>
      {props.recipes.map(recipe => (
        <RecipeListItem recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
};

const mapStateToProps = store => ({
  recipes: store.recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(store.searchText.toLowerCase())
  )
});

export default connect(mapStateToProps)(RecipeList);
