var plaid = require('plaid')
var moment = require('moment')
const User = require('../db/models/user')
const {object} = require('prop-types')

var PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID
var PLAID_SECRET = process.env.PLAID_SECRET
var PLAID_PUBLIC_KEY = process.env.PLAID_PUBLIC_KEY
var PLAID_ENV = 'sandbox'

var ACCESS_TOKEN = null
var PUBLIC_TOKEN = null
var ITEM_ID = null

// Initialize the Plaid client
var client = new plaid.Client(
  PLAID_CLIENT_ID,
  PLAID_SECRET,
  PLAID_PUBLIC_KEY,
  plaid.environments[PLAID_ENV],
  {version: '2019-05-29', clientApp: 'Plaid Quickstart'}
)

const receivePublicToken = async (publicToken, userId) => {
  // First, receive the public token and set it to a variable
  try {
    // Second, exchange the public token for an access token
    client.exchangePublicToken(publicToken, async function(
      _error,
      tokenResponse
    ) {
      ACCESS_TOKEN = tokenResponse.access_token
      console.log('Private access token:', ACCESS_TOKEN)
      const currentUser = await User.findByPk(userId)
      await currentUser.update({plaidAccessToken: ACCESS_TOKEN})

      console.log('ACESS TOEK after receive', currentUser.plaidAccessToken)
      // ITEM_ID = tokenResponse.item_id
      // res.json({
      //   access_token: ACCESS_TOKEN,
      //   item_id: ITEM_ID
      // })
    })
  } catch (error) {
    console.log(error)
  }
}

const getTransactions = async (req, res) => {
  // Pull transactions for the last 30 days
  console.log('REQ -->', req.user.dataValues.plaidAccessToken)
  ACCESS_TOKEN = await req.user.dataValues.plaidAccessToken

  let startDate = moment()
    .subtract(30, 'days')
    .format('YYYY-MM-DD')
  let endDate = moment().format('YYYY-MM-DD')
  console.log('made it past variables')

  client.getTransactions(
    ACCESS_TOKEN,
    startDate,
    endDate,
    {
      count: 250,
      offset: 0
    },
    function(_error, transactionsResponse) {
      console.log('from controller ->', ACCESS_TOKEN)
      res.json({transactions: transactionsResponse})
      // TRANSACTIONS LOGGED BELOW!
      // They will show up in the terminal that you are running nodemon in.
      // console.log(transactionsResponse)
    }
  )
}

module.exports = {
  receivePublicToken,
  getTransactions
}
