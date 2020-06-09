import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { removeFavRecipe } from '../redux/actionCreators'

const UserProfilePage = props => {
  console.log("In userProfile", props)
  return (
    <div className="user-profile-div">
      <div className="profile-div">
      <img id="avatar" src="https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg" alt="avatar"/>
      <h3>{props.user.user.username}</h3>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </div>
      My Favorite Recipes:{" "}
      <div className="container-fluid">
        <div className="row">
          {props.user.favorites.map(recipe => (
            <div className="col-lg-2" key={recipe.id}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={recipe.picture}
                  alt="Card"
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>

                      <div class="btn-group" role="group" aria-label="Basic example">
                        <Link to={`/recipes/${recipe.id}`}><button type="button" class="btn btn-secondary">See Recipe</button>
                      </Link>
                        <button type="button delete-fav" class="btn btn-secondary" onClick={e => props.deleteFavHandler(recipe, props.user)}>x</button>
                      </div>


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
