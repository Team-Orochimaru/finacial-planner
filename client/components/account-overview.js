import React from 'react'
import {connect} from 'react-redux'
import Transactions from './Transactions'
import BankAccount from './currentAccount'
import {fetchTransactions} from '../store/transactions'

/**
 * COMPONENT
 */
class AccountOverview extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     transactions: [],
  //   }
  // }

  async componentDidMount() {
    await this.props.getTransactions()
    console.log('<<<<<<<<<<<:', this.props.transactions)
  }

  render() {
    console.log('>>>>>>>>>>>>>>> :', this.props.transactions)
    let transactions = this.props.transactions
    let transAmount = 0
    if (transactions.length) {
      transactions = this.props.transactions
      console.log('!!!!!!!!!!!:', transactions)
      transactions[0].transactions.map(transaction => {
        transAmount += transaction.amount
      })
    }

    return (
      <div className="accountOverViewContainer">
        {transactions === undefined || !transactions.length ? (
          <h3>Loading...</h3>
        ) : (
          <div>
            <h1>Account Overview</h1>
            <h3>Total transaction amount: {transAmount}</h3>

            {transactions[0].accounts.map((account, index) => {
              let count = index
              if (BankAccount(transactions[0])[account.account_id]) {
                return (
                  <div key={count} className="accountTransactionContainer">
                    <h3>{account.name}</h3>

                    <Transactions
                      transactions={
                        BankAccount(transactions[0])[account.account_id]
                      }
                      // date={BankAccount(transactions[0].date)}
                    />
                  </div>
                )
              }
            })}
          </div>
        )}
      </div>
    )
  }
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

export default connect(mapState, mapDispatch)(AccountOverview)
