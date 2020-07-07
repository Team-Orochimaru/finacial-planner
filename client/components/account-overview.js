import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import PlaidLogin from './link.js'
import Transactions from './Transactions'

/**
 * COMPONENT
 */
const AccountOverview = props => {
  const {transactions} = props
  console.log('transaction!!!!!!!!', transactions)

  let transAmount = 0

  transactions.transactions.map(transaction => {
    transAmount += transaction.amount
  })

  let currentAccount = {}

  for (let i = 0; i < transactions.transactions.length; ++i) {
    let accountTransactions = []
    let currentTransaction = {}
    if (currentAccount[transactions.transactions[i].account_id]) {
      let merchant = transactions.transactions[i].merchant_name
      if (merchant === null) {
        merchant = 'Unknown merchant'
        currentTransaction.amount = transactions.transactions[i].amount
        currentTransaction.merchantName = merchant
      } else {
        currentTransaction.amount = transactions.transactions[i].amount
        currentTransaction.merchantName = merchant
      }

      accountTransactions.push(currentTransaction)

      currentAccount[transactions.transactions[i].account_id].push(
        ...accountTransactions
      )
    } else {
      let merchant = transactions.transactions[i].merchant_name
      if (merchant === null) {
        merchant = 'Unknown merchant'
        currentTransaction.amount = transactions.transactions[i].amount
        currentTransaction.merchantName = merchant
      } else {
        currentTransaction.amount = transactions.transactions[i].amount
        currentTransaction.merchantName = merchant
      }

      accountTransactions.push(currentTransaction)

      currentAccount[
        transactions.transactions[i].account_id
      ] = accountTransactions
    }
  }
  console.log(currentAccount)
  return (
    <div className="accountOverViewContainer">
      <h1>Account Overview</h1>

      <h3>Total transaction amount: {transAmount}</h3>

      {transactions.accounts.map((account, index) => {
        let count = index
        if (currentAccount[account.account_id]) {
          return (
            <div key={count} className="accountTransationContainer">
              <h3>{account.name}</h3>

              <Transactions transactions={currentAccount[account.account_id]} />
            </div>
          )
        }
      })}
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

export default AccountOverview

/**
 * PROP TYPES
 */
// AccountOverview.propTypes = {
//   transactions: PropTypes.string
// }
