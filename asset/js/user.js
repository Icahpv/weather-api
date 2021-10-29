'use strict';
const v = "Hi! I'm a strict mode script!";

let output ='';

// Date & Time  
const date = new Date()
const newDate = `${date.toDateString()} at ${date.toLocaleTimeString()}`

// Form for calling fetch
const city = document.querySelector('input')
const submit = document.querySelector('button')

// weather background change, I am changing the image of my background depending on the case of clouds.
const bg = document.querySelector('body')
const changeWeather = function(condition){
  switch (condition){
    case 'few clouds': 
      bg.className = 'few'
      break;
    case 'clear sky':
      bg.className = 'clear'
      break;
    case 'overcast clouds':
      bg.className = 'overcast'
      break;
    case 'scattered clouds':
      bg.className = 'scattered'
      break;
    case 'light rain':
      bg.className = 'light-rain'
      break;
    case 'broken clouds':
      bg.className = 'broken-clouds'
      break;
    case 'mist':
      bg.className = 'mist'
      break;
    case 'moderate rain':
      bg.className = 'moderate'
      break;
    default:
  }}

// created a function to call my fetch
const getWeather = function(){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=806f587a1c0cd2d62286fe6805c67fa4`
    fetch(url)
      .then(function(response){
        if (!response.ok) {
          throw new Error('Not 200 OK');
      }
      return response.json()
    }) 
      .then(function(data){
        //console.log(data)
        output = 
        ` 
          <h1>${data.name}, ${data.sys.country}</h1> 
          <ul>
            <li>${data.main.temp}⁰ C</li>
            <li>${data.weather[0].description}</li>
            <li>Feels Like: ${data.main.feels_like}⁰ C</li>
            <li>High of ${data.main.temp_max}⁰ C</li>
            <li>Humidity: ${data.main.humidity}</li>
          </ul>
          <h2> Current Location Date & Time</h2>
        ` 
           // invoked newDate with innerText
           document.querySelector('.date').innerText = newDate

          // specified where I want my output to show
          document.querySelector('.content').innerHTML = output;

        // invoking my switch.
        changeWeather(data.weather[0].description)
    })
      .catch(function(err){
        //console.log(err);
    })
}


submit.addEventListener('click', function(event){
  event.preventDefault() // prevent my page from just refreshing
    // invoking the function that will fire up fetch
    getWeather()
})