import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
// import Menu from './Menu'
// import M from '../../public/materialize-v1.0.0/materialize/js/materialize.min.js'
class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      access: false
    }
    // this.handleOnSuccess = this.handleOnSuccess.bind(this)
  }
  componentDidMount() {
    let sidenav = document.querySelector('#slide-out')
    M.Sidenav.init(sidenav, {})
  }

  render() {
    const {handleClick, isLoggedIn, plaidAccessToken} = this.props
    console.log('navbarRender: ', this.state.access)
    return (
      <div>
        {isLoggedIn &&
          plaidAccessToken && (
            <div>
              <nav className="orange" role="navigation">
                <div className="nav-wrapper container">
                  <a href="/" id="logo-container" className="brand-logo">
                    eBudget
                  </a>
                  <ul className="right hide-on-med-and-down">
                    <li>
                      <a href="/overview">Account Overview</a>
                    </li>
                    <li>
                      <a href="/charts">Charts</a>
                    </li>
                  </ul>
                  <ul id="nav-mobile" className="sidenav">
                    <li>
                      <a href="/overview">Account Overview</a>
                    </li>
                    <li>
                      <a href="/charts">Charts</a>
                    </li>
                  </ul>
                  <a
                    href="#"
                    data-target="nav-mobile"
                    className="sidenav-trigger"
                  >
                    <i className="material-icons">menu</i>
                  </a>
                </div>
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
              <nav className="orange" role="navigation">
                <div className="nav-wrapper container">
                  <Link to="/" id="logo-container" className="brand-logo">
                    eBudget
                  </Link>
                </div>
              </nav>
              <Link to="/home">Home</Link>
              <a href="#" onClick={handleClick}>
                Logout
              </a>
              {/* <PlaidLogin
              handleOnSuccess={this.handleOnSuccess}
              access={this.state.access}
            /> */}
            </div>
          )}
        {!isLoggedIn && (
          <div>
            <nav className="orange" role="navigation">
              <div className="nav-wrapper container">
                <Link to="/" id="logo-container" className="brand-logo">
                  eBudget
                </Link>
              </div>
            </nav>
            <ul className="right hide-on-med-and-down">
              <button type="submit" className="login">
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </button>
              <button type="submit" className="signup">
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </button>
            </ul>
          </div>
        )}
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
