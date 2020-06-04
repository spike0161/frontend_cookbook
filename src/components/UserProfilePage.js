import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { removeFavRecipe } from '../redux/actionCreators'

const UserProfilePage = props => {
  return (
    <div className="user-profile-div">
      <div className="profile-div">
      <img id="avatar" src="https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg" alt="avatar"/>
      <h3>{props.user.user.username}</h3>
      <p id="bio">dwqpifnreougewnpofijewkfopewmdiomewcionewoigrbouwfqnewoufewhofn</p>
      </div>
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
