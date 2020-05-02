import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RecipeContainer from "./components/RecipeContainer";
import RecipeDetails from "./components/RecipeDetails";
import RecipeForm from './components/RecipeForm'
import Login from "./components/login";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/recipes" component={RecipeContainer} />
            <Route exact path="/addnewrecipe" component={RecipeForm} />
            <Route exact path="/recipes/:id" component={RecipeDetails} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
