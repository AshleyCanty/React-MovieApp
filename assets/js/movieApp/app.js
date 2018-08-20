import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import axios from 'axios'
import Header from './includes/Header.js'
import Footer from './includes/Footer.js'
import Sidebar from './includes/Sidebar.js'
import Home from './pages/Home.js'
import Listings from './pages/Listings.js'
import Movie from './pages/Movie.js'
import Slider from './pages/components/Slider/Slider.js'
export default class App extends Component {
  state = {
      name: 'Ashley'
  }

  render () {
    return (
      <Router>
        <div>
          <Route path="/" component={Header} />
          <Route path="/" component={Sidebar} />
          <Route exact path="/" component={Listings}/>
          <Route exact path="/movie/:credits" component={Movie}/>
          <Route path="/" component={Footer} />
        </div>
      </Router>
    )
  }
}
