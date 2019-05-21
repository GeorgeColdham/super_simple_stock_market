import { expect } from 'chai'
import { PreferedDividendYield, CommonDividendYield, PERatio, GeometricMean, VolumeWeightedStockPrice as VWSP } from '../src/formulas'

describe('DividendYield', () => {
    it('should not return undefined', () => {
        expect(typeof PreferedDividendYield()).to.not.equal(undefined)
    })
    it('should not return Null', () => {
        expect(typeof PreferedDividendYield()).to.not.equal(null)
    })
    it('should return "N/A" when not provided a price', () => {
        expect(PreferedDividendYield()).to.equal('N/A')
    })
    it('should return "N/A" when only provided a price', () => {
        expect(PreferedDividendYield(20)).to.equal('N/A')
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
    it('should return "N/A" when not provided a price', () => {
        expect(CommonDividendYield()).to.equal('N/A')
    })
    it('should return "N/A" when only provided a price', () => {
        expect(CommonDividendYield(20)).to.equal('N/A')
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
    it('should return "N/A" when not provided a price', () => {
        expect(PERatio()).to.equal('N/A')
    })
    it('should return "N/A" when only provided a price', () => {
        expect(PERatio(20)).to.equal('N/A')
    })
    it('should return the correct value when passed correct parameters', () => {
        expect(PERatio(25, 50)).to.equal(0.5)
    })
})

describe('GeometricMean', () => {
    it('should return "N/A" when passed no arguments', () => {
        expect(GeometricMean()).to.equal('N/A')
    })
    it('should return the correct value when passed correct parameters', () => {
        expect(GeometricMean(24,1)).to.equal(5)
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