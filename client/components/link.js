import React, {Component} from 'react'
import {PlaidLink} from 'react-plaid-link'
import axios from 'axios'
import AccountOverview from './account-overview'
class PlaidLogin extends Component {
  constructor() {
    super()

    this.state = {
      response: null,
      transactions: [],
      test: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleOnSuccess = this.handleOnSuccess.bind(this)
  }

  handleOnSuccess(public_token, metadata) {
    // send token to client server
    axios
      .post('/auth/public_token', {
        public_token: public_token
      })
      .then(() => {
        this.setState({test: true})
      })
    // await this.setState({test: true})
    // console.log(this.state.test)
  }

  handleOnExit() {
    // handle the case when your user exits Link
    // For the sake of this tutorial, we're not going to be doing anything here.
  }

  // async componentDidMount(res) {
  //   await axios.get('/transactions').then((res) => {
  //     this.setState({transactions: [res.data]})
  //   })
  // }

  handleClick(res) {
    axios.get('/transactions').then(res => {
      // console.log(res)
      this.setState({transactions: [res.data.transactions], response: res})
    })
  }

  render() {
    // console.log(this.transactions.transactions.transactions)
    if (this.state.test === false) {
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
    } else if (!this.state.transactions.length && this.state.test) {
      return (
        <div>
          <button type="submit" onClick={this.handleClick}>
            Get Transactions
          </button>
          {/* <AccountOverview transactions={this.state.transactions} onClick={this.handleClick} /> */}
          {/* <AccountOverview transactions={this.state.transactions} /> */}
        </div>
      )
    } else if (this.state.transactions.length) {
      console.log(this.state.response)
      return (
        <div>
          <AccountOverview transactions={this.state.transactions[0]} />
        </div>
      )
    }
  }
}

export default PlaidLogin
