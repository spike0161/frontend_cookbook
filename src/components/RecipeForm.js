import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class RecipeForm extends React.Component {

state = {
  title: "",
  cookTime: null,
  instructions: "",
  picture: "",
  gluten: false,
  dairy: false,
  vegetarian: false,
  vegan: false
};

// post request here
  render() {
    console.log("Recipe form props:", this.props);
    return !this.props.ingredients ? null : (
      <div>
        <p>Recipe Form</p>
        <form>
          <select >
                {this.props.ingredients.map(ing =>
                <option value={ing.name}>{ing.name}</option>
                )}
              </select>
              <select>
                {this.props.ingredients.map(ing =>
                <option value={ing.unit}>{ing.unit}</option>
                )}
              </select>
              <select>
                {this.props.ingredients.map(ing =>
                <option value={ing.amount}>{ing.amount}</option>
                )}
              </select>
          <div className="form-group">
            <label>Recipe Title: </label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Recipe Title"
              style={{ width: 200 }}
            />
            <label>Cooktime: </label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="cooktime"
              style={{ width: 200 }}
            />
            <label>Picture: </label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="add image"
              style={{ width: 200 }}
            />
            <label>Instructions: </label>

            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              style={{ width: 200 }}
            ></textarea>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="Dairy Free"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              Dairy Free
            </label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="Gluten Free"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  Gluten Free
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="Vegetarian"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    Vegetarian
                  </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="Vegan"
                    />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">
                      Vegan
                    </label>
                    </div>
          </div>
          <div>
            <button>Submit Recipe</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  ingredients: store.ingredients
})

export default withRouter(connect(mapStateToProps)(RecipeForm));
