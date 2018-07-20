webpackJsonp([0],{

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(33);

var _axios = __webpack_require__(21);

var _axios2 = _interopRequireDefault(_axios);

var _Header = __webpack_require__(147);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(149);

var _Home2 = _interopRequireDefault(_Home);

var _Listings = __webpack_require__(150);

var _Listings2 = _interopRequireDefault(_Listings);

var _Movie = __webpack_require__(151);

var _Movie2 = _interopRequireDefault(_Movie);

var _Slider = __webpack_require__(76);

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
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/movie/:credits', component: _Movie2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(33);

var _axios = __webpack_require__(21);

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
        { className: 'container header-wrap' },
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'div',
            { className: 'leftMenu' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/', className: 'logo' },
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
              'div',
              { className: 'browse-dropdown' },
              'Browse',
              _react2.default.createElement('i', { className: 'fas fa-angle-down' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'rightMenu' },
            _react2.default.createElement(
              'div',
              { className: 'social-row' },
              _react2.default.createElement(
                'div',
                { className: 'icon-wrap' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Follow us!'
                ),
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
              _react2.default.createElement(
                'div',
                { className: 'user-img' },
                _react2.default.createElement('i', { className: 'fa fa-user', 'aria-hidden': 'true' })
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

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(128);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(21);

var _axios2 = _interopRequireDefault(_axios);

var _Slider = __webpack_require__(76);

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

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(33);

var _axios = __webpack_require__(21);

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
        return _this.state.movieList.reverse().map(function (item, i) {
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

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(33);

var _reactLazyHero = __webpack_require__(261);

var _reactLazyHero2 = _interopRequireDefault(_reactLazyHero);

var _axios = __webpack_require__(21);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(77),
    apiImageURL = _require.apiImageURL,
    apiGenreID = _require.apiGenreID,
    apiURL = _require.apiURL,
    apiKey = _require.apiKey;

var Movie = function (_Component) {
  _inherits(Movie, _Component);

  function Movie() {
    _classCallCheck(this, Movie);

    var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

    _this.state = {
      idValue: '',
      idType: '',
      allGenres: [],
      credits: [],
      movie: [],
      movieBackdrop: ''
    };
    return _this;
  }

  _createClass(Movie, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          match = _props.match,
          history = _props.history;

      var id = match.params.credits;
      _axios2.default.get('/api/genres').then(function (response) {
        var allGenres = response.data;
        console.log(allGenres);

        _this2.setState({ allGenres: allGenres });
      });

      _axios2.default.get('/api/credits/' + id).then(function (response) {
        console.log(id);
        var credits = response.data;
        console.log(credits);

        _this2.setState({ credits: credits });
      });

      _axios2.default.get('/api/info/' + id).then(function (response) {
        var movie = response.data;
        var movieBackdrop = apiImageURL + movie.backdrop_path;
        console.log(movieBackdrop);
        console.log(movie);

        _this2.setState({
          movie: movie,
          movieBackdrop: movieBackdrop
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'movie' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'top-image' },
            _react2.default.createElement(_reactLazyHero2.default, {
              className: 'image',
              imageSrc: this.state.movieBackdrop,
              isFixed: true,
              opacity: 1
            })
          ),
          _react2.default.createElement('div', { className: 'filter-1' }),
          _react2.default.createElement('div', { className: 'filter-2' }),
          _react2.default.createElement(
            'div',
            { className: 'details' },
            _react2.default.createElement(
              'div',
              { className: 'data-left' },
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
                    '8.7'
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
                    _react2.default.createElement(
                      'p',
                      null,
                      'Action'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Adventure'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Comedy'
                    )
                  ),
                  _react2.default.createElement('div', { className: 'circle-split' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'time-rating' },
                    _react2.default.createElement(
                      'p',
                      { className: 'runtime' },
                      '2HR 15MIN'
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
              ),
              _react2.default.createElement(
                'div',
                { className: 'overview' },
                _react2.default.createElement(
                  'h4',
                  null,
                  'Synopsis'
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. '
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
            _react2.default.createElement('div', { className: 'poster-img', style: { backgroundImage: 'url(' + apiImageURL + this.state.movie.poster_path + ')' } })
          ),
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
              _react2.default.createElement('i', { className: 'fas fa-angle-left' }),
              _react2.default.createElement(
                'div',
                { className: 'cast-wrap' },
                _react2.default.createElement(
                  'div',
                  { className: 'cast-member' },
                  _react2.default.createElement('div', { className: 'cast-img' }),
                  _react2.default.createElement(
                    'h5',
                    { className: 'name' },
                    'Mustafa Shakir'
                  ),
                  _react2.default.createElement(
                    'h5',
                    { className: 'count' },
                    '38 Movies'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'cast-member' },
                  _react2.default.createElement('div', { className: 'cast-img' }),
                  _react2.default.createElement(
                    'h5',
                    { className: 'name' },
                    'Mustafa Shakir'
                  ),
                  _react2.default.createElement(
                    'h5',
                    { className: 'count' },
                    '38 Movies'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'cast-member' },
                  _react2.default.createElement('div', { className: 'cast-img' }),
                  _react2.default.createElement(
                    'h5',
                    { className: 'name' },
                    'Mustafa Shakir'
                  ),
                  _react2.default.createElement(
                    'h5',
                    { className: 'count' },
                    '38 Movies'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'cast-member' },
                  _react2.default.createElement('div', { className: 'cast-img' }),
                  _react2.default.createElement(
                    'h5',
                    { className: 'name' },
                    'Mustafa Shakir'
                  ),
                  _react2.default.createElement(
                    'h5',
                    { className: 'count' },
                    '38 Movies'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'cast-member' },
                  _react2.default.createElement('div', { className: 'cast-img' }),
                  _react2.default.createElement(
                    'h5',
                    { className: 'name' },
                    'Mustafa Shakir'
                  ),
                  _react2.default.createElement(
                    'h5',
                    { className: 'count' },
                    '38 Movies'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'cast-member' },
                  _react2.default.createElement('div', { className: 'cast-img' }),
                  _react2.default.createElement(
                    'h5',
                    { className: 'name' },
                    'Mustafa Shakir'
                  ),
                  _react2.default.createElement(
                    'h5',
                    { className: 'count' },
                    '38 Movies'
                  )
                )
              ),
              _react2.default.createElement('i', { className: 'fas fa-angle-right' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'related-movies' },
            _react2.default.createElement(
              'h5',
              null,
              'Related'
            ),
            _react2.default.createElement(
              'div',
              { className: 'wrap' },
              _react2.default.createElement('i', { className: 'fas fa-angle-left' }),
              _react2.default.createElement(
                'div',
                { className: 'movie-wrap' },
                _react2.default.createElement('div', { className: 'movie-card' }),
                _react2.default.createElement('div', { className: 'movie-card' }),
                _react2.default.createElement('div', { className: 'movie-card' }),
                _react2.default.createElement('div', { className: 'movie-card' }),
                _react2.default.createElement('div', { className: 'movie-card' }),
                _react2.default.createElement('div', { className: 'movie-card' })
              ),
              _react2.default.createElement('i', { className: 'fas fa-angle-right' })
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

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(33);

var _axios = __webpack_require__(21);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(77),
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
      var releaseDate = this.state.movieList[this.state.currentIndex].release_date;
      if (wholePath === prevState.wholePath) {
        var path = currentMovie.backdrop_path;
        this.setState({
          currentGenres: currentGenres,
          wholePath: apiImageURL + path,
          title: title,
          overview: overview,
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
            _react2.default.createElement("i", { className: "fas fa-chevron-left" })
          ),
          _react2.default.createElement(
            "div",
            { href: "#", className: "arrows right-arrow", onClick: this.nextBtn },
            _react2.default.createElement("i", { className: "fas fa-chevron-right" })
          ),
          _react2.default.createElement("div", { className: "image-1", style: this.state.movieList ? { backgroundImage: "linear-gradient(to top, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%), url(" + this.state.wholePath + ") " } : { backgroundImage: "url(https://image.tmdb.org/t/p/original/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg)" } }),
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
              "a",
              { href: "/movie/id", className: "movieLink" },
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

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  // check documentation
  apiImageURL: 'https://image.tmdb.org/t/p/original',
  apiGenreID: 'https://api.themoviedb.org/3/genre/movie/list?api_key=f20135b292080c1a6bdcdd3cf8616d48',
  apiURL: 'https://api.themoviedb.org/3',
  apiKey: '?api_key=f20135b292080c1a6bdcdd3cf8616d48'
};

/***/ })

},[148]);