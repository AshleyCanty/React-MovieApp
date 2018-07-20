import React, { Component } from "react";
const { apiImageURL,apiGenreID, apiURL, apiKey } = require('./../../../../../../config.js')
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class Slider extends Component {

  // same as initializing with a constructor, functionally equivalent, its less code
  state = {
      currentIndex: 0,
      movieList: {},
      allGenres: {},
      currentGenres: [],
      wholePath: '',
      title: '',
      overview: '',
      releaseDate: ''
  }

  componentDidMount(){
    console.log(this.props)
    axios.get('/api/genres').then(response => {
      let allGenres = response.data
      this.setState({allGenres})
    })
    axios.get('/api/movies').then(response => {
      const movieList = response.data.results.slice(0,5).reverse().map((item, i) => item)
      this.setState({
        movieList,
        currentGenres: this.genreFilter(movieList[this.state.currentIndex]),
        title: movieList[this.state.currentIndex].title,
        overview: movieList[this.state.currentIndex].overview,
        releaseDate: movieList[this.state.currentIndex].release_date
      })
    })

  }

  componentDidUpdate(prevProps, prevState){
    // TRYING TO UPDATE VARIABLES WITH GENRE INFO
    const allGenres = this.state.allGenres
    const currentGenres = this.genreFilter(this.state.movieList[this.state.currentIndex])
    const currentMovie = this.state.movieList[this.state.currentIndex]
    const wholePath = this.state.wholePath
    const title = this.state.movieList[this.state.currentIndex].title
    const overview = this.state.movieList[this.state.currentIndex].overview
    const releaseDate = this.state.movieList[this.state.currentIndex].release_date
    if(wholePath === prevState.wholePath){
      let path = currentMovie.backdrop_path
      this.setState({
        currentGenres: currentGenres,
        wholePath: apiImageURL + path,
        title,
        overview,
        releaseDate
      })
    }
  }

  genreFilter = (obj) => {
    if (obj){
      let x = obj.genre_ids.map((item, i) => {
        return (this.state.allGenres.filter((g) => {
          return ( g.id === item)
        }))
      })
      return x
    } else {
      console.log('Loading movie details')
    }
  }

  genreDisplay = () => {
    return (this.state.currentGenres.map((item, i) => {
      return (<p className="genre" key={i}>{item[0].name}</p>)
    }))
  }

  nextBtn = () => {
    if(this.state.currentIndex != (this.state.movieList.length - 1)) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
      })
    } else if (this.state.currentIndex == (this.state.movieList.length - 1)){
      this.setState({
        currentIndex: 0
      })
    }
  }

  prevBtn = () => {
    if(this.state.currentIndex != 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      })
    } else if (this.state.currentIndex == 0){
      this.setState({
        currentIndex: this.state.movieList.length - 1
      })
    }
  }

  render () {
    return (
      <div className="slider">
        <div className="main-image">
          <div href="#" className="arrows left-arrow" onClick={this.prevBtn}>
              <i className="fas fa-chevron-left"></i>
          </div>
          <div href="#" className="arrows right-arrow" onClick={this.nextBtn}>
              <i className="fas fa-chevron-right"></i>
          </div>
          <div className="image-1" style={
            this.state.movieList ? { backgroundImage: `linear-gradient(to top, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%), url(${this.state.wholePath}) ` } : { backgroundImage: `url(https://image.tmdb.org/t/p/original/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg)` }
          }>
          </div>
          <div className="details">

            <h1 className="title">{this.state.title}</h1>
            <p className="overview">{this.state.overview}</p>
            <div className="genres">
              {this.genreDisplay()}
            </div>
            <a href="/movie/id" className="movieLink">View more details...</a>
          </div>
        </div>
      </div>
    )
  }
}
