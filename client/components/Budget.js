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
    setAmount(Number(event.target.value))
  }

  const handleSubmit = event => {
    event.preventDefault()
    setToggle(false)
  }

  const button = (
    <button
      type="submit"
      className="btn orange waves-effect"
      onClick={() => setToggle(true)}
    >
      Edit Annual Savings Goal
    </button>
  )

  const savingsForm = (
    <div className="savingsForm">
      <form onSubmit={handleSubmit}>
        <label>Edit Annual Savings Goal</label>
        <input
          name="amount"
          type="text"
          value={amount}
          onChange={handleChange}
        />
        <button type="submit" className="btn orange waves-effect">
          Submit
        </button>
      </form>
    </div>
  )

  const buttonOrForm = !toggle ? button : savingsForm

  return (
    <div>
      <main>
        {transactions.length && (
          <div className="budgetContainer">
            <h3>
              <span className="label">Annual Savings Goal:</span> ${amount}
            </h3>
            {buttonOrForm}
            <div className="labelDiv">
              <h5>
                <span className="label">Monthly savings:</span> ${(
                  amount / 12
                ).toFixed(2)}
              </h5>
              <h5>
                <span className="label">Expected monthly income:</span> $4,500
              </h5>
              <h5>
                <span className="label">Expected monthly budget:</span> $3,500
              </h5>
            </div>
          </div>
        )}
      </main>
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
