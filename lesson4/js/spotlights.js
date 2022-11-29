const requestURL = 'json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
	.then(function (response) {
		return response.json();
  })
  .then(function (jsonObject) {
		console.table(jsonObject);
    const details = jsonObject['details'];
		let selectDetails = details.filter(detail => detail.member == "gold" || detail.member == "silver");
		let spotDetails = [];

		for (let i = 0; i < 3; i++) {
			spots = Math.floor(Math.random() * selectDetails.length);
			spotDetails.push(selectDetails[spots]);
			selectDetails.splice(spots, 1)
		}
    spotDetails.forEach(displayDetails);
  });

function displayDetails(detail) {
  // Create elements to add to the document
  let card = document.createElement('section');
	card.class = "spot1"
	let logoIcon = document.createElement('img');
  let h2 = document.createElement('h2');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let member = document.createElement('p');
  let weburl = document.createElement('a');

  // set class attribute to the container
  card.classList.add('cards');
  logoIcon.classList.add('img');

	// Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
	logoIcon.setAttribute('src', detail.imageurl);
	logoIcon.setAttribute('alt', `Logo icon for ${detail.name}`);
	logoIcon.setAttribute('loading', 'lazy');

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.innerHTML = `${detail.name}`;
  address.innerHTML = detail.address;
  phone.innerHTML = detail.phone;
  member.textContent = detail.member;
  weburl.textContent = detail.weburl;
	weburl.setAttribute('href', detail.weburl);

  // Add/append the section(card) with the h2 element
  card.appendChild(logoIcon);
  card.appendChild(h2);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(member);

	card.appendChild(weburl);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('#spotlights').appendChild(card);
}

const maingrid = document.querySelector('.cards')
//const gridbutton = document.querySelector('#grid');
//const listbutton = document.querySelector('#list');


//gridbutton.addEventListener('click', () => {maingrid.classList.add('cards')}, false);
//listbutton.addEventListener('click', () => {maingrid.classList.remove('cards')}, false);