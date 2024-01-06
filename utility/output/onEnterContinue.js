const ESC_KEY_CODE = 27;

export default async (context) => {
	process.stdin.setRawMode(true);

	return new Promise((resolve) => {
		console.log('');
		console.log(`${ context } Press any key to continue, [esc] to exit…`);

		process.stdin.once('data', (data) => {
			const byteArray = [...data];

			if (byteArray.length === 1 && byteArray[0] === ESC_KEY_CODE) {
				process.exit(0);
			}

			process.stdin.setRawMode(false);

			console.log('');
			console.log('████████████████████████████████████████████████████');
			console.log('');

			resolve();
		});
	});
};
