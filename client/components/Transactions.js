import React from 'react'

const Transactions = props => {
  const {transactions} = props
  return (
    <div>
      {transactions.map((transaction, idx) => {
        let counter = idx
        return (
          <div key={counter}>
            <p>
              {transaction.merchantName}: ${transaction.amount.toFixed(2)}
            </p>
            <p>{transaction.date}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Transactions
