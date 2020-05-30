import React from "react";
import RecipeListItem from "./RecipeListItem";
import { connect } from "react-redux";

class RecipeList extends React.Component {

  render() {
    return (
      <div>
        {this.props.recipes.map(recipe => (
          <RecipeListItem recipe={recipe} key={recipe.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  recipes: store.recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(store.searchText.toLowerCase())
  )
});

export default connect(mapStateToProps)(RecipeList);
