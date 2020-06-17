import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addUserData } from "../redux/actionCreators";

class ProfileForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      picture: null,
      bio: ""
    };
  }

  addPicHandler = e => {
    this.setState({ picture: e.target.files[0] });
  };

  addBioHandler = e => {
    this.setState({ bio: e.target.value });
  };

  userDataSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state, this.props.user.user);
    this.props.history.push("/usersprofile");
  };

  render() {
    return (
      <div className="edit-profile">
        <form id="edit_bio" onSubmit={this.userDataSubmit}>
          <div className="added-ingredient-div">
            <h4>Add Picture:</h4>
          </div>
          <div>
              <input type="file" onChange={this.addPicHandler} />
            <h4>Add Bio:</h4>
            <textarea
              id='profile-bio'
              placeholder="add bio here..."
              onChange={this.addBioHandler}
            ></textarea>
          </div>
          <button className="edit-btn">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (userData, user) => dispatch(addUserData(userData, user))
  };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProfileForm));
