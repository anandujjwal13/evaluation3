import React, { Component } from 'react';
import Header from './header'
import Loading from './Loading'
//import MovieList from './movie-list'
import axios from 'axios'
const rootUri = `https://movie-api-atlrumqzze.now.sh/movies-ref`

export default class App extends Component {
  constructor() {
    super()
    this.state = { movies: [], actor: 'all' }
    this.fetchMovies()
  }

  fetchMovies() {
    return axios.get(rootUri).then(({data}) => {
      this.setState({ movies: data })
    })
  }
  selectActor(actor) {
    this.setState({ actor })
  }
  getAllActors() {
    const allActors = []
    this.state.movies.forEach((movie) => {
      movie.actors.forEach((actor) => {
        if (allActors.indexOf(actor) === -1)
          allActors.push(actor)
      })
    })
    return (allActors)
  }
  getActorsObject() {
    const allActors = this.getAllActors()
    const actorsObject = {}
    allActors.forEach((actor) => {
      actorsObject[actor] = []
    })
    this.state.movies.forEach((movie) => {
      movie.actors.map((actor) => {
        actorsObject[actor].push(movie)
      })
    })
    console.log(actorsObject)
  }

  render() {
    return (this.state.movies.length === 0) ? (<div><Loading /></div>) : (
      <div>
        <Header actors={this.getAllActors()} selectActor={this.selectActor.bind(this)} />

        {/*<MovieList normalisedData = {this.getActorsObject()} allMovies= {this.state.movies} actorName = {this.state.actor}/>*/}

      </div>
    )
  }
}
