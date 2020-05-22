import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addCreatedReview } from "../redux/actionCreators";

// <label>Review Title: </label>
// <input
//   className="form-control form-control-sm"
//   type="text"
//   name="title"
//   onChange={this.reviewTitleHandler}
//   placeholder="Recipe Title"
//   style={{ width: 200 }}
// />

class ReviewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // title: "",
      reviewText: "",
      rating: 1
    };
  }

  // reviewTitleHandler = e => {
  //   this.setState({ title: e.target.value });
  // };

  ratingHandler = e => {
    this.setState({ rating: e.target.value });
  };

  reviewHandler = e => {
    this.setState({ reviewText: e.target.value });
  };

  addCreatedReview = e => {
    e.preventDefault();
    this.props.onSubmit(this.state, this.props.recipe);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addCreatedReview}>
          <div className="form-group">


            <select value={this.state.name} onChange={this.ratingHandler}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <label>Review: </label>

            <textarea
              className="form-control"
              name="instructions"
              onChange={this.reviewHandler}
              id="exampleFormControlTextarea1"
              rows="3"
              style={{ width: 200 }}
            ></textarea>
            <button>Submit Review</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  recipe: state.recipes.find(rec => rec.id === parseInt(ownProps.match.params.id)),
});

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (newReview,recipe) => dispatch(addCreatedReview(newReview, recipe))

  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm));
