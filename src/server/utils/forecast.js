const request = require('request')

const forecast = (dateTrip, latitude, longitude, city, country, callback) => {
  //API has two versions for current weather and for the future forecasts
  const urlCurrent = 'https://api.weatherbit.io/v2.0/current?lat='+latitude+'&lon='+longitude+'&key=9a6e993d4ee0456abdf4bc7a0e58680d'
  const urlFuture = 'https://api.weatherbit.io/v2.0/forecast/daily?lat='+latitude+'&lon='+longitude+'&key=9a6e993d4ee0456abdf4bc7a0e58680d'
  const dateValue = dateTrip
  const date = new Date(dateValue);
  const today = new Date();
  const delta = Math.ceil((date - today) / (24 * 60 * 60 * 1000));
  if (delta === 0) {
    //if trip starts today we retreive current weather API
    request({url: urlCurrent, json: true}, (error, response) => {
      if (error) {
        callback('Unable to connect to weather service', undefined)
      } else if (response.body.data[0] === 0) {
        callback('Weather API sent empty answer', error)
      } else { 
        callback(undefined, {
          temp: response.body.data[0].temp,
          weather: response.body.data[0].weather.description,
          city,
          country,
          delta,
          dateTrip
          //using shorthand properties, viva ES6!
        })
      }
    })
  } else {
    //otherwise we retreive future forecast
    request({url: urlFuture, json: true}, (error, response) => {
      if (error) {
        callback('Unable to connect to weather API', undefined)
      } else if (response.body.data[0] = undefined) {
        callback('Weather API sent empty answer', error)
        //for trip's date in range of two weeks we can provide exact forecast
      } if (delta < 15) {
          callback(undefined, {
          temp: response.body.data[delta].temp,
          weather: response.body.data[delta].weather.description,
          city,
          country,
          delta,
          dateTrip
          })
        } else if (delta > 15) {
          //and for dates further ahead the last avail forecast in free API version. oops.
        callback(undefined, {
          temp: response.body.data[14].temp,
          weather: response.body.data[14].weather.description,
          city,
          country,
          delta,
          dateTrip

        })
      }
      })
    }
  }

  module.exports = forecast