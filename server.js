// Import packages for express
const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const { apiGenreID, apiURL, apiKey } = require('./config.js')
const fakeData = require('./data/fakeData.js')
let x = ''
// Import middleware packages
const cors = require('cors')
const { json } = require('body-parser');
const axios = require('axios');

// Create express app & initialize server
const app = express()

// Middleware to handle serving off the app
// app.use(cors())
// app.use(json())
app.use('/', serveStatic(path.join(__dirname, '/public')))

// Endpoints
app.get('/api/movies', (req, res, next) => {
  console.log('calling popular movies')
  axios.get(`${apiURL}/movie/popular${apiKey}`).then(response => {
    res.status(200).json(response.data)
  })
})

app.get('/api/credits/:id', (req, res, next) => {
  console.log('calling ids')
  let id  = req.params.id
  console.log(req.params.id)
  axios.get(`${apiURL}/movie/${id}/credits${apiKey}`).then(response => {
    res.status(200).json(response.data)
  })
})

app.get('/api/info/:id', (req, res, next) => {
  let id  = req.params.id
  console.log('calling info')
  axios.get(`${apiURL}/movie/${id}${apiKey}`).then(response => {
    console.log(response.data)
    res.status(200).json(response.data)
  })
})


app.get('/api/genres', (req, res, next) => {
  axios.get(`${apiGenreID}`).then(response => {
    res.status(200).json(response.data.genres)
  }).catch(function(err){
    res.send(err.body)
  })
})


app.get(`/api/${apiURL}/movie/25${apiKey}`, (req, res, next) => {
  res.json(response.data)
})

app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/index.html')
})

const port = process.env.PORT || 5000
app.listen(port)

console.log('Server started on port ' + port)
