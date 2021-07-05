window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
	let i = 1,
		flag = false;
	let time = 3;
	const button = document.getElementById('cps-main-btn');
	const result = document.getElementById('result');

	result.innerHTML = `Time: ${ time }s`;
	
	function cps(e) {
		if ( ! flag ) {
			i = 1;
			setTimeout(function() {
				button.removeEventListener('click', cps);
				result.innerHTML = `CPS: ${ (i / time).toFixed(2) }`;
			}, time * 1000);
			flag = true;
		}
		button.innerHTML = i++;
	}

	button.addEventListener('click', cps);
});