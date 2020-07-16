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
  console.log('TRANS AMOUNT -->', amount, typeof amount)

  const handleChange = event => {
    // setAmount({[event.target.name]: event.target.value})
    // console.log('TArget -->', typeof Number(event.target.value))
    setAmount(Number(event.target.value))
  }

  const handleSubmit = event => {
    // alert('Annual income has been changed: ' + value)
    event.preventDefault()
    console.log('Before -->', event.target)
    setToggle(false)
  }

  const button = (
    <button type="submit" onClick={() => setToggle(true)}>
      Edit Annual Savings Goal
    </button>
  )

  const savingsForm = (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Edit Annual Savings Goal</label>
        <input
          name="amount"
          type="text"
          value={amount}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )

  const buttonOrForm = !toggle ? button : savingsForm

  return (
    <div>
      {transactions.length && (
        <div>
          <h3>Annual Savings Goal: ${amount}</h3>
          {buttonOrForm}
          <h5>Monthly savings: ${(amount / 12).toFixed(2)}</h5>
          <h5>Expected monthly income: $4,500</h5>
          <h4>Expected monthly budget: $3,500</h4>
          {/* EMB = EMI - MS */}
        </div>
      )}
    </div>
  )
}

const mapState = state => {
  return {
    transactions: state.transactions
    // plaidAccessToken: state.user.plaidAccessToken
  }
}

const mapDispatch = dispatch => {
  return {
    getTransactions: () => dispatch(fetchTransactions())
  }
}

export default connect(mapState, mapDispatch)(Budget)
