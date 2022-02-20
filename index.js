
gsap.fromTo("#preloaderTop", {y: 0}, {duration: 1.5, y: -window.innerHeight+50 / 2, delay: 1})
gsap.fromTo("#preloaderBottom", {y: 0}, {duration: 1.5, y: window.innerHeight+50 / 2, delay: 1})

gsap.fromTo("#title1", {x: -300, opacity: 0}, {duration: .5, x: 0, opacity: 1, delay: 2})
gsap.fromTo("#title2", {x: -300, opacity: 0}, {duration: .7, x: 0, opacity: 1, delay: 2.3})
gsap.fromTo("#title3", {x: -300, opacity: 0}, {duration: .9, x: 0, opacity: 1, delay: 2.6})
gsap.fromTo("#title4", {x: -300, opacity: 0}, {duration: .9, x: 0, opacity: 1, delay: 3})
gsap.fromTo("#title5", {y: 100, opacity: 0}, {duration: .5, y: 0, opacity: 1, delay: 6})
gsap.fromTo("#title5", {y: 0}, {duration: .5, y: -65, delay: 11})
gsap.fromTo("#title6", {y: 100, opacity: 0}, {duration: .5, y: 0, opacity: 1, delay: 11})

const dateTo = new Date("Mar 20, 2022 17:25:30").getTime()
const timerDays = document.getElementById('timerDays');
const timerHours = document.getElementById('timerHours');
const timerMinutes = document.getElementById('timerMinutes');
const timerSeconds = document.getElementById('timerSeconds');

const timer = setInterval(function() {
	let now = new Date().getTime();
	let t = dateTo - now;

	if (t >= 0) {
		let days = Math.floor(t / (1000 * 60 * 60 * 24));
		let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((t % (1000 * 60)) / 1000);

		timerDays.innerHTML = days;
		timerHours.innerHTML = ("0" + hours).slice(-2);
		timerMinutes.innerHTML = ("0" + minutes).slice(-2);
		timerSeconds.innerHTML = ("0" + seconds).slice(-2);
	} else {
		document.getElementById("timer").innerHTML = "Розыгрыш начался!";
	}

}, 1000)


console.log(dateTo)

