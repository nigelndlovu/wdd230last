
let t = parseInt(document.getElementById("temp").innerHTML);
let s = parseFloat(document.getElementById("speed").innerHTML);

let result = windChill(t, s);

if (t<=10.0 && s>4.8) {
	document.getElementById("chill").innerHTML = result.toFixed(2);
} else {
  document.getElementById("chill").innerHTML = "N/A";
}

function windChill(t, s) {
  let c = 13.12 + (0.6125 * t) - (11.37 * (s**0.16)) + (0.3965 * t * (s**0.16));
  return c;
}