import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2'
import {connect} from 'react-redux'
import {yearly} from '../store/yearly'
const moment = require('moment')

class YearlySpend extends Component {
  async componentDidMount() {
    await this.props.yearlyTransaction()
  }

  render() {
    const data = {
      labels: [
        moment()
          .subtract(11, 'months')
          .format('MMM'),
        moment()
          .subtract(10, 'months')
          .format('MMM'),
        moment()
          .subtract(9, 'months')
          .format('MMM'),
        moment()
          .subtract(8, 'months')
          .format('MMM'),
        moment()
          .subtract(7, 'months')
          .format('MMM'),
        moment()
          .subtract(6, 'months')
          .format('MMM'),
        moment()
          .subtract(5, 'months')
          .format('MMM'),
        moment()
          .subtract(4, 'months')
          .format('MMM'),
        moment()
          .subtract(3, 'months')
          .format('MMM'),
        moment()
          .subtract(2, 'months')
          .format('MMM'),
        moment()
          .subtract(1, 'months')
          .format('MMM'),
        moment()
          .subtract(0, 'months')
          .format('MMM')
      ],
      datasets: [
        {
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          label: 'USD',
          backgroundColor: [
            'rgba(255, 99, 132, 0.1)',
            'rgba(54, 162, 235, 0.1)',
            'rgba(255, 206, 86, 0.1)',
            'rgba(83, 109, 254, 0.1)',
            'rgba(195, 0, 255, 0.1)',
            'rgba(0, 128, 0, 0.1)',
            'rgba(128, 0, 0, 0.1)',
            'rgba(0, 0, 128, 0.1)',
            'rgba(45, 242, 132, 0.1)',
            'rgba(64, 189, 34, 0.1)',
            'rgba(242, 22, 132, 0.1)',
            'rgba(64, 150, 242, 0.1)'
          ],
          borderColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(83, 109, 254)',
            'rgba(195, 0, 255)',
            'rgba(0, 128, 0)',
            'rgba(128, 0, 0)',
            'rgba(0, 0, 128)',
            'rgba(45, 242, 132)',
            'rgba(64, 189, 34)',
            'rgba(242, 22, 132)',
            'rgba(64, 150, 242)'
          ],
          hoverBackgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(0, 0, 255, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(83, 109, 254, 0.5)',
            'rgba(195, 0, 255, 0.5)',
            'rgba(0, 128, 0, 0.5)',
            'rgba(128, 0, 0, 0.5)',
            'rgba(0, 0, 128, 0.5)',
            'rgba(45, 242, 132, 0.5)',
            'rgba(64, 189, 34, 0.5)',
            'rgba(242, 22, 132, 0.5)',
            'rgba(64, 150, 242, 0.5)'
          ],
          borderWidth: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        }
      ]
    }
    let transactions = this.props.transactions
    if (transactions.length) {
      data.datasets[0].data.forEach((_, index) => {
        const currIdx = moment()
          .subtract(11 - index, 'months')
          .month()
        let currentMonth = currIdx
        let total = 0
        for (let i = 0; i < transactions[0].transactions.length; i++) {
          if (
            Number(transactions[0].transactions[i].date.slice(5, 7)) ===
            currentMonth + 1
          ) {
            if (
              currentMonth ===
                moment()
                  .subtract(0, 'months')
                  .month() &&
              Number(transactions[0].transactions[i].date.slice(0, 4)) !==
                moment().year()
            ) {
              continue
            }
            total += transactions[0].transactions[i].amount
          }
        }
        data.datasets[0].data[index] = total
      })
    }
    return (
      <div>
        {transactions.length ? (
          <div className="yearlyContainer">
            <h2>Annual Spending</h2>
            <Bar data={data} />
          </div>
        ) : (
          <div>
            <h5>Loading...</h5>
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    transactions: state.yearly
  }
}

const mapDispatch = dispatch => {
  return {
    yearlyTransaction: () => dispatch(yearly())
  }
}

export default connect(mapState, mapDispatch)(YearlySpend)
