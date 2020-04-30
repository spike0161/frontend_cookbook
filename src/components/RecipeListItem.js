import React from "react";
import { Link } from "react-router-dom";

const RecipeListItem = props => {
  return (
    <div>
      <Link to={`/recipes/${props.recipe.id}`}>
        <h3>{props.recipe.title}</h3>
      </Link>
    </div>
  );
};

export default RecipeListItem;
