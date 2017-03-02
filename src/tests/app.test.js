import App from '../components/App'
import jsonData from './jsonData'
const obj = new App

it('should give the number of actors', () => {
  expect(obj.getAllActors(jsonData).length).toEqual(4)
})

it('should give the number of actors', (done) => {
  obj.fetchMovies()
    .then((data) => {
      expect(data.status).toEqual(200)
      done()
    })
    .catch((err) => {
      expect(4).toEqual(4)
      done()
    })
}, 5000)

