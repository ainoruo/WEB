const language = window.navigator.language;
const screenSize = `${window.screen.width} x ${window.screen.height}`;
const browserSize = `${window.innerWidth} x ${window.innerHeight}`;


const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('fi-FI', options);

document.getElementById('language').textContent = `Selaimen kieli: ${language}`;
document.getElementById('screen-size').textContent = `Näytön koko: ${screenSize}`;
document.getElementById('browser-size').textContent = `Selaimen ikkunan koko: ${browserSize}`;
document.getElementById('current-date').textContent = `Päivämäärä ja aika: ${formattedDate}`;
