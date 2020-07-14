import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Navbar from './navbar'

const Menu = ({handleClick}) => {
  return (
    <div className="menu">
      <Link to="/home">Home</Link>
      <Link to="/overview">Account Overview</Link>
      <Link to="/charts">Charts</Link>
      <a href="#" onClick={handleClick}>
        Logout
      </a>
    </div>
  )
}
export default Menu
