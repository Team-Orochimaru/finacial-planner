import React, {Component} from 'react'
import MonthlySpend from './monthlySpend'
import YearlySpend from './yearlySpend'

export default class Charts extends Component {
  render() {
    return (
      <div>
        <YearlySpend />
      </div>
    )
  }
}
