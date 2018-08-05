import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import LazyHero from 'react-lazy-hero';
import axios from 'axios'

const { apiImageURL, apiGenreID, apiURL, apiKey } = require('./../../../../config.js')

export default class Movie extends Component {
  constructor () {
    super()
    this.state = {
      idValue: '',
      idType: '',
      allGenres: [],
      credits: [],
      movie: [],
      movieBackdrop: '',
      actors: [],
      actorsImageList: [],
      similarMovies: [],
      newRoute: '',
      n: 0
    }
  }

  init = () => {
    const { match, history } = this.props
    const id = match.params.credits
    console.log(this.props.location.pathname)
    console.log(id)
    let length = 0
    let otherMovies = ''

    axios.get('/api/genres').then(response => {
      let allGenres = response.data
      this.setState({allGenres})
    })

    axios.get('/api/movies').then(response => {
      const movieList = response.data.results.slice(0,5).reverse().map((item, i) => item)
      this.setState({
        currentGenres: this.genreFilter(this.state.movie)
      },()=>{
        length = this.state.currentGenres.length-1
      })
      otherMovies = this.similarGenre()[length]
      if(otherMovies != null && otherMovies !== undefined && otherMovies != ''){
        axios.get(`/api/movieGenre/${otherMovies}`).then(response => {
          this.setState({similarMovies: response.data.results})
        })
      }
    })


    axios.get(`/api/credits/${id}`).then(response => {
      let credits = response.data
      let actors = []

      this.setState({credits})
      if(response.data.cast != null && response.data.cast !=  undefined){
        actors = response.data.cast.slice(0,5)
        if (actors != null && actors != undefined){
          this.setState({actors})
          this.getCastInfo()
        }
      }
    })

    axios.get(`/api/info/${id}`).then(response => {
      const movie = response.data
      const movieBackdrop = apiImageURL + movie.backdrop_path
      // console.log(movie)
      this.setState({
        movie,
        movieBackdrop
      })
    })
  }

  componentWillMount(){

  }

  componentDidMount(){
    this.init()
    console.log('called init')
  }

  genreFilter = (obj) => {
    if (obj != null && obj != undefined){
      let x = obj.genres.map((item, i) => {
        return (this.state.allGenres.filter((g) => {
          return ( g.id === item.id)
        }))
      })
      return x
    } else {
      console.log('Loading movie details')
    }
  }

  leftArrow = () => {
    if((this.state.n > 0) && (this.state.n <= this.state.similarMovies.length-1)){
      this.setState({n: (this.state.n - 1)})
    }
  }

  rightArrow = () => {
    if((this.state.n + 6) == (this.state.similarMovies.length-1)){
      this.setState({n: (this.state.n)})
    } else if((this.state.n >= 0) && (this.state.n != this.state.similarMovies.length-1)){
      this.setState({n: (this.state.n + 1)})
    }
  }

  similarGenreDisplay = (n) => {
    return(
      this.state.similarMovies.slice(n,n+6).map((item, i) => {
        return (
          <div className="movie-card" key={i} style={{backgroundImage: `url(${apiImageURL}${item.poster_path})`}}>
            <Link to={`/movie/${item.id}`} onClick={this.init}></Link>
            <div className="number-rating">
              <i className="fas fa-star"></i>
              <p className="rating">{item.vote_average}</p>
            </div>
          </div>
        )
      })
    )
  }

  similarGenre = () => {
    if(this.state.currentGenres){
      var string = ''
      var c = 0
      return (
        this.state.currentGenres.map((i) => {
        if(c == (this.state.currentGenres.length - 1)){
          string += (i[0].id)
        }
        else {
          string += (i[0].id + '|')
        }
        c++
        return (string)
      }))
    }
  }

  genreDisplay = () => {
    if(this.state.currentGenres){
      return (this.state.currentGenres.map((item, i) => {
        return (<p className="genre" key={i}>{item[0].name}</p>)
      }))
    }
  }

  getCastInfo = () => {
    var actorsList = this.state.actors
    let mainObject = {}
    let  promises = []
    let actorsImageList = []

    if(actorsList != null && actorsList != undefined){
      // console.log('called getcastinfo')
      actorsList.map((item,i)=>{
        promises.push(axios.get(`/api/actor/${item.id}`))
      })
      // axios.all(promises)
      //   .then(axios.spread((...args) => {
      //     for (let i = 0; i < args.length; i++) {
      //       console.log(args[i].data)
      //     }
      //   })
      // )

      //easier, direct approach
      axios.all(promises)
        .then((res) => {
          for (let i = 0; i < res.length; i++) {
            actorsImageList.push(res[i].data)
          }
          if(actorsImageList.length > 0){
            this.setState({actorsImageList})

            this.state.actorsImageList.map((item,i)=>{
            })
          }
        }
      )
  } else {
    console.log('Nothing here')
  }
}

castDisplay = () => {
  let character = ''
  let name = ''
  let path = ''

  return (
    this.state.actorsImageList.map((item, i) => {
      character = this.state.actors[i].character
      name = this.state.actors[i].name
      path = item.profiles[0].file_path
// <div className="cast-img" style={{backgroundImage: `url(${apiImageURL}${path})`}}></div>
      return (
        <div className="cast-member" key={i}>
          <div className="img-wrap">
          <div className="filter"></div>
          <img className="cast-img" src={apiImageURL+path}/>
          </div>

          <div className="name-wrap">
            <h5 className="name">{name}</h5>
            <h5 className="character">{character}</h5>
          </div>
        </div>
      )
    })
  )
}



  render () {
    return (
      <div className="movie">
        <div className="container" style={{backgroundImage: `linear-gradient(rgba(27,15,45,.85) 100%, rgba(27,15,45,.85) 100%), url(${this.state.movieBackdrop})`}}>
          <div className="filter-1"></div>
          <div className="filter-2"></div>
          <div className="wrapper" >
            <div className="details">
              <div className="data-left">
                <div className="inner-wrapper">
                  <div className="title-area">
                    <h3>{this.state.movie.title}</h3>
                    <div className="number-rating">
                      <i className="fas fa-star"></i>
                      <p className="rating">{this.state.movie.vote_average}</p>
                    </div>
                  </div>
                  <div className="extra-data">
                    <div className="wrap">
                      <div className="genres">
                        {this.genreDisplay()}
                      </div>
                      <div className="circle-split"></div>
                      <div className="time-rating">
                        <p className="runtime">{this.state.movie.runtime}MIN</p>
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
                  <h4 className="overview-title">Synopsis</h4>
                  <div>
                    <p>{this.state.movie.overview}</p>
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
              <div className="inner-wrap">
                <div className="cast">
                  <h5>Starring</h5>
                  <div className="wrap">
                    <div className="cast-wrap">
                      {this.castDisplay()}
                    </div>
                  </div>
                </div>
              </div>
              <div className="related-movies">
                <h5>Related movies</h5>
                <div className="wrap">
                  <i className="fas fa-angle-left" onClick={this.leftArrow}></i>
                  <div className="movie-wrap">
                    {this.similarGenreDisplay(this.state.n)}
                  </div>
                  <i className="fas fa-angle-right" onClick={this.rightArrow}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
