import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export const UserHome = props => {
  const {email} = props

  return (
    <div className="user-home-container">
      <h2>Welcome, {email}</h2>
      <h3>Check out the navigation bar for all your budgeting needs.</h3>
    </div>
  )
}

const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

UserHome.propTypes = {
  email: PropTypes.string
}
