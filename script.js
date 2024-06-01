const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dataEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ['Sunday', 'Monday', 'Tuesday', 'Thursday', 'Wednesday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

toggle.addEventListener('click', function (e) {
    // const html = document.querySelector('html');
    // if(html.classList.contains('dark')){
    //     html.classList.remove('dark')
    //     // e.target.innerHTML = 'Dark mode';
    // } else{
    //     html.classList.add('dark');
    //     // e.target.innerHTML = 'Light mode';
    // }
    toggle.classList.toggle('dark-btn-on');
    document.body.classList.toggle('dark');

})

function setTime() {
    const time = new Date();
    const date = time.getDate();
    const month = time.getMonth()
    const day = time.getDay()
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    timeEl.innerHTML = `${hoursForClock < 10 ? `0${hoursForClock}` : hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`

    dataEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
setTime();

setInterval(() => {
    setTime()
}, 1000);