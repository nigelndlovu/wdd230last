const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function() {
    // build html

    let size = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = size;
    listItem.appendChild(listBtn);
    listBtn.textContent = '\u274C';
    list.appendChild(listItem);

    listBtn.addEventListener('click', function(e) {
        list.removeChild(listItem);
    })

    input.focus();    
});