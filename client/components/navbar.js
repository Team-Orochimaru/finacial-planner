import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Menu from './Menu'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav>
      <h1>eBudget</h1>
      {/* <img src="../../hamburger-menu.png" /> */}
      <Menu />
    </nav>
    {isLoggedIn ? (
      <div>
        {/* The navbar will show these links after you log in */}
        <Link to="/home">Home</Link>
        <a href="#" onClick={handleClick}>
          Logout
        </a>
      </div>
    ) : (
      <div>
        {/* The navbar will show these links before you log in */}
        {/* <button type="submit" className="login">
          <Link to="/login">Login</Link>
        </button>
        <button type="submit" className="signup">
          <Link to="/signup">Sign Up</Link>
        </button> */}
      </div>
    )}
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
