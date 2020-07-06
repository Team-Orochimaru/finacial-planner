import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import PlaidLogin from './link.js'

/**
 * COMPONENT
 */
export const AccountOverview = props => {
  const {transactions} = props
  console.log('transaction!!!!!!!!', transactions)

  return (
    <div>
      <h1>Account Overview</h1>
      {!transactions.length ? (
        <h1>Click Get Transactions</h1>
      ) : (
        <h1>
          Latest Transaction:{' '}
          {transactions[0].transactions.transactions[0].merchant_name} $
          {transactions[0].transactions.transactions[0].amount}
        </h1>
      )}
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
