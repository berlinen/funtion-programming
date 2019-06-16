import conditionally from './conditionally.js'

const hasGoodRating = rating => rating > 4

const priceChange = conditionally({
  if: hasGoodRating,
  then: rating => rating * 10000,
  else: () => 1000
})

const getDesc = conditionally({
  if: hasGoodRating,
  then: 'good car',
  else: 'bad car'
})

const getCarConfig = car => {
  return {
    newPrice: priceChange(car.rating) + car.price,
    desc: getDesc(car.rating)
  }
}