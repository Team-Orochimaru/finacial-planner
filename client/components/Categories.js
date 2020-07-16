import React from 'react'

const Categories = props => {
  const labels = props.categories.labels
  const payments = props.categories.datasets[0].data

  return (
    <div>
      <h2>CATEGORIES: </h2>
      {payments.map((payment, i) => {
        return (
          <div key={payment}>
            <p>
              {labels[i]}: {payment}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Categories
