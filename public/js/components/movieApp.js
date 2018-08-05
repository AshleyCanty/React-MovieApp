webpackJsonp([0],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(26);

var _axios = __webpack_require__(20);

var _axios2 = _interopRequireDefault(_axios);

var _Header = __webpack_require__(154);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(153);

var _Footer2 = _interopRequireDefault(_Footer);

var _Home = __webpack_require__(156);

var _Home2 = _interopRequireDefault(_Home);

var _Listings = __webpack_require__(157);

var _Listings2 = _interopRequireDefault(_Listings);

var _Movie = __webpack_require__(158);

var _Movie2 = _interopRequireDefault(_Movie);

var _Slider = __webpack_require__(78);

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: 'Ashley'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _Header2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Listings2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/movie/:credits', component: _Movie2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _Footer2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(26);

var _axios = __webpack_require__(20);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      SearchQuery: '',
      MovieData: [],
      MovieDropdown: '',
      userData: ''
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container footer-wrap' },
        _react2.default.createElement(
          'div',
          { className: 'footer' },
          _react2.default.createElement(
            'div',
            { className: 'contact' },
            _react2.default.createElement(
              'h4',
              null,
              'Have questions?'
            ),
            _react2.default.createElement(
              'div',
              { className: 'phone' },
              _react2.default.createElement('i', { className: 'fas fa-phone' }),
              _react2.default.createElement(
                'p',
                { className: 'number' },
                '+555-647-5555'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'support@gmail.com'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'address' },
            _react2.default.createElement('i', { className: 'fas fa-map-marker-alt' }),
            _react2.default.createElement(
              'p',
              null,
              '18th Banana street | suite 400 ',
              _react2.default.createElement(
                'span',
                null,
                'Narnia, Mo 83028'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'social-row' },
            _react2.default.createElement(
              'div',
              { className: 'icon-wrap' },
              _react2.default.createElement(
                'a',
                { href: '#' },
                _react2.default.createElement('i', { className: 'fab fa-twitter' })
              ),
              _react2.default.createElement(
                'a',
                { href: '#' },
                _react2.default.createElement('i', { className: 'fab fa-facebook-square' })
              ),
              _react2.default.createElement(
                'a',
                { href: '#' },
                _react2.default.createElement('i', { className: 'fab fa-pinterest-p' })
              ),
              _react2.default.createElement(
                'a',
                { href: '#' },
                _react2.default.createElement('i', { className: 'fab fa-instagram' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'copyright' },
            _react2.default.createElement(
              'p',
              { className: 'icon' },
              '\u24B8'
            ),
            _react2.default.createElement(
              'p',
              { className: 'text' },
              '2018 the reel. ',
              _react2.default.createElement(
                'span',
                null,
                'all rights reserved.'
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(26);

var _axios = __webpack_require__(20);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      SearchQuery: '',
      MovieData: [],
      MovieDropdown: '',
      userData: ''
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var header = document.getElementById('header');
      var logo = document.getElementById('logo');

      window.addEventListener('scroll', function () {
        window.scrollY > 0 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'header', className: 'container header-wrap' },
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'div',
            { className: 'leftMenu' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/', className: 'logo' },
              _react2.default.createElement('div', { className: 'cover' }),
              _react2.default.createElement('img', { src: './img/icon.png' }),
              _react2.default.createElement(
                'p',
                { className: 'title' },
                'The ',
                _react2.default.createElement(
                  'span',
                  null,
                  'Reel'
                )
              )
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouterDom.NavLink,
                  { to: '/', activeClassName: 'active' },
                  'Home'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '' },
                  _react2.default.createElement(
                    'div',
                    { className: 'browse-dropdown', onMouseOver: this.displayDropdown },
                    'Browse',
                    _react2.default.createElement('i', { id: 'angle-down', className: 'fas fa-angle-down' })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { id: 'browser-box' },
                  _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/' },
                        'action'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/' },
                        'adventure'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/' },
                        'horror'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/' },
                        'comedy'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/' },
                        'fantasy'
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'rightMenu' },
            _react2.default.createElement(
              'div',
              { className: 'form' },
              _react2.default.createElement('input', { type: 'text', className: 'search', placeholder: 'Search...' }),
              _react2.default.createElement(
                'button',
                { type: 'submit', className: 'btn' },
                _react2.default.createElement('i', { className: 'fa fa-search' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user-wrapper' },
              _react2.default.createElement('div', { className: 'border' }),
              _react2.default.createElement(
                'div',
                { className: 'notification' },
                _react2.default.createElement(
                  'div',
                  { className: 'counter' },
                  _react2.default.createElement(
                    'p',
                    { className: 'number' },
                    '2'
                  )
                ),
                _react2.default.createElement('i', { className: 'fas fa-bell' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'user-dropdown' },
                _react2.default.createElement(
                  'div',
                  { className: 'user-img' },
                  _react2.default.createElement('i', { className: 'fa fa-user', 'aria-hidden': 'true' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'user-box' },
                  _react2.default.createElement(
                    'ul',
                    { id: 'user-list' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/' },
                        'Profile'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/' },
                        'Settings'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/' },
                        'Support'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/' },
                        'Log out'
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(134);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(20);

var _axios2 = _interopRequireDefault(_axios);

var _Slider = __webpack_require__(78);

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      movieList: []
    }, _this.showMovies = function () {
      var imgURL = 'http://image.tmdb.org/t/p/original';
      if (_this.state.movieList) {
        return _this.state.movieList.reverse().map(function (item, i) {
          return _react2.default.createElement(
            'div',
            { className: 'movie-card', key: i },
            _react2.default.createElement('img', { src: '' + imgURL + item.poster_path }),
            _react2.default.createElement(
              'p',
              { className: 'title', key: i },
              item.title
            )
          );
        });
      } else {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      _axios2.default.get('/api/movies').then(function (response) {
        _this2.setState({
          movieList: response.data.results
        }, function () {});
      });
      _axios2.default.get('/api/hello').then(function (response) {});
      _axios2.default.get('https://api.themoviedb.org/3/movie/25?api_key=f20135b292080c1a6bdcdd3cf8616d48').then(function (response) {
        var movie = response.data;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home-page' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(_Slider2.default, null)
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(26);

var _axios = __webpack_require__(20);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.cardHandler = function (e) {
      console.log(e.target.id);
    };

    _this.showMovies = function () {
      var imgURL = 'http://image.tmdb.org/t/p/original';
      if (_this.state.movieList) {
        return _this.state.movieList.slice(0, 12).reverse().map(function (item, i) {
          return _react2.default.createElement(
            'div',
            { className: 'movie-card', onClick: _this.cardHandler, key: i },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/movie/' + item.id },
              _react2.default.createElement('img', { id: '' + item.id, src: '' + imgURL + item.poster_path })
            )
          );
        });
      } else {}
    };

    _this.cardHandler = _this.cardHandler.bind(_this);
    _this.state = {
      movieList: []
    };
    return _this;
  }

  _createClass(Listings, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      _axios2.default.get('/api/movies').then(function (response) {
        _this2.setState({
          movieList: response.data.results
        }, function () {});
      });

      _axios2.default.get('https://api.themoviedb.org/3/movie/25?api_key=f20135b292080c1a6bdcdd3cf8616d48').then(function (response) {
        var movie = response.data;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'listings-page' },
        _react2.default.createElement(
          'div',
          { className: 'top-text' },
          _react2.default.createElement(
            'h4',
            null,
            'Popular Movies'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'view-all', to: '' },
            'view all popular movies',
            _react2.default.createElement('i', { className: 'fas fa-arrow-circle-right' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          this.showMovies()
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(289);

var _reactRouterDom = __webpack_require__(26);

var _reactLazyHero = __webpack_require__(267);

var _reactLazyHero2 = _interopRequireDefault(_reactLazyHero);

var _axios = __webpack_require__(20);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(79),
    apiImageURL = _require.apiImageURL,
    apiGenreID = _require.apiGenreID,
    apiURL = _require.apiURL,
    apiKey = _require.apiKey;

var Movie = function (_Component) {
  _inherits(Movie, _Component);

  function Movie() {
    _classCallCheck(this, Movie);

    var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

    _this.init = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          history = _this$props.history;

      var id = match.params.credits;
      // console.log(this.props.location.pathname)
      // console.log(id)
      var length = 0;
      var otherMovies = '';

      _axios2.default.get('/api/genres').then(function (response) {
        var allGenres = response.data;
        _this.setState({ allGenres: allGenres });
      });

      _axios2.default.get('/api/movies').then(function (response) {
        var movieList = response.data.results.slice(0, 5).reverse().map(function (item, i) {
          return item;
        });
        _this.setState({
          currentGenres: _this.genreFilter(_this.state.movie)
        }, function () {
          length = _this.state.currentGenres.length - 1;
        });
        otherMovies = _this.similarGenre()[length];
        if (otherMovies != null && otherMovies !== undefined && otherMovies != '') {
          _axios2.default.get('/api/movieGenre/' + otherMovies).then(function (response) {
            _this.setState({ similarMovies: response.data.results });
          });
        }
      });

      _axios2.default.get('/api/credits/' + id).then(function (response) {
        var credits = response.data;
        var actors = [];

        _this.setState({ credits: credits });
        if (response.data.cast != null && response.data.cast != undefined) {
          actors = response.data.cast.slice(0, 5);
          if (actors != null && actors != undefined) {
            _this.setState({ actors: actors });
            _this.getCastInfo();
          }
        }
      });

      _axios2.default.get('/api/info/' + id).then(function (response) {
        var movie = response.data;
        var movieBackdrop = apiImageURL + movie.backdrop_path;
        // console.log(movie)
        _this.setState({
          movie: movie,
          movieBackdrop: movieBackdrop
        });
      });
    };

    _this.genreFilter = function (obj) {
      if (obj != null && obj != undefined) {
        var x = obj.genres.map(function (item, i) {
          return _this.state.allGenres.filter(function (g) {
            return g.id === item.id;
          });
        });
        return x;
      } else {
        console.log('Loading movie details');
      }
    };

    _this.leftArrow = function () {
      if (_this.state.n > 0 && _this.state.n <= _this.state.similarMovies.length - 1) {
        _this.setState({ n: _this.state.n - 1 });
      }
    };

    _this.rightArrow = function () {
      if (_this.state.n + 6 == _this.state.similarMovies.length - 1) {
        _this.setState({ n: _this.state.n });
      } else if (_this.state.n >= 0 && _this.state.n != _this.state.similarMovies.length - 1) {
        _this.setState({ n: _this.state.n + 1 });
      }
    };

    _this.changeData = function (id) {
      _this.setState({ idTracker: id });
      console.log(_this.state.idTracker);
    };

    _this.similarGenreDisplay = function (n) {
      return _this.state.similarMovies.slice(n, n + 6).map(function (item, i) {
        return _react2.default.createElement(
          'div',
          { className: 'movie-card', key: i, style: { backgroundImage: 'url(' + apiImageURL + item.poster_path + ')' } },
          _react2.default.createElement(_reactRouterDom.Link, { to: '/movie/' + item.id, onClick: _this.changeData(item.id) }),
          _react2.default.createElement(
            'div',
            { className: 'number-rating' },
            _react2.default.createElement('i', { className: 'fas fa-star' }),
            _react2.default.createElement(
              'p',
              { className: 'rating' },
              item.vote_average
            )
          )
        );
      });
    };

    _this.similarGenre = function () {
      if (_this.state.currentGenres) {
        var string = '';
        var c = 0;
        return _this.state.currentGenres.map(function (i) {
          if (c == _this.state.currentGenres.length - 1) {
            string += i[0].id;
          } else {
            string += i[0].id + '|';
          }
          c++;
          return string;
        });
      }
    };

    _this.genreDisplay = function () {
      if (_this.state.currentGenres) {
        return _this.state.currentGenres.map(function (item, i) {
          return _react2.default.createElement(
            'p',
            { className: 'genre', key: i },
            item[0].name
          );
        });
      }
    };

    _this.getCastInfo = function () {
      var actorsList = _this.state.actors;
      var mainObject = {};
      var promises = [];
      var actorsImageList = [];

      if (actorsList != null && actorsList != undefined) {
        // console.log('called getcastinfo')
        actorsList.map(function (item, i) {
          promises.push(_axios2.default.get('/api/actor/' + item.id));
        });
        // axios.all(promises)
        //   .then(axios.spread((...args) => {
        //     for (let i = 0; i < args.length; i++) {
        //       console.log(args[i].data)
        //     }
        //   })
        // )

        //easier, direct approach
        _axios2.default.all(promises).then(function (res) {
          for (var i = 0; i < res.length; i++) {
            actorsImageList.push(res[i].data);
          }
          if (actorsImageList.length > 0) {
            _this.setState({ actorsImageList: actorsImageList });

            _this.state.actorsImageList.map(function (item, i) {});
          }
        });
      } else {
        console.log('Nothing here');
      }
    };

    _this.castDisplay = function () {
      var character = '';
      var name = '';
      var path = '';

      return _this.state.actorsImageList.map(function (item, i) {
        character = _this.state.actors[i].character;
        name = _this.state.actors[i].name;
        path = item.profiles[0].file_path;
        // <div className="cast-img" style={{backgroundImage: `url(${apiImageURL}${path})`}}></div>
        return _react2.default.createElement(
          'div',
          { className: 'cast-member', key: i },
          _react2.default.createElement(
            'div',
            { className: 'img-wrap' },
            _react2.default.createElement('div', { className: 'filter' }),
            _react2.default.createElement('img', { className: 'cast-img', src: apiImageURL + path })
          ),
          _react2.default.createElement(
            'div',
            { className: 'name-wrap' },
            _react2.default.createElement(
              'h5',
              { className: 'name' },
              name
            ),
            _react2.default.createElement(
              'h5',
              { className: 'character' },
              character
            )
          )
        );
      });
    };

    _this.state = {
      idValue: '',
      idType: '',
      allGenres: [],
      credits: [],
      movie: [],
      movieBackdrop: '',
      actors: [],
      actorsImageList: [],
      similarMovies: [],
      newRoute: '',
      idTracker: 0
    };
    return _this;
  }

  _createClass(Movie, [{
    key: 'componenShouldUpdate',
    value: function componenShouldUpdate(nextProps) {
      console.log('calling function');
      console.log(nextProps);
      console.log(this.props);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'movie' },
        _react2.default.createElement(
          'div',
          { className: 'container', style: { backgroundImage: 'linear-gradient(rgba(27,15,45,.85) 100%, rgba(27,15,45,.85) 100%), url(' + this.state.movieBackdrop + ')' } },
          _react2.default.createElement('div', { className: 'filter-1' }),
          _react2.default.createElement('div', { className: 'filter-2' }),
          _react2.default.createElement(
            'div',
            { className: 'wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'details' },
              _react2.default.createElement(
                'div',
                { className: 'data-left' },
                _react2.default.createElement(
                  'div',
                  { className: 'inner-wrapper' },
                  _react2.default.createElement(
                    'div',
                    { className: 'title-area' },
                    _react2.default.createElement(
                      'h3',
                      null,
                      this.state.movie.title
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'number-rating' },
                      _react2.default.createElement('i', { className: 'fas fa-star' }),
                      _react2.default.createElement(
                        'p',
                        { className: 'rating' },
                        this.state.movie.vote_average
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'extra-data' },
                    _react2.default.createElement(
                      'div',
                      { className: 'wrap' },
                      _react2.default.createElement(
                        'div',
                        { className: 'genres' },
                        this.genreDisplay()
                      ),
                      _react2.default.createElement('div', { className: 'circle-split' }),
                      _react2.default.createElement(
                        'div',
                        { className: 'time-rating' },
                        _react2.default.createElement(
                          'p',
                          { className: 'runtime' },
                          this.state.movie.runtime,
                          'MIN'
                        ),
                        _react2.default.createElement('div', { className: 'circle-split' }),
                        _react2.default.createElement(
                          'p',
                          { className: 'release-year' },
                          '2018'
                        ),
                        _react2.default.createElement('div', { className: 'circle-split' }),
                        _react2.default.createElement(
                          'p',
                          { className: 'movie-rating' },
                          'PG-13'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'options' },
                      _react2.default.createElement(
                        'div',
                        { className: 'wrap' },
                        _react2.default.createElement(
                          'div',
                          { className: 'watch-btn' },
                          'Watch now'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'trailer-btn' },
                          'trailer'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'like-btn' },
                        _react2.default.createElement('i', { className: 'far fa-heart' })
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'overview' },
                  _react2.default.createElement(
                    'h4',
                    { className: 'overview-title' },
                    'Synopsis'
                  ),
                  _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                      'p',
                      null,
                      this.state.movie.overview
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'data-right' },
                _react2.default.createElement(
                  'div',
                  { className: 'box-1' },
                  _react2.default.createElement(
                    'h5',
                    null,
                    'Directed by'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'Ryan Coogler'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'box-2' },
                  _react2.default.createElement(
                    'h5',
                    null,
                    'Recommended by'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'wrap' },
                    _react2.default.createElement(
                      'div',
                      { className: 'img-wrap' },
                      _react2.default.createElement('div', { className: 'img-1', style: { backgroundImage: 'url(https://www.chroniquedisney.fr/imgDossier/marvel/2017-visionnage-defenders-02.jpg)' } }),
                      _react2.default.createElement('div', { className: 'img-2', style: { backgroundImage: 'url(https://thegrio.com/wp-content/uploads/2017/10/Andre-3000.jpg)' } })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'names' },
                      'Roe and Motif'
                    )
                  )
                )
              ),
              _react2.default.createElement('div', { className: 'poster-img', style: { backgroundImage: 'url(' + apiImageURL + this.state.movie.poster_path + ')' } }),
              _react2.default.createElement(
                'div',
                { className: 'inner-wrap' },
                _react2.default.createElement(
                  'div',
                  { className: 'cast' },
                  _react2.default.createElement(
                    'h5',
                    null,
                    'Starring'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'wrap' },
                    _react2.default.createElement(
                      'div',
                      { className: 'cast-wrap' },
                      this.castDisplay()
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'related-movies' },
                _react2.default.createElement(
                  'h5',
                  null,
                  'Related movies'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'wrap' },
                  _react2.default.createElement('i', { className: 'fas fa-angle-left', onClick: this.leftArrow }),
                  _react2.default.createElement(
                    'div',
                    { className: 'movie-wrap' },
                    this.similarGenreDisplay(this.state.n)
                  ),
                  _react2.default.createElement('i', { className: 'fas fa-angle-right', onClick: this.rightArrow })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Movie;
}(_react.Component);

exports.default = Movie;

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(26);

var _axios = __webpack_require__(20);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(79),
    apiImageURL = _require.apiImageURL,
    apiGenreID = _require.apiGenreID,
    apiURL = _require.apiURL,
    apiKey = _require.apiKey;

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Slider.__proto__ || Object.getPrototypeOf(Slider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentIndex: 0,
      movieList: {},
      allGenres: {},
      currentGenres: [],
      wholePath: '',
      title: '',
      overview: '',
      releaseDate: ''
    }, _this.genreFilter = function (obj) {
      if (obj) {
        var x = obj.genre_ids.map(function (item, i) {
          return _this.state.allGenres.filter(function (g) {
            return g.id === item;
          });
        });
        return x;
      } else {
        console.log('Loading movie details');
      }
    }, _this.genreDisplay = function () {
      return _this.state.currentGenres.map(function (item, i) {
        return _react2.default.createElement(
          "p",
          { className: "genre", key: i },
          item[0].name
        );
      });
    }, _this.nextBtn = function () {
      if (_this.state.currentIndex != _this.state.movieList.length - 1) {
        _this.setState({
          currentIndex: _this.state.currentIndex + 1
        });
      } else if (_this.state.currentIndex == _this.state.movieList.length - 1) {
        _this.setState({
          currentIndex: 0
        });
      }
    }, _this.prevBtn = function () {
      if (_this.state.currentIndex != 0) {
        _this.setState({
          currentIndex: _this.state.currentIndex - 1
        });
      } else if (_this.state.currentIndex == 0) {
        _this.setState({
          currentIndex: _this.state.movieList.length - 1
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // same as initializing with a constructor, functionally equivalent, its less code


  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log(this.props);
      _axios2.default.get('/api/genres').then(function (response) {
        var allGenres = response.data;
        _this2.setState({ allGenres: allGenres });
      });
      _axios2.default.get('/api/movies').then(function (response) {
        var movieList = response.data.results.slice(0, 5).reverse().map(function (item, i) {
          return item;
        });
        _this2.setState({
          movieList: movieList,
          currentGenres: _this2.genreFilter(movieList[_this2.state.currentIndex]),
          title: movieList[_this2.state.currentIndex].title,
          overview: movieList[_this2.state.currentIndex].overview,
          releaseDate: movieList[_this2.state.currentIndex].release_date
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // TRYING TO UPDATE VARIABLES WITH GENRE INFO
      var allGenres = this.state.allGenres;
      var currentGenres = this.genreFilter(this.state.movieList[this.state.currentIndex]);
      var currentMovie = this.state.movieList[this.state.currentIndex];
      var wholePath = this.state.wholePath;
      var title = this.state.movieList[this.state.currentIndex].title;
      var overview = this.state.movieList[this.state.currentIndex].overview;
      var id = this.state.movieList[this.state.currentIndex].id;
      var releaseDate = this.state.movieList[this.state.currentIndex].release_date;
      if (wholePath === prevState.wholePath) {
        var path = currentMovie.backdrop_path;
        this.setState({
          currentGenres: currentGenres,
          wholePath: apiImageURL + path,
          title: title,
          overview: overview,
          id: id,
          releaseDate: releaseDate
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "slider" },
        _react2.default.createElement(
          "div",
          { className: "main-image" },
          _react2.default.createElement(
            "div",
            { href: "#", className: "arrows left-arrow", onClick: this.prevBtn },
            _react2.default.createElement("i", { className: "fas fa-caret-left" })
          ),
          _react2.default.createElement(
            "div",
            { href: "#", className: "arrows right-arrow", onClick: this.nextBtn },
            _react2.default.createElement("i", { className: "fas fa-caret-right" })
          ),
          _react2.default.createElement("div", { className: "image-1", style: this.state.movieList ? { backgroundImage: "linear-gradient(rgba(0,0,0,.75) 0%,rgba(0,0,0,0) 100%, rgba(0,0,0,0) 0%), url(" + this.state.wholePath + ") " } : { backgroundImage: "url(https://image.tmdb.org/t/p/original/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg)" } }),
          _react2.default.createElement(
            "div",
            { className: "details" },
            _react2.default.createElement(
              "h1",
              { className: "title" },
              this.state.title
            ),
            _react2.default.createElement(
              "p",
              { className: "overview" },
              this.state.overview
            ),
            _react2.default.createElement(
              "div",
              { className: "genres" },
              this.genreDisplay()
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/movie/" + this.state.id, className: "movieLink" },
              "View more details..."
            )
          )
        )
      );
    }
  }]);

  return Slider;
}(_react.Component);

exports.default = Slider;

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  //https://developers.themoviedb.org/3/getting-started/introduction
  // check documentation
  apiActorURL: 'https://api.themoviedb.org/3/person/',
  apiImageURL: 'http://image.tmdb.org/t/p/original',
  apiGenreID: 'https://api.themoviedb.org/3/genre/movie/list?api_key=f20135b292080c1a6bdcdd3cf8616d48',
  apiURL: 'https://api.themoviedb.org/3',
  apiKey: '?api_key=f20135b292080c1a6bdcdd3cf8616d48'
};

/***/ })

},[155]);