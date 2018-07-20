import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Slider from './components/Slider/Slider.js'

export default class Home extends Component {
  state = {
    movieList: []
  }

  componentWillMount(){
    axios.get('/api/movies').then(response => {
      this.setState({
        movieList: response.data.results
      }, ()=>{
      })
    })
    axios.get('/api/hello').then(response => {
    })
    axios.get(`https://api.themoviedb.org/3/movie/25?api_key=f20135b292080c1a6bdcdd3cf8616d48`).then(response => {
      const movie = response.data

    })
  }

  showMovies = () => {
    const imgURL = 'http://image.tmdb.org/t/p/original'
    if (this.state.movieList) {
      return (this.state.movieList.reverse().map((item, i) => {
        return (
          <div className="movie-card" key={i}>
            <img src={`${imgURL}${item.poster_path}`} />
            <p className="title" key={i}>{item.title}</p>
          </div>
        )
      }))
    } else {
    }
  }

  render () {
    return (
      <div className="home-page">
        <div className="container">
          <Slider />
        </div>
      </div>
    )
  }
}
