import React from 'react'
import {Link} from 'react-router-dom'
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <main>
          <h2 className="eBudget-header">Welcome to eBudget!</h2>
          <h3 className="eBudget-subheader">
            Log in or sign up to get started
          </h3>
          <ul className="center-align" id="login-signup-container">
            <Link
              to="/login"
              className="btn-large light-blue lighten-2"
              id="login-signup"
            >
              Login
            </Link>
            <Link to="/signup" className="btn-large orange" id="login-signup">
              Sign Up
            </Link>
          </ul>
        </main>
      </div>
    )
  }
}
