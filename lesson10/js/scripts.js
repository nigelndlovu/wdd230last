// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = `//api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=1e17410c85c8f7a887d37b2820fbeb24`;

apifetch(url);


async function apifetch(apiurl) {
		const response = await fetch(apiurl);
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			displayResults(data);
		} else {
			throw Error(await response.text());
		}
}

function displayResults(weatherInfo) {
	currentTemp.innerHTML = `<strong>${weatherInfo.main.temp.toFixed(1)}</strong>`;

	const imagesrc = `//openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`;
	const desc = weatherInfo.weather[0].description;
	weatherIcon.setAttribute('src', imagesrc);
	weatherIcon.setAttribute('alt', desc);
	captionDesc.textContent = desc;
	const words = desc.split(" ");

	for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
	}
	words.join(" ``");
}
