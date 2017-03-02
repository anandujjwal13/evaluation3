import {getColor} from '../components/movie-list'

it('should give red when rating is 1 ', () => {
  expect(getColor(1)).toEqual('red')
})
it('should give red when rating is 2 ', () => {
  expect(getColor(2)).toEqual('red')
})
it('should give blue when rating is 3 ', () => {
  expect(getColor(3)).toEqual('blue')
})
it('should give blue when rating is 4 ', () => {
  expect(getColor(4)).toEqual('blue')
})
it('should give green when rating is 5 ', () => {
  expect(getColor(5)).toEqual('green')
})


