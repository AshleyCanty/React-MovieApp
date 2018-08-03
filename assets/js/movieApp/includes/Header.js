import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { NavLink, Link } from 'react-router-dom'
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

  componentDidMount(){
    const header = document.getElementById('header')
    const logo = document.getElementById('logo')

    window.addEventListener('scroll', () => {
          (window.scrollY >  0) ? header.classList.add('scrolled') : header.classList.remove('scrolled')
    })
  }


    render () {
      return (
        <div id="header" className="container header-wrap">
          <header>

            <div className={'leftMenu'}>

              <Link to="/" className={'logo'}>
              <div className="cover"></div>
                <img src="./img/icon.png" />
                <p className={'title'}>The <span>Reel</span></p>
              </Link>
              <ul>
                <li>
                  <NavLink to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                  <Link to="">
                    <div className={'browse-dropdown'} onMouseOver={this.displayDropdown}>Browse
                      <i id="angle-down" className={'fas fa-angle-down'}></i>
                    </div>
                  </Link>
                  <div id="browser-box">
                    <ul>
                      <li><Link to="/">action</Link></li>
                      <li><Link to="/">adventure</Link></li>
                      <li><Link to="/">horror</Link></li>
                      <li><Link to="/">comedy</Link></li>
                      <li><Link to="/">fantasy</Link></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className={'rightMenu'}>
              <div className={'form'}>
                <input type="text" className={'search'} placeholder="Search..."/>
                <button type="submit" className={'btn'}>
                  <i className="fa fa-search"></i>
                </button>
              </div>
              <div className="user-wrapper">
              <div className="border"></div>
                <div className="notification">
                  <div className="counter">
                    <p className="number">2</p>
                  </div>
                  <i className="fas fa-bell"></i>
                </div>
                <div className="user-dropdown">
                  <div className={'user-img'}>
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </div>
                  <div className="user-box">
                    <ul id="user-list">
                      <li><Link to="/">Profile</Link></li>
                      <li><Link to="/">Settings</Link></li>
                      <li><Link to="/">Support</Link></li>
                      <li><Link to="/">Log out</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      )
    }
  }
