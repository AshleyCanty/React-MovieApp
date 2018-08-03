import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Listings extends Component {
  constructor () {
    super()
    this.cardHandler = this.cardHandler.bind(this);
    this.state = {
      movieList: []
    }
  }

  componentWillMount(){
    axios.get('/api/movies').then(response => {
      this.setState( {
        movieList: response.data.results
      }, ()=>{
      })
    })

    axios.get(`https://api.themoviedb.org/3/movie/25?api_key=f20135b292080c1a6bdcdd3cf8616d48`).then(response => {
      const movie = response.data
    })
  }

  cardHandler = (e) => {
    console.log(e.target.id)
  }

  showMovies = () => {
    const imgURL = 'http://image.tmdb.org/t/p/original'
    if (this.state.movieList) {
      return (this.state.movieList.slice(0,12).reverse().map((item, i) => {
        return (
          <div className="movie-card" onClick={this.cardHandler} key={i}>
            <Link to={`/movie/${item.id}`}><img id={`${item.id}`} src={`${imgURL}${item.poster_path}`} /></Link>
          </div>
        )
      }))
    } else {
    }
  }

  render () {
    return (
      <div className="listings-page">
        <div className="top-text">
          <h4>Popular Movies</h4>
          <Link className="view-all" to="">view all popular movies<i className="fas fa-arrow-circle-right"></i></Link>
        </div>
        <div className="container">
          { this.showMovies() }
        </div>
      </div>
    )
  }
}
