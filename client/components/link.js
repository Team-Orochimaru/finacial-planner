import React, {Component} from 'react'
import {PlaidLink} from 'react-plaid-link'
import {connect} from 'react-redux'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {setAccessTokenFetch} from '../store/user'

class PlaidLogin extends Component {
  constructor() {
    super()
    this.state = {
      plaidAccess: false
    }

    this.handleOnSuccess = this.handleOnSuccess.bind(this)
    this.getTransactions = this.getTransactions.bind(this)
  }
  async getTransactions() {
    await this.props.setAccessTokenFetch(this.props.userId)
    this.props.history.push('/overview')
  }

  async handleOnSuccess(public_token, metadata) {
    const publicToken = axios.post('/auth/public_token', {
      public_token: public_token
    })
    this.setState({plaidAccess: true})
  }

  handleOnExit() {
    // handle the case when your user exits Link
    // For the sake of this tutorial, we're not going to be doing anything here.
  }

  render() {
    return (
      <div>
        {!this.state.plaidAccess ? (
          <div>
            <PlaidLink
              clientName="eBudget"
              env="sandbox"
              product={['auth', 'transactions']}
              publicKey="ae9b699cddb974bc89c10074b92e85"
              onExit={this.handleOnExit}
              onSuccess={this.handleOnSuccess}
              className="plaidLink"
            >
              Open Link and connect your bank!
            </PlaidLink>
          </div>
        ) : (
          <div>
            <button type="submit" onClick={this.getTransactions}>
              Get your bank transactions
            </button>
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    plaidAccessToken: state.user.plaidAccessToken,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    setAccessTokenFetch: id => dispatch(setAccessTokenFetch(id))
  }
}
export default withRouter(connect(mapState, mapDispatch)(PlaidLogin))
