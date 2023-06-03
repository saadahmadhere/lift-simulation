const floors = document.querySelector('.floor');
const lifts = document.querySelector('.lift');
const goButton = document.querySelector('#btn-go');

goButton.addEventListener('click', () => {
	console.log(floors.value);
	window.location.href = 'simulation.html';
});

// console.log(floors.value);
