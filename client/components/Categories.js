import React from 'react'
const moment = require('moment')

const Categories = props => {
  const labels = props.categories.labels
  const payments = props.categories.datasets[0].data
  const {transactions} = props

  transactions[0].transactions.map(trans => {
    if (!trans.merchant_name) trans.merchant_name = 'Unknown merchant'
  })

  return (
    <div>
      {payments.map((payment, i) => (
        <div className="categoriesContainer" key={payment}>
          <ul className="collection with-header">
            <div className="collection-header" id="collection-header">
              <h4 className="categoriesHeaderBold">{labels[i]}</h4>
              <h4>${payment.toFixed(2)}</h4>
            </div>
            <table className="striped">
              <thead>
                <tr>
                  <th>Merchant</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              {transactions[0].transactions.map(trans => (
                <tbody key={trans.transaction_id}>
                  {trans.category[0] === labels[i] ? (
                    <tr>
                      <td>{trans.merchant_name}</td>
                      <td>${trans.amount.toFixed(2)} </td>
                      <td>{moment(trans.date).format('M/DD/YYYY')}</td>
                    </tr>
                  ) : (
                    <tr />
                  )}
                </tbody>
              ))}
            </table>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Categories
