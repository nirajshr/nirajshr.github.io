const myHeading = document.querySelector('h1');
const myImage = document.querySelector('img');
const myButton = document.querySelector('button');

myImage.onclick = function () {
	const mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/firefox-icon.png') {
		myImage.setAttribute('src', 'images/tree-icon.png');
	} else {
		myImage.setAttribute('src', 'images/firefox-icon.png');
	}
}

myButton.onclick = setUserName;

function setUserName() {
	let myName = prompt('Please enter your name.');
	if (myName) {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Como estas, ' + myName;
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	const storedName = localStorage.getItem('name');
	myHeading.textContent = 'Como estas, ' + storedName;
}