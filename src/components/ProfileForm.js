import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addUserData } from "../redux/actionCreators";

class ProfileForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profilePic: {}
    };
  }

  addPicHandler = e => {
    this.setState({ profilePic: e.target.files[0] });
  };

  userDataSubmit = e => {
    e.preventDefault();
    const form = new FormData();
    form.append("profilePic", this.state.profilePic)
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
    onSubmit: (profilePic, user) => dispatch(addUserData(profilePic, user)),
  };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProfileForm));
