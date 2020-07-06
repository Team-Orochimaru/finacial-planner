import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const AccountOverview = props => {
  const {transactions} = props
  console.log('transaction!!!!!!!!', transactions)

  return (
    <div>
      {/* <h3>{transactions[transactions][transactions][0].amount}</h3> */}
    </div>
  )
}

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     transactions: state.user.transactions
//   }
// }

export default connect(null)(AccountOverview)

/**
 * PROP TYPES
 */
AccountOverview.propTypes = {
  transactions: PropTypes.string
}
