import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Home from './home'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
class Navbar extends Component {
  componentDidUpdate() {
    let sidenav = document.getElementById('slide-out')
    M.Sidenav.init(sidenav, {})
  }

  render() {
    const {handleClick, isLoggedIn, plaidAccessToken} = this.props
    return (
      <div>
        {isLoggedIn &&
          plaidAccessToken && (
            <div>
              <nav className="orange" role="navigation">
                <div className="container">
                  <a
                    href="/overview"
                    id="logo-container"
                    className="brand-logo"
                  >
                    eBudget
                  </a>
                  <a
                    href="#"
                    data-target="slide-out"
                    className="sidenav-trigger show-on-large"
                  >
                    <i className="material-icons" id="ham-menu">
                      menu
                    </i>
                  </a>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                      <a href="/overview">Account Overview</a>
                    </li>
                    <li>
                      <a href="/budget">Budget Calculator</a>
                    </li>
                    <li>
                      <a href="/monthly">Monthly Spending</a>
                    </li>
                    <li>
                      <a href="/yearly">Annual Spending</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleClick}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <ul id="slide-out" className="sidenav">
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/overview">Account Overview</a>
                </li>
                <li>
                  <a href="/budget">Budget Calculator</a>
                </li>
                <li>
                  <a href="/monthly">Monthly Spending</a>
                </li>
                <li>
                  <a href="/yearly">Annual Spending</a>
                </li>
                <li>
                  <a href="#" onClick={handleClick}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        {isLoggedIn &&
          !plaidAccessToken && (
            <div>
              <nav className="orange" role="navigation">
                <div className="container">
                  <a
                    href="/overview"
                    id="logo-container"
                    className="brand-logo"
                  >
                    eBudget
                  </a>
                  <a
                    href="#"
                    data-target="slide-out"
                    className="sidenav-trigger show-on-large"
                  >
                    <i className="material-icons" id="ham-menu">
                      menu
                    </i>
                  </a>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                      <a href="/home">Home</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleClick}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <ul id="slide-out" className="sidenav">
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="#" onClick={handleClick}>
                    Logout
                  </a>
                </li>
              </ul>
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
            <Home />
          </div>
        )}
      </div>
    )
  }
}

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

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
