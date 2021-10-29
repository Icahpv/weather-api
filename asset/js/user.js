'use strict';
const v = "Hi! I'm a strict mode script!";

let output ='';
// form
const city = document.querySelector('input')
const submit = document.querySelector('button')
const bg = document.querySelector('body')

// weather background
const changeWeather = function(condition){
  switch (condition){
    case 'few clouds': 
      bg.className = 'few-clouds'
      break;
    case 'clear sky':
      bg.className = 'clear-sky'
      break;
    default:
  }}

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
      console.log(data)
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
      ` 
        document.querySelector('.date').innerText = new Date
      console.log(data)
    document.querySelector('.content').innerHTML = output;
  changeWeather(data.weather[0].description)
  })
    .catch(function(err){
      //console.log(err);

  })
}

submit.addEventListener('click', function(event){
  event.preventDefault()
    getWeather()
})