
const path = require('path')
const express = require('express')
var cors = require('cors')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const getPic = require('./utils/getpic')

const app = express()
const imgPath = path.join(__dirname, '../../paris.jpg')
console.log(imgPath)
// const viewsDirectoryPath = path.join(__dirname, '../client/views')
// const jsDirectoryPath = path.join(__dirname, '../client/js/app.js' )

// app.use(express.static(jsDirectoryPath))
// app.use(express.static(viewsDirectoryPath))

// app.get('/js/app.js', (req, res) => {
//   res.sendFile(jsDirectoryPath)
// })

// app.get('/scss', (req, res) => {
//   res.sendFile('./client/scss/styles.scss')
// })

app.use(express.static('dist'))

app.use(cors())
app.options('*', cors())

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.get('/img/paris.jpg', (req, res) => {
  res.sendFile(path.resolve('dist', "paris.jpg"))
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

module.exports = app 