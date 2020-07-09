import React, {Component} from 'react'
import {Doughnut} from 'react-chartjs-2'
import CurrentAccount from './currentAccount'
import {currentTransaction} from './link'

const data = {
  labels: ['Red', 'Green', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
}

export default class Charts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transactions: currentTransaction
    }
  }

  render() {
    console.log('CHARTS: ', this.transactions)
    // const {transactions} = this.props
    // data.datasets[0].data = CurrentAccount(transactions)[
    //   transactions.account.account_id
    // ]
    // console.log('>>>>>>>>>>> :', data)

    return <Doughnut data={data} />
  }
}
