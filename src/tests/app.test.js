import App  from '../components/App'
import jsonData from './jsonData'
const obj = new App

it('should give the number of actors', () => {
  expect(obj.getAllActors(jsonData).length).toEqual(4)
})

// it('should give the number of keys in normalised data', () => {
//  expect(Object.keys(obj.getActorsObject(jsonData)).length).toEqual(4)
// })
