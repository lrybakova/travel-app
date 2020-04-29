export function submitter(e) {

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
        fetch('http://localhost:3000/all').then((response) => {
          Client.updater(response)
        })
        }
      })
  })
}


}
