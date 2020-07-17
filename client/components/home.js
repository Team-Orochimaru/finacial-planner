import React from 'react'
import {Link} from 'react-router-dom'
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <main>
          <h2>Welcome to eBudget!</h2>
          <ul className="center-align" id="login-signup-container">
            <Link
              to="/login"
              className="btn light-blue lighten-2"
              id="login-signup"
            >
              Login
            </Link>
            <br />
            <Link to="/signup" className="btn orange" id="login-signup">
              Sign Up
            </Link>
          </ul>
          <h3>Login or Signup to get started</h3>
        </main>
      </div>
    )
  }
}
