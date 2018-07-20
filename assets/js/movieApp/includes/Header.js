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
        <div className="container header-wrap">
          <header>

            <div className={'leftMenu'}>

              <Link to="/" className={'logo'}>
                <p className={'title'}>The <span>Reel</span></p>
              </Link>
              <div className={'browse-dropdown'}>Browse
                <i className={'fas fa-angle-down'}></i>
              </div>
            </div>
            <div className={'rightMenu'}>
            <div className="social-row">
              <div className="icon-wrap">
                <p>Follow us!</p>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook-square"></i></a>
                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
              <div className={'form'}>
                <input type="text" className={'search'} placeholder="Search..."/>
                <button type="submit" className={'btn'}>
                  <i className="fa fa-search"></i>
                </button>
              </div>
              <div className="user-wrapper">
                <div className={'user-img'}>
                  <i className="fa fa-user" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </header>
        </div>
      )
    }
  }
