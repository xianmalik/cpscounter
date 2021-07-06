window.addEventListener('DOMContentLoaded', () => {
	let i		= 1,
		time	= 10,
		flag	= false;

	let buttonEl = document.getElementById('cps-main-btn'),
		timeEl	 = document.getElementById('time');

	timeEl.innerHTML = `Time: ${ time }s`;

	function timeLoop(t, el) {
		if ( t <= 0 ) return;
		el.innerHTML = 'Time: ' + --t + 's';
		setTimeout( function(){ timeLoop(t, el) } , 1000 )
	}
	
	function cps(e) {
		if ( ! flag ) {
			i = 1;
			setTimeout(function() {
				buttonEl.removeEventListener('click', cps);
				timeEl.innerHTML = `CPS: ${ ( (i - 1) / time).toFixed(2) }`;
			}, time * 1000);
			flag = ! flag;
			timeLoop(time, timeEl);
		}
		buttonEl.innerHTML = i++;
	}

	buttonEl.addEventListener('click', cps);
});