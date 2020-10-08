const day = document.querySelector('#days');
const hour = document.querySelector('#hours');
const minute = document.querySelector('#minutes');
const second = document.querySelector('#seconds');
const dayevent = document.getElementById('dayevent');
const spinnerLoading = document.querySelector('#loading');
const countdown = document.querySelector('#countdown');

const nextYar = new Date().getFullYear() + 1;
const newyARNtime = new Date(`january 01 ${nextYar} 00:00:00`);

dayevent.textContent = nextYar;

const insertvalues = ({ days, hours, minutes, seconds }) => {
    day.textContent = days < 10 ? '0' + days : days;
    hour.textContent = hours < 10 ? '0' + hours : hours;
    minute.textContent = minutes < 10 ? '0' + minutes : minutes;
    second.textContent = seconds < 10 ? '0' + seconds : seconds;
}
const updatecountdown = () => {
    const currentTime = new Date();
    const diference = newyARNtime - currentTime; //DIFERENÇA EM MILISSEGUNDO PARA CHEGAR ETÉ O DIA DESEJADO

    const days = Math.floor(diference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diference / 1000 / 60) % 60;
    const seconds = Math.floor(diference / 1000) % 60;

    insertvalues({ days, hours, minutes, seconds })

}
const spinnerandcountdown = () => {
    spinnerLoading.remove();
    countdown.style.display = 'flex';
}
setTimeout(spinnerandcountdown, 1000)
setInterval(updatecountdown, 1000)