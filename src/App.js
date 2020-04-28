import React from "react";
import { Route, Switch } from 'react-router-dom'
import RecipeContainer from "./components/RecipeContainer";
import Login from './components/login'

class App extends React.Component {

  // componentDidMount

  render() {
    return (
      <div>
        <Switch>
          <Route  exact path='/' component={Login}/>
        </Switch>
        </div>
    );
  }
}

export default App;
