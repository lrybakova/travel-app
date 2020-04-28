const path = require('path')
const express = require('express')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const getPic = require('./utils/getpic')

const app = express()

const viewsDirectoryPath = path.join(__dirname, '../client/views')


app.use(express.static(viewsDirectoryPath))

app.get('/js', (req, res) => {
  res.sendFile('./client/js/app.js')
})

app.get('/scss', (req, res) => {
  res.sendFile('./client/scss/styles.scss')
})

app.get('/', (req, res) => {
  res.send('Hello!')
})

let projectData = {}


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

// Get route 

app.get('/all', getAll);
function getAll(req, res) {
  res.send(projectData);
}


  app.listen(3000, () => {
    console.log('Server is up on port 3000')
  })

  module.exports = app