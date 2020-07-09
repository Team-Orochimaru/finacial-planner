import React, {Component} from 'react'
import {PlaidLink} from 'react-plaid-link'
import {connect} from 'react-redux'
import axios from 'axios'

// import Charts from './Charts'

// export let currentTransaction
class PlaidLogin extends Component {
  constructor() {
    super()

    this.state = {}

    this.handleOnSuccess = this.handleOnSuccess.bind(this)
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

  // handleClick(res) {
  //   axios.get('/transactions').then((res) => {
  //     // console.log(res)
  //     this.setState({transactions: [res.data.transactions], response: res})
  //     // currentTransaction = [res.data.transactions][0]
  //   })
  // }

  render() {
    // const {plaidAccessToken} = this.props
    // console.log(plaidAccessToken)
    // if (plaidAccessToken === null) {
    return (
      <div>
        <PlaidLink
          clientName="eBudget"
          env="sandbox"
          product={['auth', 'transactions']}
          publicKey="ae9b699cddb974bc89c10074b92e85"
          onExit={this.handleOnExit}
          onSuccess={this.handleOnSuccess}
          className="plaidLink"
          // onClick={(e) => e.preventDefault()}
        >
          Open Link and connect your bank!
        </PlaidLink>

        {/* <button type="submit" onClick={this.handleClick}>
            Get Transactions
          </button> */}
      </div>
    )
    // } else if (!this.state.transactions.length && plaidAccessToken !== null) {
    //   return (
    //     <div>
    //       <button type="submit" onClick={this.handleClick}>
    //         Get Transactions
    //       </button>
    //       {/* <AccountOverview transactions={this.state.transactions} onClick={this.handleClick} /> */}
    //       {/* <AccountOverview transactions={this.state.transactions} /> */}
    //     </div>
    //   )
    // } else if (this.state.transactions.length) {
    //   console.log(this.state.response)
    //   return (
    //     <div>
    //       <AccountOverview transactions={this.state.transactions[0]} />
    //       {/* <Charts transactions={this.state.transactions[0]} /> */}
    //     </div>
    //   )
    // }
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    plaidAccessToken: state.user.plaidAccessToken
  }
}

export default connect(mapState, null)(PlaidLogin)

// export default PlaidLogin
