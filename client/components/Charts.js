import React, {Component} from 'react'
import {Doughnut} from 'react-chartjs-2'
import {connect} from 'react-redux'
import BankAccount from './currentAccount'
import {fetchTransactions} from '../store/transactions'

const data = {
  labels: ['Red', 'Green', 'Yellow'],
  datasets: [
    {
      data: [],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
}

class Charts extends Component {
  async componentDidMount() {
    await this.props.getTransactions()
    // const userTransaction = this.props.transactions
    // console.log('component did mount:', userTransaction)
  }

  render() {
    let transactions = this.props.transactions
    // console.log('Chart transaction: ', transactions[0].transactions)
    if (transactions.length) {
      // console.log('!!!!!!!!!!!:', transactions[0].transactions)
      data.datasets[0].data = [transactions[0].transactions[0].amount]
    }
    // if (transactions.length) {
    //   console.log('CHARTS: ', transactions)
    // data.datasets[0].data = BankAccount(transactions[0])[
    //   transactions[0].accounts.account_id
    // ]
    // }
    return <Doughnut data={data} />
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

export default connect(mapState, mapDispatch)(Charts)
