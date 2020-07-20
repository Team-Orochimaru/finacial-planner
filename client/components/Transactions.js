import React from 'react'

const Transactions = props => {
  const {transactions} = props
  return (
    <div>
      <table className="striped">
        <thead>
          <tr>
            <th>Merchant</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, idx) => {
            let counter = idx
            return (
              <tr key={counter}>
                <td>{transaction.merchantName}</td>
                <td>${transaction.amount.toFixed(2)}</td>
                <td>{transaction.date}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
