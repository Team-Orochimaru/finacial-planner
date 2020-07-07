import React from 'react'

const Transactions = props => {
  const {transactions} = props
  return (
    <div>
      {transactions.map((transaction, idx) => {
        let counter = idx
        return (
          <p key={counter}>
            {transaction.merchantName}: ${transaction.amount}
          </p>
        )
      })}
    </div>
  )
}

export default Transactions
