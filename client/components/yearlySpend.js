import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'
import {connect} from 'react-redux'
import {yearly} from '../store/transactions'
const moment = require('moment')
const data = {
  labels: [
    moment()
      .subtract(12, 'months')
      .format('MMMM'),
    moment()
      .subtract(11, 'months')
      .format('MMMM'),
    moment()
      .subtract(10, 'months')
      .format('MMMM'),
    moment()
      .subtract(9, 'months')
      .format('MMMM'),
    moment()
      .subtract(8, 'months')
      .format('MMMM'),
    moment()
      .subtract(7, 'months')
      .format('MMMM'),
    moment()
      .subtract(6, 'months')
      .format('MMMM'),
    moment()
      .subtract(5, 'months')
      .format('MMMM'),
    moment()
      .subtract(4, 'months')
      .format('MMMM'),
    moment()
      .subtract(3, 'months')
      .format('MMMM'),
    moment()
      .subtract(2, 'months')
      .format('MMMM'),
    moment()
      .subtract(1, 'months')
      .format('MMMM'),
    moment().format('MMMM')
  ],
  datasets: [
    {
      data: [],
      label: 'Amount',
      backgroundColor: ['#00b7fa']
    }
  ]
}

class YearlySpend extends Component {
  async componentDidMount() {
    await this.props.yearlyTransaction()
  }

  render() {
    let transactions = this.props.transactions
    if (transactions.length) {
      transactions[0].transactions.map(index => {
        console.log(index)
        let currentMonth = ''
        let counter = 0
        // if(data.datasets[0].data.date === currentMonth) {
        //     counter += index.amount

        // }else {
        //     currentMonth = data.datasets[0].data.date.slice(5,7)
        // }
        data.datasets[0].data.push(counter)
      })
    }
    return <Line data={data} />
  }
}

const mapState = state => {
  return {
    transactions: state.transactions
  }
}

const mapDispatch = dispatch => {
  return {
    yearlyTransaction: () => dispatch(yearly())
  }
}

export default connect(mapState, mapDispatch)(YearlySpend)
