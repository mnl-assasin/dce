export const convertedPricePerValue = (base, amount, isString = true) => {
  try {
    const result = parseFloat(base) * parseFloat(amount)
    if (isNaN(result)) {
      return isString ? '' : 0
    }
    return isString ? String(result.toFixed(2)) : result.toFixed(2)
  } catch (e) {
    console.log(e)
    return isString ? '' : 0
  }
}

//this will get USER_WALLETS type
export const computeTotalCoinValue = (base, wallets = {}) => {
  return Object.keys(wallets).reduce(
    (total, next, index, item) =>
      total +
      parseFloat(convertedPricePerValue(base, wallets[next].amount, false)),
    0.0
  )
}
