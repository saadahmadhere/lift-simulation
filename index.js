const floors = document.querySelector('.floor');
const lifts = document.querySelector('.lift');
const goButton = document.querySelector('#btn-go');
console.log(floors.value);

goButton.addEventListener('click', () => {
	if (floors.value && lifts.value) window.location.href = 'simulation.html';
	else {
		alert('please fill in both boxes');
	}
});
