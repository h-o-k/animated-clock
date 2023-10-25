const secondHand = document.querySelector("#seconds");
const minuteHand = document.querySelector("#minutes");
const hourHand = document.querySelector("#hours");

// setInterval(updateClock, 1000);
(function updateClock() {
	const currentTime = new Date();

	const seconds = currentTime.getSeconds(); // 41
	const minutes = currentTime.getMinutes() + seconds / 60; // 9 + 41/60 = 9.7
	const hours = (currentTime.getHours() % 12) + minutes / 60; // 13 % 12 = 1 -> 1 + 9.7/60 = 1.16

	const secHandRotation = 6 * seconds; // 41 * 6 degrees
	const minHandRotation = 6 * minutes; // 9.7 * 6 degrees
	const hourHandRotation = 30 * hours; // 1.16 * 30 degrees

	secondHand.setAttribute("transform", `rotate(${secHandRotation} 244 251)`);
	// secondHand.style.transformOrigin = "244px 251px";
	// secondHand.style.transform = `rotate(${secHandRotation}deg`;
	minuteHand.setAttribute("transform", `rotate(${minHandRotation} 244 251)`);
	hourHand.setAttribute("transform", `rotate(${hourHandRotation} 244 251)`);

	const tickSound = new Audio("./media/tick.mp3");
	tickSound.currentTime = 0;
	tickSound.play();

	setTimeout(updateClock, 1000);
})();
