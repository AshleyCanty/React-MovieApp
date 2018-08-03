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
          <div className="footer">
          <div className="contact">
            <h4>Have questions?</h4>
            <div className="phone">
              <i className="fas fa-phone"></i>
              <p className="number">+555-647-5555</p>
            </div>
            <p>support@gmail.com</p>
          </div>
            <div className="address">
              <i className="fas fa-map-marker-alt"></i>
              <p>18th Banana street | suite 400 <span>Narnia, Mo 83028</span></p>
            </div>
            <div className="social-row">
              <div className="icon-wrap">
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook-square"></i></a>
                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="copyright">
              <p className="icon">&#9400;</p>
              <p className="text">2018 the reel. <span>all rights reserved.</span></p>
            </div>
          </div>
        </div>
      )
    }
  }
