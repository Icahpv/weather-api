# CPNT262-a3
Fetching API Data

Author: Icah Vega
Class: Web Dev Fall 2021
Instructor: [Tony Grimes](https://github.com/acidtone)
Link: [Github Repo Link](https://github.com/Icahpv/cpnt262-a3.git) | [Github Pages Link](https://icahpv.github.io/cpnt262-a3/)

## About the assignment

```Fetch()``` assignment using a [Weather API](https://openweathermap.org/api) from [Open Weather](https://openweathermap.org/). In order for me to avail an API, I had to create an API key which is also in the website's documentation. I used [Postman](https://www.postman.com/downloads/) to check my API. 

I created a form and a button in able to select a city, town or country. Using the data found inside the API, I was able to identify the place, temperature, description, max temperature and humidity. I used `newDate()` to create my date, to modify the date I used `toDateString()` and `toLocaleTimeString()`. I used `switch()` statement to change the background of the Weather App depending on the description (i.e few clouds, overcast clouds, clear sky, etc.).

[863d762](https://github.com/Icahpv/cpnt262-a3/commit/863d76229bd445807b87e9306cfcf21e6470c3a1): This is the commit where I added everything. 


## Problems

1. Background for the weather box, I wanted to make it a bit transparent but I could not make the `z-index` to work and not affect my text.
2. Date: I had a hard time figuring out how to make Luxon work using CDNjs so I opt in for vanilla js, I also had a hard time trying to remove the seconds. My initial goal for this date is too change depending on the timezone that I searched for, but the API I used did not came with the date and time of the places.


### Assets

- [Overcast Photo](https://www.pexels.com/photo/asperitas-dark-clouds-in-gloomy-sky-3742711/) by [Andrew Beatson](https://www.pexels.com/@andrew-beatson-2114196) from [Pexels](https://www.pexels.com/)
- [Few Clouds Photo](https://www.pexels.com/photo/blue-cloudy-sky-86695/) by [Pixabay](https://www.pexels.com/@pixabay) from [Pexels](https://www.pexels.com/)
- [Clear Sky Photo](https://unsplash.com/photos/LHu7MaVOsKA) by [Erik van Dijk](https://unsplash.com/@erikvandijk) from [Unsplash](https://unsplash.com/)
- [Scattered Clouds Photo](https://www.pexels.com/photo/brown-field-and-blue-sky-46160/) by [Pixabay](https://www.pexels.com/@pixabay) from [Pexels](https://www.pexels.com/)
- [Light Rain Photo](https://www.pexels.com/photo/water-dew-in-clear-glass-panel-125510/) by [Kaique Rocha](https://www.pexels.com/@kaiquestr) from [Pexels](https://www.pexels.com/)
- [Broken Clouds Photo](https://www.pexels.com/photo/symmetrical-photography-of-clouds-covered-blue-sky-1486974/) by [James Wheeler](https://www.pexels.com/@souvenirpixels) from [Pexels](https://www.pexels.com/)
- [Mist Photo](https://www.pexels.com/photo/landscape-photography-of-mountains-covered-in-snow-691668/) by [eberhard grossgasteiger](https://www.pexels.com/@eberhardgross) from [Pexels](https://www.pexels.com/)
- [Moderate Rain Photo](https://www.pexels.com/photo/selective-focus-photo-of-obalte-green-leafed-plants-during-rain-1463530/) by [Bibhukalyan Acharya](https://www.pexels.com/@bibhukalyan-acharya-351684) from [Pexels](https://www.pexels.com/)

### Attributions

- Instructor [Tony Grimes](https://github.com/acidtone): Fetch code and guidance.
- [John Paul Adobas](https://github.com/jaypee06): CSS suggestions.
- Norvillie Villaruel: Switch statement advise. 

### Reference

[MDN Web Docs](https://developer.mozilla.org/en-US/)
[W3Schools](https://www.w3schools.com/)
[Traversy Media](https://youtu.be/Oive66jrwBs)
[Markdown Emojis](https://github.com/ikatyang/emoji-cheat-sheet#writing) by [Ika](https://github.com/ikatyang)


#### License
[MIT License](https://opensource.org/licenses/MIT) :scroll:

