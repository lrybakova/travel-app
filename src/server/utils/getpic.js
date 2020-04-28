const request = require('request')

const getPic = (dateTrip, temp, weather, city, country, delta, callback) => {
  const url = 'https://pixabay.com/api/?key=16243174-1dae14bc3590dcc9a607abe26&q='+city+'&image_type=photo&category=travel'
  request({url, json: true}, (error, response) => {
    if (error) {
      callback('Unable to connect to image service', undefined)
    } else if (response.body.total === 0) {
      const url = 'https://pixabay.com/api/?key=16243174-1dae14bc3590dcc9a607abe26&q='+ encodeURIComponent(country)+'&image_type=photo&category=travel'
      request({url, json: true}, (error, response) => {
        callback(undefined, {
          dateTrip,
          temp,
          weather,
          city,
          country,
          delta,
          img: response.body.hits[0].webformatURL
        })
      })
       } else {
      callback(undefined, {
        dateTrip,
        temp,
        weather,
        city,
        country,
        delta,
        img: response.body.hits[0].webformatURL
      })
    }
  })
}

module.exports = getPic