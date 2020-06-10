import React from 'react'
import {withRouter, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOutUser } from '../redux/actionCreators'

const NavBar =(props)=>{

    return(
        <div className ='fixed-nav-bar'>
            <ul>
              <li><Link to='/recipes'>All Recipes</Link></li>
              <li><Link to='/addnewrecipe'>Add new Recipe</Link></li>
              <li><Link to='/usersprofile'>Profile</Link></li>
              <li><Link to='/about'>About</Link></li>
              {props.user ? <li><Link to='/login' onClick={props.logOutUser}>Log out</Link></li> : null }
              
             </ul>
        </div>
    )
}

const mapStateToProps = store => ({
  user: store.user
})

const mapDispatchToProps = dispatch => ({
  logOutUser: () => {
    dispatch(logOutUser())
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
