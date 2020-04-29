// implementing modules
const path = require('path')
const express = require('express')
var cors = require('cors')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const getPic = require('./utils/getpic')

// starting express 
const app = express()
app.use(express.static('dist'))

app.use(cors())
app.options('*', cors())

//setting up an ending point for all routes 

let projectData = {}

//Adding member: value paris
let mockData = {
  dateTrip: '2020-05-14',
  city: 'Paris'
}

// GET routes

app.get('/trip', (req, res) => {
  console.log(req.query)
  if (!req.query.date || !req.query.city) {
    return res.send({
      error: 'You must provide a search term'
    })
  } else {

    geocode(req.query.date, req.query.city, (error, data) => {

      if (error) {
        return res.send(error)
      }

      forecast(data.dateTrip, data.latitude, data.longitude, data.city, data.country, (error, data) => {
        if (error) {
          return res.send(error)
        }

        getPic(data.dateTrip, data.temp, data.weather, data.city, data.country, data.delta, (error, data) => {
          if (error) {
            return res.send(error)
          }
          projectData.dateTrip = data.dateTrip
          projectData.temp = data.temp
          projectData.weather = data.weather
          projectData.city = data.city
          projectData.country = data.country
          projectData.delta = data.delta
          projectData.img = data.img
          res.send(projectData)
          console.log(projectData)
        })
      })
    })
  }
})


app.get('/all', getAll);
function getAll(req, res) {
  res.send(projectData);
}

module.exports = app 