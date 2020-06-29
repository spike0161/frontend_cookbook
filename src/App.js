import React from "react"
import {
  BrowserRouter,
  Route,
  withRouter,
  Switch,
  Redirect
} from "react-router-dom";
import RecipeContainer from "./components/RecipeContainer";
import RecipeDetails from "./components/RecipeDetails";
import RecipeForm from "./components/RecipeForm";
import Login from "./components/login";
import SignUp from "./components/SignUp";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ProfileForm from './components/ProfileForm'
import UserProfilePage from "./components/UserProfilePage";
import css from "./index.css";
import { connect } from "react-redux";
import {
  fetchingRecipes,
  fetchingIngredients,
  login
} from "./redux/actionCreators";

class App extends React.Component {
  // state = {
  //   loading: true
  // };

  componentDidMount() {
    this.props.fetchingRecipes();
    this.props.fetchingIngredients();

    if (localStorage.getItem("jwt")) {
      fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
          Authentication: localStorage.getItem("jwt"),
          Accept: "application/json"
        }
      })
        .then(res => res.json())
        .then(user => {
          this.props.loginUser(user)
        });
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
            {this.props.user ?
            <Redirect to='/usersprofile'/> && <Navbar/>
          :
          <Route exact path='/' component={SignUp}/>}
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/recipes' component={RecipeContainer} />
          <Route exact path='/recipes/:id' component={RecipeDetails} />
          <Route exact path='/addnewrecipe' component={RecipeForm} />
          <Route exact path='/usersprofile' component={UserProfilePage} />
          <Route exact path='/usersprofile/edit' component={
                ProfileForm}/>
              <Route exact path='/about' component={
                      About}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  fetchingRecipes: () => {
    dispatch(fetchingRecipes());
  },
  fetchingIngredients: () => {
    dispatch(fetchingIngredients());
  },
  loginUser: user => {
    dispatch(login(user));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
