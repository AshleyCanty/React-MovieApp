import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import LazyHero from 'react-lazy-hero';
import axios from 'axios'

const { apiImageURL,apiGenreID, apiURL, apiKey } = require('./../../../../config.js')


export default class Movie extends Component {
  constructor () {
    super()
    this.state = {
      idValue: '',
      idType: '',
      allGenres: [],
      credits: [],
      movie: [],
      movieBackdrop: ''
    }
  }

  componentWillMount(){

  }

  componentDidMount(){
    const { match, history } = this.props
    const id = match.params.credits
    axios.get('/api/genres').then(response => {
      let allGenres = response.data
      console.log(allGenres)

      this.setState({allGenres})
    })

    axios.get(`/api/credits/${id}`).then(response => {
      console.log(id);
      let credits = response.data
      console.log(credits)

      this.setState({credits})
    })

    axios.get(`/api/info/${id}`).then(response => {
      const movie = response.data
      const movieBackdrop = apiImageURL + movie.backdrop_path
      console.log(movieBackdrop)
      console.log(movie)

      this.setState({
        movie,
        movieBackdrop
      })
    })
  }

  render () {
    return (
      <div className="movie">
        <div className="container">
          <div className="top-image">
            <LazyHero
              className="image"
              imageSrc={this.state.movieBackdrop}
              isFixed={true}
              opacity={1}
            >
            </LazyHero>
          </div>
          <div className="filter-1"></div>
          <div className="filter-2"></div>
          <div className="wrapper">
            <div className="details">
              <div className="data-left">
                <div className="inner-wrapper">
                  <div className="title-area">
                    <h3>{this.state.movie.title}</h3>
                    <div className="number-rating">
                      <i className="fas fa-star"></i>
                      <p className="rating">8.7</p>
                    </div>
                  </div>
                  <div className="extra-data">
                    <div className="wrap">
                      <div className="genres">
                        <p>Action</p>
                        <p>Adventure</p>
                        <p>Comedy</p>
                      </div>
                      <div className="circle-split"></div>
                      <div className="time-rating">
                        <p className="runtime">2HR 15MIN</p>
                        <div className="circle-split"></div>
                        <p className="release-year">2018</p>
                        <div className="circle-split"></div>
                        <p className="movie-rating">PG-13</p>
                      </div>
                    </div>
                    <div className="options">
                      <div className="wrap">
                        <div className="watch-btn">Watch now</div>
                        <div className="trailer-btn">trailer</div>
                      </div>
                      <div className="like-btn">
                        <i className="far fa-heart"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overview">
                <h5>Synopsis</h5>
                  <div>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </p>
                  </div>
                </div>
              </div>
              <div className="data-right">
                <div className="box-1">
                  <h5>Directed by</h5>
                  <p>Ryan Coogler</p>
                </div>
                <div className="box-2">
                  <h5>Recommended by</h5>
                    <div className="wrap">
                      <div className="img-wrap">
                        <div className="img-1" style={{backgroundImage: 'url(https://www.chroniquedisney.fr/imgDossier/marvel/2017-visionnage-defenders-02.jpg)'}}></div>
                        <div className="img-2" style={{backgroundImage: 'url(https://thegrio.com/wp-content/uploads/2017/10/Andre-3000.jpg)'}}></div>
                      </div>
                      <div className="names">Roe and Motif</div>
                    </div>
                </div>
              </div>
              <div className="poster-img" style={{backgroundImage: `url(${apiImageURL}${this.state.movie.poster_path})`}}></div>
            </div>

            <div className="cast">
              <h5>Starring</h5>
              <div className="wrap">
                <i className="fas fa-angle-left"></i>
                <div className="cast-wrap">
                  <div className="cast-member">
                    <div className="cast-img"></div>
                    <h5 className="name">Mustafa Shakir</h5>
                    <h5 className="count">38 Movies</h5>
                  </div>
                  <div className="cast-member">
                    <div className="cast-img"></div>
                    <h5 className="name">Mustafa Shakir</h5>
                    <h5 className="count">38 Movies</h5>
                  </div>
                  <div className="cast-member">
                    <div className="cast-img"></div>
                    <h5 className="name">Mustafa Shakir</h5>
                    <h5 className="count">38 Movies</h5>
                  </div>
                  <div className="cast-member">
                    <div className="cast-img"></div>
                    <h5 className="name">Mustafa Shakir</h5>
                    <h5 className="count">38 Movies</h5>
                  </div>
                  <div className="cast-member">
                    <div className="cast-img"></div>
                    <h5 className="name">Mustafa Shakir</h5>
                    <h5 className="count">38 Movies</h5>
                  </div>
                  <div className="cast-member">
                    <div className="cast-img"></div>
                    <h5 className="name">Mustafa Shakir</h5>
                    <h5 className="count">38 Movies</h5>
                  </div>
                </div>
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
            <div className="related-movies">
            <h5>Related</h5>
              <div className="wrap">
                <i className="fas fa-angle-left"></i>
                <div className="movie-wrap">
                  <div className="movie-card">
                  </div>
                  <div className="movie-card"></div>
                  <div className="movie-card"></div>
                  <div className="movie-card"></div>
                  <div className="movie-card"></div>
                  <div className="movie-card"></div>
                </div>
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
