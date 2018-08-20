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
          <div className="copyright">
            <p className="icon">&#9400;</p>
            <p className="brand">2018 the reel</p>
          </div>
        </div>
      )
    }
  }
