import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import RecipeContainer from "./components/RecipeContainer";
import Login from "./components/login";

class App extends React.Component {
  

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Login} />
          <Route exact path="/allrecipes" component={RecipeContainer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
