import React, {Component} from 'react'
import {PlaidLink} from 'react-plaid-link'
import axios from 'axios'
import AccountOverview from './account-overview'
class PlaidLogin extends Component {
  constructor() {
    super()

    this.state = {
      transactions: []
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleOnSuccess(public_token, metadata) {
    // send token to client server
    axios.post('/auth/public_token', {
      public_token: public_token
    })
  }

  handleOnExit() {
    // handle the case when your user exits Link
    // For the sake of this tutorial, we're not going to be doing anything here.
  }

  async handleClick(res) {
    await axios.get('/transactions').then(res => {
      this.setState({transactions: [res.data]})
    })
  }

  render() {
    // console.log(this.transactions.transactions.transactions)
    return (
      <div>
        <PlaidLink
          clientName="React Plaid Setup"
          env="sandbox"
          product={['auth', 'transactions']}
          publicKey="ae9b699cddb974bc89c10074b92e85"
          onExit={this.handleOnExit}
          onSuccess={this.handleOnSuccess}
          className="test"
        >
          Open Link and connect your bank!
        </PlaidLink>
        <div>
          <button onClick={this.handleClick}>Get Transactions</button>
        </div>
        {/* <AccountOverview transactions={this.state.transactions} onClick={this.handleClick} /> */}
        <div>
          {!this.state.transactions.length ? (
            <h1>Click Get Transactions</h1>
          ) : (
            <h1>
              Latest Transaction:{' '}
              {
                this.state.transactions[0].transactions.transactions[0]
                  .merchant_name
              }{' '}
              $
              {this.state.transactions[0].transactions.transactions[0].amount}
            </h1>
          )}

          <div />
        </div>
      </div>
    )
  }
}

export default PlaidLogin
