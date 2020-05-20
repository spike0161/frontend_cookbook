import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { logginIn } from '../redux/actionCreators'

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  inputHandler = e => {
    let copyState = {...this.state}
    copyState[e.target.name] = e.target.value
    this.setState(copyState)
  }

  handleLoginSubmit = e => {
    e.preventDefault()
    this.props.onLogin(this.state)
  }

  render() {
    if(this.props.redirect){
      return <Redirect to='/usersprofile' />
    }
    return (
      <div>
        <div className="bg-img">
          <div className="container-fluid login-container">
            <div className="row login-container">
              <div className="col-lg-4 offset-lg-4">
                <form
                  action="/action_page.php"
                  className="container"
                  onSubmit={this.handleLoginSubmit}
                >
                  <label htmlFor="name">Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="username..."
                    value={this.state.username}
                    onChange={this.inputHandler}
                  />
                <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="password..."
                    value={this.state.password}
                    onChange={this.inputHandler}
                  />

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    id="login-btn"
                  >
                    Login
                  </button>
                  <label>
                    {" "}
                    <Link to="/">Don't have an account?</Link>
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  redirect: state.redirect
})

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch(logginIn(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
