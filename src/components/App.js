import React, { Component } from 'react';
import Header from './header'
import Loading from './Loading'
import MovieList from './movie-list'
import axios from 'axios'


export default class App extends Component {
  constructor() {
    super()
    this.state = { movies: [], actor: 'all' }

  }

  componentDidMount() {
    this.fetchMovies().then(({data}) => {
      this.setState({ movies: data })
    })
  }

  fetchMovies() {
    const rootUri = `https://movie-api-atlrumqzze.now.sh/movies`
    return axios.get(rootUri)
  }

  selectActor(actor) {
    this.setState({ actor })
  }

  getAllActors(inputMovies) {
    const movies = inputMovies || this.state.movies
    const allActors = []
    movies.forEach((movie) => {
      movie.actors.forEach((actor) => {
        if (allActors.indexOf(actor) === -1)
          allActors.push(actor)
      })
    })
    return (allActors)
  }

  getActorsObject(inputMovies) {
    const movies = inputMovies || this.state.movies
    const allActors = this.getAllActors()
    const actorsObject = {}
    allActors.forEach((actor) => {
      actorsObject[actor] = []
    })

    movies.forEach((movie) => {
      movie.actors.map((actor) => {
        actorsObject[actor].push(movie)
      })
    })
    return (actorsObject)
  }

  render() {
    return (this.state.movies.length === 0) ? (<div><Loading /></div>) : (
      <div>
        <Header actors={this.getAllActors()} selectActor={this.selectActor.bind(this)} />
        <hr />
        <MovieList normalisedData={this.getActorsObject()} allMovies={this.state.movies} actorName={this.state.actor} />
      </div>
    )
  }
}
