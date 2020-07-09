const CurrentAccount = transactions => {
  let currentAccount = {}

  for (let i = 0; i < transactions.transactions.length; ++i) {
    let accountTransactions = []
    let currentTransaction = {}
    if (currentAccount[transactions.transactions[i].account_id]) {
      let merchant = transactions.transactions[i].merchant_name
      if (merchant === null) {
        merchant = 'Unknown merchant'
        currentTransaction.amount = transactions.transactions[i].amount
        currentTransaction.merchantName = merchant
      } else {
        currentTransaction.amount = transactions.transactions[i].amount
        currentTransaction.merchantName = merchant
      }

      accountTransactions.push(currentTransaction)

      currentAccount[transactions.transactions[i].account_id].push(
        ...accountTransactions
      )
    } else {
      let merchant = transactions.transactions[i].merchant_name
      if (merchant === null) {
        merchant = 'Unknown merchant'
        currentTransaction.amount = transactions.transactions[i].amount
        currentTransaction.merchantName = merchant
      } else {
        currentTransaction.amount = transactions.transactions[i].amount
        currentTransaction.merchantName = merchant
      }

      accountTransactions.push(currentTransaction)

      currentAccount[
        transactions.transactions[i].account_id
      ] = accountTransactions
    }
  }
  return currentAccount
}
export default CurrentAccount
