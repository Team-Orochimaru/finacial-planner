const BankAccount = transactions => {
  let bankAccount = {}
  for (let i = 0; i < transactions.transactions.length; ++i) {
    let accountTransactions = []
    let currentTransaction = {}

    if (bankAccount[transactions.transactions[i].account_id]) {
      let merchant = transactions.transactions[i].merchant_name
      if (merchant === null) {
        merchant = 'Unknown merchant'
        currentTransaction.amount = transactions.transactions[i].amount
        currentTransaction.merchantName = merchant
        currentTransaction.date = transactions.transactions[i].date
      } else {
        currentTransaction.amount = transactions.transactions[i].amount
        currentTransaction.merchantName = merchant
        currentTransaction.date = transactions.transactions[i].date
      }

      accountTransactions.push(currentTransaction)

      bankAccount[transactions.transactions[i].account_id].push(
        ...accountTransactions
      )
    } else {
      let merchant = transactions.transactions[i].merchant_name
      if (merchant === null) {
        merchant = 'Unknown merchant'
        currentTransaction.amount = transactions.transactions[i].amount
        currentTransaction.merchantName = merchant
        currentTransaction.date = transactions.transactions[i].date
      } else {
        currentTransaction.amount = transactions.transactions[i].amount
        currentTransaction.merchantName = merchant
        currentTransaction.date = transactions.transactions[i].date
      }

      accountTransactions.push(currentTransaction)

      bankAccount[transactions.transactions[i].account_id] = accountTransactions
    }
  }
  return bankAccount
}
export default BankAccount
