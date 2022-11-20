function timeStamp() {
    return new Date().toLocaleDateString();
}

document.querySelector("#formDate").value = timeStamp();