import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {fetchTransactions} from '../store/transactions'
import {Form} from 'semantic-ui-react'

const Budget = props => {
  const [amount, setAmount] = useState(12000)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    ;(async () => {
      await props.getTransactions()
    })()
  }, [])

  let transactions = props.transactions
  let transAmount = 0
  if (transactions.length) {
    transactions = props.transactions
    transactions[0].transactions.map(transaction => {
      transAmount += transaction.amount
    })
  }

  const handleChange = event => {
    setAmount(Number(event.target.value))
  }

  const handleSubmit = event => {
    event.preventDefault()
    setToggle(false)
  }

  const button = (
    <button
      type="submit"
      className="btn light-blue lighten-2"
      onClick={() => setToggle(true)}
    >
      Edit Annual Savings Goal
    </button>
  )

  const savingsForm = (
    <div className="collection-item">
      <form onSubmit={handleSubmit}>
        <label>Edit Annual Savings Goal</label>
        <input
          name="amount"
          type="text"
          value={amount}
          onChange={handleChange}
        />
        <button type="submit" className="btn orange">
          Submit
        </button>
      </form>
    </div>
  )

  const buttonOrForm = !toggle ? button : savingsForm

  return (
    <div className="budgetContainer">
      <h2>Budget Calculator</h2>
      <ul className="collection">
        {transactions.length && (
          <table className="striped">
            <tbody>
              <tr>
                <td>Annual Savings Goal</td>
                <td>${amount}</td>
              </tr>
              <tr>
                <td>Monthly Savings</td>
                <td>${(amount / 12).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Expected Monthly Income</td>
                <td>$4,500</td>
              </tr>
              <tr>
                <td>Expected Monthly Budget</td>
                <td>$3,500</td>
              </tr>
            </tbody>
          </table>
        )}
      </ul>
      <div className="buttonOrFormContainer">{buttonOrForm}</div>
    </div>
  )
}

const mapState = state => {
  return {
    transactions: state.transactions
  }
}

const mapDispatch = dispatch => {
  return {
    getTransactions: () => dispatch(fetchTransactions())
  }
}

export default connect(mapState, mapDispatch)(Budget)
