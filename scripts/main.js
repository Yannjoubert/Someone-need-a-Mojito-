// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'hello world !';

// document.querySelector('html').addEventListener('click', function() {
//     alert('Aie, arrêtez de clqiuer !!');
// });

let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/mojito.png') {
        myImage.setAttribute('src', 'images/mojito2.png')
    } else {
        myImage.setAttribute('src', 'images/mojito.png');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Veuillez entrer un nom.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Bienvenu sur la recette du Mojito, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Bienvenu sur la recette du Mojito, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}