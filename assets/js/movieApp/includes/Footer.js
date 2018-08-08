import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      SearchQuery: '',
      MovieData: [],
      MovieDropdown: '',
      userData: ''
    }
  }

    render () {
      return (
        <div className="container footer-wrap">
          <div className="info">
            <div className="contact">
              <Link to="/">About</Link>
              <Link to="/">Jobs</Link>
              <Link to="/">Help</Link>
            </div>
            <div className="desc">
              <Link to="/">About ads</Link>
              <Link to="/">terms of use</Link>
              <Link to="/">privacy policy</Link>
            </div>
          </div>
          <div className="copyright">
            <p className="icon">&#9400;</p>
            <p className="brand">2018 the reel</p>
          </div>
        </div>
      )
    }
  }
