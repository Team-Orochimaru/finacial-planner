import axios from 'axios'

const GET_INCOME = 'GET_INCOME'

/**
 * ACTION CREATORS
 */
const getIncome = income => ({
  type: GET_INCOME,
  income
})

/**
 * THUNK CREATORS
 */
export const fetchIncome = () => async dispatch => {
  try {
    const res = await axios.get('/income')
    dispatch(getIncome([res.data.income]))
  } catch (err) {
    console.error(err)
  }
}
/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case GET_INCOME:
      return action.income
    default:
      return state
  }
}
