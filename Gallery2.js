import React, { Component } from "react";
const { apiImageURL, apiURL, apiKey } = require('./../../../../../config.js')
import ReactDOM from "react-dom";
import axios from 'axios';

export default class Gallery extends Component {
  // same as initializing with a constructor, functionally equivalent, its less code
  state = {
      parsedList: [],
      currentMovie: [],
      currentIndex: 0,
      movieList: []
  }

  componentWillMount(){
    console.log('will mount')
  }

  componentDidMount(){
    console.log('did mount')
    let list = []
    axios.get('/api/movies').then(response => {
      const movieList = response.data.results.slice(0,5).reverse().map((item, i) => item)
      this.setState({
        movieList,
        currentMovie: movieList[this.state.currentIndex]
      })
    })
  }

  nextBtn = () => {
    if(this.state.currentIndex != (this.state.movieList.length - 1)) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      })
    } else if (this.state.currentIndex == (this.state.movieList.length - 1)){
      this.setState({
        currentIndex: 0
      })
    }
    console.log(this.state.currentIndex)
    console.log(this.state.movieList[this.state.currentIndex])
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
    } console.log(this.state.currentIndex)
  }

  largeImage = () => {
    let display = this.state.currentMovie
    let it = this.state.movieList[this.state.currentIndex]
    console.log('calling largeImage')
    console.log(it)
    console.log(display.title)

    return (
      <div className="image-1" style={{
        "backgroundImage": `url('${apiImageURL}${display.backdrop_path}')`
      }}>
      d
      </div>
    )
  }

  render () {
    return (
      <div className="gallery">
        <div className="slider">
          <div className="main-image">

            <div href="#" className="arrows left-arrow" onClick={this.prevBtn}>
                <i className="fas fa-chevron-left"></i>
            </div>

            <div href="#" className="arrows right-arrow" onClick={this.nextBtn}>
                <i className="fas fa-chevron-right"></i>
            </div>
            {this.largeImage()}
          </div>
        </div>
      </div>

    )
  }
}
