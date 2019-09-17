let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let paragraph = document.querySelector('p');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');


    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/husky.jpg');
      paragraph.textContent = "It's a Husky!"
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
      paragraph.textContent = "At Mozilla, we're a global community of"
    }
}

function setUserName() {
  let myName = prompt('Please enter your name.');

  if(!myName || myName === null) {
    setUserName();
  } else {
  	paragraph.textContent = "At Mozilla, we're a global community of";
  	myImage.setAttribute ('src','images/firefox-icon.png');
  	localStorage.setItem('name', myName);
  	myHeading.textContent = 'Hello, ' + myName + "! Want to see a surprise? Click on the picture below!";
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  paragraph.textContent = "At Mozilla, we're a global community of";
  myImage.setAttribute ('src','images/firefox-icon.png');
  myHeading.textContent = 'Hello, ' + storedName + "! Want to see a surprise? Click on the picture below!";
}

myButton.onclick = function() {
  setUserName();
}