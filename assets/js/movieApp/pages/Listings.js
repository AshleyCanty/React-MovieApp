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

  openPlaylist = (itemID) => {
    let box = document.getElementsByClassName('playlist ' + itemID);
    // box[0].style.backgroundColor = "blue"
    box[0].classList.add('showList')
    if(box[0].classList.contains("hideList")){
      box[0].classList.remove('hideList')
      box[0].classList.add('showList')
    }
  }
  closePlaylist = (itemID) => {
    let box = document.getElementsByClassName('playlist ' + itemID);
    // box.style.visibility = "hidden"
    if(box[0].classList.contains("showList")){
      box[0].classList.remove('showList')
      box[0].classList.add('hideList')
    }
  }

  showMovies = () => {
    const imgURL = 'http://image.tmdb.org/t/p/original'
    if (this.state.movieList) {
      return (this.state.movieList.slice(0,14).reverse().map((item, i) => {
        console.log(item)
        if(item.original_language == 'en'){
          return (
            <div className="movie-card" onClick={this.cardHandler} key={i}>
              <Link to={`/movie/${item.id}`}><img id={`${item.id}`} src={`${imgURL}${item.poster_path}`} /></Link>
              <div className="small-details">
                <div className="text">
                  <p id="rating">{item.vote_average}</p>
                  <p id="title">{item.original_title}</p>
                </div>
                <div className="save">
                  <div className="wrap a">
                    <i className="fas fa-plus" onClick={this.openPlaylist.bind(null, item.id)}></i>
                  </div>
                  <div className={'playlist ' + item.id} id={item.id}>
                    <div className="close-btn" onClick={this.closePlaylist.bind(null,item.id)}>
                      <i className="fas fa-times-circle"></i>
                    </div>
                    <div className="button">
                      <div className="wrap b">
                        <i className="fas fa-plus"></i>
                        <i className="fas fa-list-ul"></i>
                      </div>
                      <div className="create-btn">create new playlist</div>
                    </div>
                    <div className="lists">
                      <ul>
                        <li>watch later</li>
                        <li>horror classics</li>
                        <li>kids</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
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
