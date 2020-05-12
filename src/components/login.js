import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
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
                  <label htmlFor="name">Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="username..."
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="username">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="password..."
                    value={this.state.username}
                    onChange={this.handleChange}
                  />

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    id="login-btn"
                  >
                    SignUp
                  </button>
                  <label>
                    {" "}
                    <Link to="/SignUp">Don't have an account?</Link>
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

export default Login;
