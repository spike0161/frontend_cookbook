import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { removeFavRecipe } from '../redux/actionCreators'

const UserProfilePage = props => {
  console.log("User Profile props:", props)
  return (
    <div>
      Welcome {props.user.user.user_name}
      My Favorite Recipes:{" "}
      <div className="container-fluid">
        <div className="row">
          {props.user.favorites.map(recipe => (
            <div className="col-sm-2" key={recipe.id}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={recipe.picture}
                  alt="Card"
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to={`/recipes/${recipe.id}`}>
                    <button className='btn btn-primary'>See Recipe</button>
                  </Link>
                  <button className='btn btn-primary' onClick={e => props.deleteFavHandler(recipe, props.user)}>Remove Recipe</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = store => ({
  user: store.user,
  recipe: store.recipes
});

const mapDispatchToProps = dispatch => {
  return {
    deleteFavHandler: (recipe, user) => dispatch(removeFavRecipe(recipe, user))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfilePage));
