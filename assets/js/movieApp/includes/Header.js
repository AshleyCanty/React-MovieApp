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
// <button type="submit" className={'btn'}>
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
                <p className={'title'}>The Reel</p>
              </Link>
              <ul>
                <li>
                  <NavLink to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                  <Link to="">
                    <div className={'browse-dropdown'} onMouseOver={this.displayDropdown}>Browse
                      <i id="angle-down" className={'fas fa-caret-down'}></i>
                    </div>
                  </Link>
                  <div className="dropbox-1">
                  <i className="fas fa-caret-up"></i>
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
                <input type="text" className={'search'} placeholder="movies, titles, people..."/>
              </div>
              <div className="user-wrapper">
              <div className="border"></div>
                <div className="notification">
                  <div className="bell-wrapper">
                    <div className="counter">
                      <p className="number">2</p>
                    </div>
                    <i className="fas fa-bell"></i>
                  </div>
                  <div className="dropbox-2">
                  <i className="fas fa-caret-up"></i>
                    <ul id="list">
                      <li>
                        <div className="mail">
                          <img src="https://pbs.twimg.com/profile_images/625040399535636480/isqG9o0c_400x400.jpg"/>
                          <Link to="/"><span>Hassan Wohmit</span> found your review helpful on <span className="movie-title">James and the Giant Peach</span>.</Link>
                        </div>
                      </li>
                      <li>
                        <div className="mail">
                          <img src="https://www.theaudiodb.com/images/media/artist/thumb/uvqtus1372530587.jpg"/>
                          <Link to="/"><span>Sheva Bower</span> sent you a movie request.</Link>
                        </div>
                      </li>
                    </ul>
                    <div className="extra-links">
                      <Link to="/">View all</Link>
                    </div>
                  </div>
                </div>
                <div className="user-dropdown">
                  <div className={'user-img'}>
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </div>
                  <div className="dropbox-3">
                  <i className="fas fa-caret-up"></i>
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
