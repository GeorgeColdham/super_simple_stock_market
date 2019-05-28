import { expect } from 'chai'
import {
    PreferedDividendYield,
    CommonDividendYield,
    PERatio,
    GeometricMean,
    VolumeWeightedStockPrice as VWSP,
    formatDate
} from '../src/formulas'

describe('PreferedDividendYield', () => {
    it('should not return undefined', () => {
        expect(typeof PreferedDividendYield()).to.not.equal(undefined)
    })
    it('should not return Null', () => {
        expect(typeof PreferedDividendYield()).to.not.equal(null)
    })
    it('should return False when not provided a price', () => {
        expect(PreferedDividendYield()).to.equal(false)
    })
    it('should return False when only provided a price', () => {
        expect(PreferedDividendYield(20)).to.equal(false)
    })
    it('should return the correct value when passed correct parameters', () => {
        expect(PreferedDividendYield(20, 2, 100)).to.equal(10)
    })
})

describe('CommonDividendYield', () => {
    it('should not return undefined', () => {
        expect(typeof CommonDividendYield()).to.not.equal(undefined)
    })
    it('should not return Null', () => {
        expect(typeof CommonDividendYield()).to.not.equal(null)
    })
    it('should return False when not provided a price', () => {
        expect(CommonDividendYield()).to.equal(false)
    })
    it('should return False when only provided a price', () => {
        expect(CommonDividendYield(20)).to.equal(false)
    })
    it('should return the correct value when passed correct parameters', () => {
        expect(CommonDividendYield(20, 25)).to.equal(1.25)
    })
})

describe('PERatio', () => {
    it('should not return undefined', () => {
        expect(typeof PERatio()).to.not.equal(undefined)
    })
    it('should not return Null', () => {
        expect(typeof PERatio()).to.not.equal(null)
    })
    it('should return False when not provided a price', () => {
        expect(PERatio()).to.equal(false)
    })
    it('should return False when only provided a price', () => {
        expect(PERatio(20)).to.equal(false)
    })
    it('should return the correct value when passed correct parameters', () => {
        expect(PERatio(25, 50)).to.equal(0.5)
    })
})

describe('GeometricMean', () => {
    it('should return False when passed no arguments', () => {
        expect(GeometricMean()).to.equal(false)
    })
    it('should return the correct value when passed correct parameters', () => {
        expect(GeometricMean(20,5,2)).to.equal(10)
    })
})

describe('VolumeWeightedStockPrice', () => {

    const zeroedObject = {
        newPQTotal: 0,
        newQTotal: 0,
        VWSP: 0
    }

    const noTotalsObject = {
        newPQTotal: 50,
        newQTotal: 5,
        VWSP: 10
    }

    const TotalsObject = {
        newPQTotal: 51,
        newQTotal: 15,
        VWSP: 3.4
    }

    it('should return an object', () => {
        expect(typeof VWSP()).to.equal('object')
    })
    it('should return an object containing all zeros when passed nothing', () => {
        expect(VWSP()).to.deep.equal(zeroedObject)
    })
    it('should return complete object when not passed totals', () => {
        expect(VWSP(10,5)).to.deep.equal(noTotalsObject)
    })
    it('should correctly adjust totals when provided them', () => {
        expect(VWSP(3,2,45,13)).to.deep.equal(TotalsObject)
    })
})

describe('formatDate', () => {
    it('should return False if not passed a timestamp', () => {
        expect(formatDate()).to.equal(false)
    })
    it('should return False if passed an invalid timestamp', () => {
        expect(formatDate(`1234dffsdg342y`)).to.equal(false)
    })
    it('should return a formatted date string if passed a timestamp', () => {
        expect(formatDate(1559030411379)).to.equal('2019/4/28 8:0:11')
    })
})