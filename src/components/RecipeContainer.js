import React from 'react'
import RecipeList from './RecipeList'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchingRecipes} from '../redux/actionCreators'

class RecipeContainer extends React.Component {

  componentDidMount(){
    this.props.fetchingRecipes()
  }


  render() {
    console.log(this.props)
    return (
      <div>
      <RecipeList/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchingRecipes: () => {dispatch(fetchingRecipes())}
})

export default withRouter(connect(null, mapDispatchToProps)( RecipeContainer))
