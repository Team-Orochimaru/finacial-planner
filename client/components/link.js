import React, {Component} from 'react'
import {PlaidLink} from 'react-plaid-link'
import {connect} from 'react-redux'
import axios from 'axios'
import AccountOverview from './account-overview'

class PlaidLogin extends Component {
  constructor() {
    super()
    this.state = {
      access: false
    }

    this.handleOnSuccess = this.handleOnSuccess.bind(this)
  }

  componentWillUnmount() {
    window.location.reload(false)
  }
  async handleOnSuccess(public_token, metadata) {
    // send token to client server
    axios.post('/auth/public_token', {
      public_token: public_token
    })
    await this.setState({access: true})

    // window.location.reload(false)
  }

  handleOnExit() {
    // handle the case when your user exits Link
    // For the sake of this tutorial, we're not going to be doing anything here.
  }

  render() {
    const {plaidAccessToken} = this.props
    console.log('link:', plaidAccessToken)
    return (
      <div>
        {!plaidAccessToken && !this.state.access ? (
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
          </div>
        ) : (
          <div>
            <AccountOverview />
          </div>
        )}
      </div>
    )
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
