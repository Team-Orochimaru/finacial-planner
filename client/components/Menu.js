import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/overview">Account Overview</Link>
      <Link to="/charts">Charts</Link>
    </div>
  )
}
export default Menu
