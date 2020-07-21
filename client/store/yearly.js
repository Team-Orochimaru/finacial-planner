import axios from 'axios'

const GET_YEARLY_TRANSACTIONS = 'GET_YEARLY_TRANSACTIONS'

/**
 * INITIAL STATE
 */

/**
 * ACTION CREATORS
 */
const getTransactions = transactions => ({
  type: GET_YEARLY_TRANSACTIONS,
  transactions
})

/**
 * THUNK CREATORS
 */

export const yearly = () => async dispatch => {
  try {
    const res = await axios.get('/yearlyTransaction')
    dispatch(getTransactions([res.data.transactions]))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case GET_YEARLY_TRANSACTIONS:
      return action.transactions
    default:
      return state
  }
}
