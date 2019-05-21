export const PreferedDividendYield = (price, fixedDividend, parValue) => {
    return (price && fixedDividend && parValue)
        ? (fixedDividend * parValue) / price
        : 'N/A'
}

export const CommonDividendYield = (price, lastDividend) => {
    return (price && lastDividend)
        ? lastDividend / price
        : 'N/A'
}

export const PERatio = (price, dividend) => {
    return (price && dividend)
        ? price / dividend
        : 'N/A'
}

export const GeometricMean = (...args) => {
    const root = args.length
    const value = args.reduce((a, b) => {
        return a + b
    }, 0)

    return (root > 0)
        ? Math.pow(value, 1/root)
        : 'N/A'
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