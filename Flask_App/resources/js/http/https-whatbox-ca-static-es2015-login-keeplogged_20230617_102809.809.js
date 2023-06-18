(function () {
	'use strict';

	// If the browser has autofilled the password, the user is logging in from a
	// trusted device.
	// We can make it opt-out rather than opt-in on trusted devices
	const KEEPLOGGED = document.querySelector('input[name="keeplogged"]');
	const FORM = KEEPLOGGED.form;
	const SUBMIT = FORM.querySelector('input[type="submit"]');
	const INPUT = FORM.querySelector('input[autocomplete="current-password"]');

	new Promise(function (resolve) {
		// Chrome doesn't dispatch an event for autofill
		// so we check every 50ms until a timeout
		let timeout = setTimeout(function () {
			clearInterval(loop);
			resolve(false);
		}, 1500);
		let loop = setInterval(function () {
			let check;
			try {
				check = INPUT.matches(':autofill');
			} catch (error) {
				try {
					check = INPUT.matches(':-webkit-autofill');
				} catch (error) {
					check = false;
				}
			}

			if (check) {
				clearTimeout(timeout);
				clearInterval(loop);
				resolve(true);
			}
		}, 50);
	}).then(function (was_autofilled) {
		if (was_autofilled) {
			KEEPLOGGED.checked = true;
			SUBMIT.focus();
		}
	});
})();
