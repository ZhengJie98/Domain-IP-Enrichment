(function () {
	'use strict';

	const PASS_INPUTS = document.querySelectorAll('input[type="password"]');

	// Paste truncation warning
	for (const INPUT of PASS_INPUTS) {
		const LABEL = INPUT.labels[0];
		const ERROR = document.createElement('div');
		ERROR.classList.add('error');
		ERROR.textContent = 'The password you pasted was truncated to ' + INPUT.maxLength + ' chars';

		INPUT.addEventListener('paste', function(ev) {
			let paste = (ev.clipboardData || window.clipboardData).getData('text');
			if (paste.length > INPUT.maxLength) {
				LABEL.parentNode.insertBefore(ERROR, LABEL);
			} else if (document.body.contains(ERROR)) {
				ERROR.parentNode.removeChild(ERROR);
			}
		}, {
			passive: true,
		});
	}


	// Caps lock warning
	for (const INPUT of PASS_INPUTS) {
		const LABEL = INPUT.labels[0];
		const ERROR = document.createElement('div');
		ERROR.classList.add('error');
		ERROR.textContent = 'Caps lock is on';

		INPUT.addEventListener('keydown', function(ev) {
			if (typeof ev.getModifierState !== 'function') {
				return;
			}

			if (ev.getModifierState('CapsLock') === false && ev.key === 'CapsLock') {
				// Turning capslock on
				LABEL.parentNode.insertBefore(ERROR, LABEL);
			} else if (ev.getModifierState('CapsLock') === true && ev.key === 'CapsLock') {
				// Turning capslock off
				if (document.body.contains(ERROR)) {
					ERROR.parentNode.removeChild(ERROR);
				}
			} else if (ev.getModifierState('CapsLock')) {
				// Any other keypress with capslock modifier
				LABEL.parentNode.insertBefore(ERROR, LABEL);
			} else {
				if (document.body.contains(ERROR)) {
					ERROR.parentNode.removeChild(ERROR);
				}
			}
		}, {
			passive: true,
		});
	}


	// Show password button
	for (const INPUT of PASS_INPUTS) {
		const LABEL = INPUT.labels[0];
		const IMG = LABEL.querySelector('img');

		// Don't error out if a password box
		// is missing the extra boilerpalte
		if (IMG === null) {
			return;
		}

		IMG.addEventListener('click', function () {
			if (INPUT.type === 'password') {
				INPUT.type = 'text';
				IMG.src = '/static/images/hide.svg';
			} else {
				INPUT.type = 'password';
				IMG.src = '/static/images/show.svg';
			}
		}, {
			passive: true,
		});
		IMG.addEventListener('keydown', function (e) {
			if (!(e.code === 'Enter' || e.code === 'Space')) {
				return;
			}

			e.preventDefault();

			if (INPUT.type === 'password') {
				INPUT.type = 'text';
				IMG.src = '/static/images/hide.svg';
			} else {
				INPUT.type = 'password';
				IMG.src = '/static/images/show.svg';
			}
		});
		INPUT.addEventListener('input', function(){
			IMG.hidden = (INPUT.value.length === 0);
		}, {
			passive: true,
		});
	}
})();
