document.addEventListener('submit', function (e) {
	if (e.target.dataset.sent) {
		e.preventDefault();
	}
	e.target.dataset.sent = true;
	e.target.querySelector('input[type="submit"]').classList.add('loading');
});
