import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Menu from './Menu'

class Navbar extends Component {
  async componentDidMount() {
    await this.props.plaidAccessToken
  }

  render() {
    const {handleClick, isLoggedIn, plaidAccessToken} = this.props
    const loginBotton = (
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    )

    const plaidLogin = !plaidAccessToken ? (
      <div>
        <Link to="/home">Home</Link>
        <a href="#" onClick={handleClick}>
          Logout
        </a>
      </div>
    ) : (
      <div>
        <Menu handleClick={handleClick} />
      </div>
    )

    const login = isLoggedIn ? plaidLogin : loginBotton
    return (
      <div>
        <nav>
          <h1>eBudget</h1>
          {login}
        </nav>
      </div>
    )
  }
}

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
