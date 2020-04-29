export function updater (response) {
  response.json().then((data) => {
  if(data.error) {
    messageOne.textContent = data.error
  } else { 
    
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
    picHolder.innerHTML = '<img src="' + data.img +'">'
    messageOne.textContent = 'My trip to ' + data.city + ', '+ data.country 
    messageTwo.textContent = 'Departure: ' + data.dateTrip 
    messageThree.textContent = data.country + ' is ' + data.delta + ' days away'
    messageFour.textContent = 'Expected weather there: '
    messageFive.textContent = data.weather
    messageSix.textContent = 'Air temperature: ' + data.temp + ' degrees.'
    removeBtn.innerHTML = '<A HREF="javascript:history.go(0)">remove</A>'
  }
  
})}




