import React from "react";
import { BrowserRouter, Route, withRouter,  } from "react-router-dom";
import RecipeContainer from "./components/RecipeContainer";
import RecipeDetails from "./components/RecipeDetails";
import RecipeForm from "./components/RecipeForm";
import Login from "./components/login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import UserProfilePage from "./components/UserProfilePage";
import {Redirect} from 'react-router-dom'
import { connect } from "react-redux";
import { fetchingRecipes, fetchingIngredients } from "./redux/actionCreators";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchingRecipes();
    this.props.fetchingIngredients();
  }
  render() {
    return(
      <div>
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recipes" component={RecipeContainer} />
          <Route exact path="/recipes/:id" component={RecipeDetails} />
          <Route exact path="/addnewrecipe" component={RecipeForm} />
          <Route exact path="/usersprofile" component={UserProfilePage} />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  user: store.user
})


const mapDispatchToProps = dispatch => ({
  fetchingRecipes: () => {
    dispatch(fetchingRecipes());
  },
  fetchingIngredients: () => {
    dispatch(fetchingIngredients());
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
