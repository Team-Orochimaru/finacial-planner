import React from 'react'

const Categories = props => {
  const labels = props.categories.labels
  const payments = props.categories.datasets[0].data
  const {transactions} = props

  transactions[0].transactions.map(trans => {
    if (!trans.merchant_name) trans.merchant_name = 'Unknown merchant'
  })

  return (
    <div className="monthlyContainerDiv">
      <main>
        <div className="monthlyConatiner">
          <h2>Categories: </h2>
          {payments.map((payment, i) => (
            <div key={payment}>
              <h4>
                <span className="monthlyLabel">{labels[i]}:</span>{' '}
                {payment.toFixed(2)}
              </h4>
              {transactions[0].transactions.map(trans => (
                <div key={trans.transaction_id}>
                  {trans.category[0] === labels[i] ? (
                    <div className="singleTransaction">
                      <p>
                        {trans.merchant_name}: ${trans.amount.toFixed(2)}{' '}
                        {trans.date}{' '}
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
      </main>
    </div>
  )
}

export default Categories
