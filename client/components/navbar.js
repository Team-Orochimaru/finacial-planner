import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Menu from './Menu'

const Navbar = ({handleClick, isLoggedIn, plaidAccessToken}) => (
  <div>
    {isLoggedIn &&
      plaidAccessToken && (
        <div>
          <nav>
            <h1>eBudget</h1>

            <Menu />
          </nav>
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      )}
    {isLoggedIn &&
      !plaidAccessToken && (
        <div>
          <nav>
            <h1>eBudget</h1>
          </nav>
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      )}
    {!isLoggedIn && (
      <div>
        <nav>
          <h1>eBudget</h1>
        </nav>
        <button type="submit" className="login">
          <Link to="/login">Login</Link>
        </button>
        <button type="submit" className="signup">
          <Link to="/signup">Sign Up</Link>
        </button>
      </div>
    )}
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    plaidAccessToken: state.user.plaidAccessToken
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
