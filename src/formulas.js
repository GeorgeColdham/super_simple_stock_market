export const PreferedDividendYield = (price, fixedDividend, parValue) => {
  return (price && fixedDividend && parValue)
    ? (fixedDividend * parValue) / price
    : false
}

export const CommonDividendYield = (price, lastDividend) => {
  return (price && lastDividend)
    ? lastDividend / price
    : false
}

export const PERatio = (price, dividend) => {
  return (price && dividend)
    ? price / dividend
    : false
}

export const GeometricMean = (productOfPrices, price, numberOfTrades) => {
  const value = price > 0 ? productOfPrices * price : productOfPrices
  console.log(productOfPrices)
  return (numberOfTrades > 0)
    ? Math.pow(value, 1 / numberOfTrades)
    : false
}

export const VolumeWeightedStockPrice = (price = 0, quantity = 0, pqTotal = 0, qTotal = 0) => {
  const newPQTotal = pqTotal + (price * quantity)
  const newQTotal = quantity + qTotal

  return {
    newPQTotal,
    newQTotal,
    VWSP: newQTotal === 0 ? 0 : newPQTotal / newQTotal
  }
}

export const formatDate = timestamp => {
  const year = timestamp.getUTCFullYear()
  const month = timestamp.getUTCMonth()
  const day = timestamp.getUTCDate()
  const hour = timestamp.getUTCHours()
  const min = timestamp.getUTCMinutes()
  const sec = timestamp.getUTCSeconds()

  return `${year}/${month}/${day} ${hour}:${min}:${sec}`
}
