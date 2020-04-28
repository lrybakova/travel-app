function submitter(e) {

  e.preventDefault()
  let date = document.querySelector('#date')
  let place = document.querySelector('#city')
  let messageOne = document.querySelector('#message-1')
  let messageTwo = document.querySelector('#message-2')
  let messageThree = document.querySelector('#message-3')
  let messageFour = document.querySelector('#message-4')
  let messageFive = document.querySelector('#message-5')
  let messageSix = document.querySelector('#message-6')


  let picHolder = document.querySelector('#pic')
  let removeBtn = document.querySelector('#remove')
  const dateTrip = date.value
  const city = place.value

 
 
  
  let dateRequested = new Date(dateTrip)
  let today = new Date()
  const delta = Math.ceil((dateRequested - today) / (24 * 60 * 60 * 1000));

  if (city.length === 0 || date.length === 0) {
    messageOne.textContent = 'Error. Please, provide a search term'
  } else if (delta < 0 ) {
    messageOne.textContent = 'Error. Please, provide a date in future'
  } 
  else { 
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''
    messageFour.textContent = ''
    messageFive.textContent = ''
    messageSix.textContent = ''
    
    removeBtn.innerHTML = ''
    fetch('http://localhost:3000/trip?date=' + dateTrip + '&city=' + encodeURIComponent(city) ).then((response) => {
      response.json().then((data) => {
        if (data.error) {
          console.log(data.error)
        } else {
        picHolder.innerHTML = ''
        updater()
        }
      })
      
  })
  }

}

 const updater = async (data) => {
    const request = await fetch('http://localhost:3000/all')
    try {
      const allData = await request.json()
    const messageOne = document.querySelector('#message-1')
    const messageTwo = document.querySelector('#message-2')
    const messageThree = document.querySelector('#message-3')
    const messageFour = document.querySelector('#message-4')
    const messageFive = document.querySelector('#message-5')
    const messageSix = document.querySelector('#message-6')

    const picHolder = document.querySelector('#pic')
    const removeBtn = document.querySelector('#remove')
    const planner = document.querySelector('.planner')
    planner.innerHTML = ''
    picHolder.innerHTML = '<img src="' + allData.img +'">'
    messageOne.textContent = 'My trip to: ' + allData.city + ', '+ allData.country 
    messageTwo.textContent = 'Departure: ' + allData.dateTrip 
    messageThree.textContent = allData.city + ', '+ allData.country + ' is ' + allData.delta + ' days away'
    messageFour.textContent = 'Expected weather there: '
    messageFive.textContent = allData.weather
    messageSix.textContent = 'Air temperature: ' + allData.temp + ' degrees.'
    removeBtn.innerHTML = '<A HREF="javascript:history.go(0)">remove</A>'
    
  } catch (error) {
    console.log('Error', error)
  }
  }
  
