
const request = require('request')

const geocode = (dateTrip, city, callback) => {
  const url = 'http://api.geonames.org/searchJSON?q=' + city + '&maxRows=1&username=lrybakova'
  request({url:url, json: true}, (error, response)=>{
    if (error) {
      callback('Unable to connect to location service', undefined)
    } else if (response.body.geonames[0] === 0) {
      callback('Geonames returned empty answer', undefined)
    } else {
      callback(undefined, {
      latitude: response.body.geonames[0].lat,
      longitude: response.body.geonames[0].lng,
      city: response.body.geonames[0].name,
      country: response.body.geonames[0].countryName,
      dateTrip: dateTrip
      })
    }
  })
}

module.exports = geocode