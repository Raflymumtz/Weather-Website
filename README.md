![Web Weather Desktop View](https://github.com/Raflymumtz/Weather-Website/assets/106478791/8482a64f-fde9-4b4c-8b26-e2efc1bb7f1a)

Weather Web App Description
Project Title: Weather Information Web Application

Platform: Web

Programming Language: JavaScript (with use of frameworks or libraries if necessary, for example React or Vue.js)

Description: This web application will display real-time weather information taken from an API which can be accessed via the URL: https://mgm.ub.ac.id/weather.json. The information displayed will include geographic coordinates, weather conditions, temperature, felt temperature, and sunrise and sunset times.

Main feature:

1. Displaying Geographic Coordinates (coords):
    a) Longitude (lon)
    b) Latitude (lat)

2. Displaying Weather Information (weather):
    a) Main (eg: Rainy, Sunny, Cloudy)
    b) Description (more detailed description of weather conditions)

3. Displaying Temperature:
    a) Temp (current temperature in degrees Celsius)
    b) Feels Like (temperature felt in degrees Celsius)

4. Displays Sunrise and Sunset Times (sys):
    a) Sunrise (sunrise time)
    b) Sunset (sunset time)

5. Displaying Weather Icons:
    Based on the "main" attribute of the weather object, an appropriate weather icon will be displayed to provide a visual representation of the current weather conditions.

Technology Used:

Front-end:

1. HTML5 for the basic structure of web pages.
    a) CSS3 for responsive styling and layout.
    b) JavaScript (Vanilla JS or using a framework like React.js or Vue.js) for dynamic interactions and fetching data from APIs.

Back-end:
    a) No special back-end setup is required as the app simply fetches data from third-party APIs and displays it on the front-end.

Application Structure:

Home Page (index.html):

- Header with application title.
- Input section for location search (optional if API supports location based search).
- Section for displaying weather information consisting of:
- Geographic coordinates
- Weather conditions (main and description) with weather icons
- Temperature (temp and feels_like)
- Sunrise and sunset times
- Footer with current date and time information.
  
JavaScript (script.js):

- Function to retrieve weather data from API using fetch API.
- Function to convert Unix timestamp to human-readable time format.
- Function to update HTML elements with obtained weather data.

CSS (style.css):

- Styling to ensure a responsive and attractive appearance.
- Styling for weather icons and other weather information elements.

Example Display:

Header: "Weather Information Application"
Coordinates: "Coordinates: Lon: 112.5905, Lat: -7.9786"
Weather Conditions: "Sunny" with a sun icon
Temperature: "Temperature: 28°C, Feels Like: 30°C"
Sunrise Time: "Sunrise: 05:30"
Sunset Time: "Sunset: 17:45"
Footer: "Date: Wednesday, June 12, 2024"


