const printResults = (errors, isTest) => {
	console.log('');

	if (errors.length === 0) {
		console.log('ESLint plugin rules up to date.');
	}
	else {
		errors.forEach((error) => {
			console.log(error);
		});

		if (isTest) {
			console.log('');
			throw new Error('ESLint rules out of date');
		}
	}
};

export default printResults;
