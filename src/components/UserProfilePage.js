import React from "react";
import { connect } from "react-redux";
import { withRouter, Link, Redirect } from "react-router-dom";
import { removeFavRecipe, login } from '../redux/actionCreators'


// if(this.this.props.user){
//   return <Redirect to="/usersprofile" />
// }

class UserProfilePage extends React.Component {
render()
  return !localStorage ? <Redirect to='/usersprofile'/> : (
    <div className="user-profile-div">
      <div className="profile-div">
        <img
          id="avatar"
          src="https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg"
          alt="avatar"
        />
      <div>
      <Link to='/usersprofile/edit'>Edit Profile</Link>
      </div>
      <h3>{this.props.user.user.username}</h3>
        <div>
          <p>Bio: {this.props.user.user.bio}</p>
        </div>
      </div>
      My Favorite Recipes:{" "}
      <div className="container-fluid">
        <div className="row">
          {this.props.user.favorites.map(recipe => (
            <div className="col-lg-2" key={recipe.id}>
              <div className="card">
                <img className="card-img-top" src={recipe.picture} alt="Card" />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <div
                    className="btn-group"
                    role="group"
                  >
                    <Link to={`/recipes/${recipe.id}`}>
                      <button type="button" className="btn btn-secondary see-recipe">
                        See Recipe
                      </button>
                    </Link>
                    <button
                      type="button delete-fav"
                      className="btn btn-secondary delete"
                      onClick={e => this.props.deleteFavHandler(recipe, this.props.user)}
                    >
                      x
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}}
// debug user
const mapStateToProps = store => ({
  user: store.user,
  recipe: store.recipes,
  redirect: store.redirect
})

const mapDispatchToProps = dispatch => {
  return {
    deleteFavHandler: (recipe, user) => dispatch(removeFavRecipe(recipe, user)),
    loginUser: (user) => dispatch(login(user))
  }
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserProfilePage)
);
