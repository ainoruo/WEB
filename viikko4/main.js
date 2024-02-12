async function getJoke() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        document.querySelector('.show_joke').innerHTML = data.value;
    } catch (error) {
        console.error('Error:', error);
        document.querySelector('.show_joke').innerHTML = 'Virhe, yritä uudelleen';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.chuck');
    button.addEventListener('click', getJoke);
});