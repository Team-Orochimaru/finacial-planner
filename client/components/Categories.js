import React from 'react'

const Categories = props => {
  const labels = props.categories.labels
  const payments = props.categories.datasets[0].data
  const {transactions} = props

  transactions[0].transactions.map(trans => {
    if (!trans.merchant_name) trans.merchant_name = 'Unknown merchant'
    console.log(' names inside map -->', trans.merchant_name)
  })

  console.log('Merchand names -->', transactions[0].transactions)

  return (
    <div>
      <h2>CATEGORIES: </h2>
      {payments.map((payment, i) => (
        <div key={payment}>
          <h4>
            {labels[i]}: {payment}
          </h4>
          {transactions[0].transactions.map(trans => (
            <div key={trans.transaction_id}>
              {trans.category[0] === labels[i] ? (
                <div>
                  <p>
                    {trans.merchant_name}: ${trans.amount}
                    <br />
                    <span> {trans.date}</span>
                  </p>
                </div>
              ) : (
                <div />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Categories
