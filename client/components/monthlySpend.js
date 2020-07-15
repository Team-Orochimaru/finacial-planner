import React, {Component} from 'react'
import {Doughnut} from 'react-chartjs-2'
import {connect} from 'react-redux'
import {fetchTransactions} from '../store/transactions'
import Categories from './Categories'

const data = {
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#0022ff',
        '#c300ff',
        '#00ccff'
      ],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
}

class MonthlySpend extends Component {
  async componentDidMount() {
    await this.props.getTransactions()
  }

  render() {
    let transactions = this.props.transactions

    if (transactions.length) {
      transactions[0].transactions.map(index => {
        if (!data.labels.includes(index.category[0])) {
          data.labels.push(index.category[0])
          data.datasets[0].data.push(index.amount)
        } else {
          const ind = data.labels.indexOf(index.category[0])
          let total = data.datasets[0].data[ind]
          total += index.amount
          data.datasets[0].data[ind] = total
        }
      })
    }

    return (
      <div>
        {transactions.length ? (
          <div>
            <Doughnut data={data} />
            <Categories categories={data} />
          </div>
        ) : (
          <h1>Loading...</h1>
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

export default connect(mapState, mapDispatch)(MonthlySpend)
