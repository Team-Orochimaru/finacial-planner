import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me} from './store'
import AccountOverview from './components/account-overview'
import PlaidLogin from './components/link'
import MonthlySpend from './components/monthlySpend'
import YearlySpend from './components/yearlySpend'
import Budget from './components/Budget'

class Routes extends Component {
  constructor() {
    super()
    this.state = {}
    this.loadPlaidToken = this.loadPlaidToken.bind(this)
  }
  componentDidMount() {
    this.props.loadInitialData()
  }
  async loadPlaidToken() {
    await this.props.plaidAccessToken
  }

  render() {
    const {isLoggedIn, plaidAccessToken} = this.props
    this.loadPlaidToken()
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        {isLoggedIn &&
          plaidAccessToken && (
            <Switch>
              <Route path="/overview" component={AccountOverview} />
              <Route exact path="/home" component={UserHome} />
              <Route path="/budget" component={Budget} />
              <Route path="/yearly" component={YearlySpend} />
              <Route path="/monthly" component={MonthlySpend} />
            </Switch>
          )}
        {isLoggedIn &&
          !plaidAccessToken && (
            <Switch>
              <Route component={PlaidLogin} />
            </Switch>
          )}
      </Switch>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    plaidAccessToken: state.user.plaidAccessToken
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Routes))

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
