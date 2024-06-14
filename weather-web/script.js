function getTime(timestamp) {
    const milliseconds = timestamp * 1000;
    const date = new Date(milliseconds);
    const options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    };
    return date.toLocaleTimeString("id-ID", options);
}

function getLocation(lat, lon) {
    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`)
        .then((response) => response.json())
        .then((data) => {
            const locationName = data.display_name;
            document.getElementById("location").innerText = locationName;
        })
        .catch((error) => {
            console.error("Error in detecting location:", error);
            document.getElementById("location").innerText = "Location not found";
        });
}

function getData() {
    const apiUrl = "https://mgm.ub.ac.id/weather.json";
    const proxyUrl = "https://api.allorigins.win/get?url=" + encodeURIComponent(apiUrl);

    fetch(proxyUrl)
        .then((response) => response.json())
        .then((data) => {
            const weatherData = JSON.parse(data.contents);

            const temp = weatherData.main.temp;
            const feelsLike = weatherData.main.feels_like;
            const description = weatherData.weather[0].description;
            const coordLat = weatherData.coord.lat;
            const coordLon = weatherData.coord.lon;
            const sunrise = getTime(weatherData.sys.sunrise);
            const sunset = getTime(weatherData.sys.sunset);

            document.getElementById("coord").innerText = `Lat (${coordLat}), Lon (${coordLon})`;
            document.getElementById("description").innerText = description;
            document.getElementById("temperature").innerText = `${temp} °C`;
            document.getElementById("feels-like").innerText = `Feels like ${feelsLike} °C`;
            document.getElementById("sunrise").innerText = sunrise;
            document.getElementById("sunset").innerText = sunset;

            getLocation(coordLat, coordLon);

            const iconElement = document.getElementById("weather-icon");
            const iconCode = weatherData.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
            iconElement.innerHTML = `<img src="${iconUrl}" alt="Weather Icon" width="1000">`;

            const date = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById("date").innerText = date.toLocaleDateString("id-ID", options);
        })
        .catch((error) => {
            console.error("An error occurred:", error);
            document.getElementById("temperature").innerText = "Data not available";
            document.getElementById("feels-like").innerText = "Data not available";
            document.getElementById("description").innerText = "Data not available";
            document.getElementById("coord").innerText = "Data not available";
            document.getElementById("sunrise").innerText = "Data not available";
            document.getElementById("sunset").innerText = "Data not available";
        });
}

window.onload = getData;
