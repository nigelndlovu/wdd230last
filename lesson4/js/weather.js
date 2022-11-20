
// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const humidity = document.querySelector('#humid');
const windSpeed = document.querySelector('#speed');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = `//api.openweathermap.org/data/2.5/weather?q=Bulawayo&units=metric&appid=1e17410c85c8f7a887d37b2820fbeb24`;

apifetch(url);


async function apifetch(apiurl) {
		const response = await fetch(apiurl);
		if (response.ok) {
			const data = await response.json();
			displayResults(data);
		} else {
			throw Error(await response.text());
		}
}

function displayResults(weatherInfo) {
	currentTemp.innerHTML = `<strong>${weatherInfo.main.temp.toFixed(1)}</strong>`;
    humidity.innerHTML = `<strong>${weatherInfo.main.humidity.toFixed(0)}</strong>`;
    windSpeed.innerHTML = `<strong>${weatherInfo.wind.speed.toFixed(1)}</strong>`;

    let f = 13.12 + (0.6125 * currentTemp) - (11.37 * (windSpeed**0.16)) + (0.3965 * currentTemp * (windSpeed**0.16));
    
    if (currentTemp<=10.0 && windSpeed>4.8) {
        document.getElementById("chill").innerHTML = f.toFixed(2);
    } else {
      document.getElementById("chill").innerHTML = "N/A";
    }

	const imagesrc = `//openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`;
	const desc = weatherInfo.weather[0].description;
	weatherIcon.setAttribute('src', imagesrc);
	weatherIcon.setAttribute('alt', desc);
	captionDesc.textContent = desc;

}
