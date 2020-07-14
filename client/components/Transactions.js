import React from 'react'

const Transactions = props => {
  const {transactions} = props
  // console.log('transaction file', date)
  return (
    <div>
      {transactions.map((transaction, idx) => {
        let counter = idx
        return (
          <div key={counter}>
            <p>
              {transaction.merchantName}: ${transaction.amount}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Transactions
