import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios'
export default class Header extends Component {
  constructor () {
    super()
    this.state = {

    }
  }
// <button type="submit" className={'btn'}>
  componentDidMount(){

  }

  clicked = () => {
    let sidebar = document.getElementById('sidebar')
    if(sidebar.classList.contains('slide')){
      sidebar.classList.remove('slide')
    } else {
      sidebar.classList.add('slide')
    }
  }

    render () {
      return (
        /* Start of side menu*/
        <div id="sidebar" className="container sidebar">
          <div className="sidebar-btn" onClick={this.clicked}>
            <i className="fas fa-chevron-right"></i>
          </div>
          <div id="wrapper" className="wrap">
            <Link to="/" className={'logo'}>
              <p className={'title'}>The Reel</p>
            </Link>
            <div className="top-menu">
              <h5>browse telly</h5>
              <ul>
                <li>discover</li>
                <li>tv & movies</li>
                <li>popular clips</li>
                <li>watch later</li>
              </ul>
            </div>
            <div className="bottom-menu">
              <h5>CATEGORIES</h5>
              <ul>
                <li>Kuwait TV</li>
                <li>Free shows</li>
                <li>Arabic</li>
                <li>Action</li>
                <li>Comedy</li>
                <li>Drama</li>
                <li>Horror</li>
                <li>Kids</li>
                <li>Musical</li>
                <li>TV Shows</li>
                <li>Thriller</li>
              </ul>
            </div>
          </div>
        </div>
        /* End of side menu*/
      )
    }
  }
