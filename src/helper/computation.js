export const convertedPricePerValue = (base, amount) => {
  try {
    const result = parseFloat(base) * parseFloat(amount)
    if (isNaN(result)) {
      return ''
    }
    return String(result.toFixed(4))
  } catch (e) {
    console.log(e)
    return ''
  }

}
