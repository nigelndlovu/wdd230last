const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
    let diff = (Date.now() - numVisits) / (1000*60*60*24)
	visitsDisplay.textContent = Math.round(diff);
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", Date.now());

// show todays date.
//todayDisplay.textContent = Date.now();