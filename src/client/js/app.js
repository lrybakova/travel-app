export function submitter(e) {

  e.preventDefault()
  //Initiating DOM elements we need to control 
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

  // receiving user input - date of the trip and destination 

  const dateTrip = date.value
  const city = place.value


  // calculating how many days left before the trip 

  let dateRequested = new Date(dateTrip)
  let today = new Date()
  const delta = Math.ceil((dateRequested - today) / (24 * 60 * 60 * 1000));

  // before to call API checking the validity of the request (form is complete and trip date is not overdue)
  if (city.length === 0 || date.length === 0) {
    messageOne.textContent = 'Error. Please, provide a search term'
  } else if (delta < 0) {
    messageOne.textContent = 'Error. Please, provide a date in future'
  }
  else {
    //showing a loader to improve user experience 
    messageOne.textContent = 'Loading...'

    //making sure that all elements are empty 

    messageTwo.textContent = ''
    messageThree.textContent = ''
    messageFour.textContent = ''
    messageFive.textContent = ''
    messageSix.textContent = ''
    removeBtn.innerHTML = ''
    //sending request to API, starting with date and city. At the server side a callback chain will request all three APIs
    fetch('http://localhost:3000/trip?date=' + dateTrip + '&city=' + encodeURIComponent(city)).then((response) => {
      response.json().then((data) => {
        if (data.error) {
          console.log(data.error)
        } else {
          //in the last moment removing placeholder element Paris and fetching data about the new trip from our Endpoint
          picHolder.innerHTML = ''
          fetch('http://localhost:3000/all').then((response) => {
            //sending data to function which will update UI  
            Client.updater(response)
          })
        }
      })
    })
  }
}
