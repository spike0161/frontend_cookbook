import React from "react";
import { Link, Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import {signUp} from '../redux/actionCreators'

class SignUp extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    password: ""
  };


  handleChange = e => {
    let copyState = {...this.state}
    copyState[e.target.name] = e.target.value
    this.setState(copyState)
  }

  handleSignUpSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }



  render() {
    if(this.props.redirect){
      return <Redirect to='/usersprofile'/>
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
                  onSubmit={this.handleSignUpSubmit}
                >
                  <div className="form-group">
                    <h3>Please sign up </h3>
                    <hr />
                    <label htmlFor="name">First Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstname"
                      placeholder="firstname..."
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="name">Last Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastname"
                      placeholder="lastname..."
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="username">Username:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="username..."
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="password..."
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block login-btn"

                  >
                    SignUp
                  </button>
                  <label>
                    {" "}
                     <Link to="/login">Already a member?</Link>
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
  currentUser: state.user,
  redirect: state.redirect
})
const mapDispatchToProps = dispatch => {
  return {
    onSubmit: user => dispatch(signUp(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
