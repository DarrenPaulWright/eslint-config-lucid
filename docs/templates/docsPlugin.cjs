'use strict';
const { join } = require('node:path');

module.exports = () => ({
	partial: join(__dirname, '/partials/main/**/*.hbs'),
	helper: join(__dirname, '../../node_modules/dmd-readable/helper.js')
});
