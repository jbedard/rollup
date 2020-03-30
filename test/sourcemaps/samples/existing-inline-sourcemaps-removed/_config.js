const assert = require('assert');

module.exports = {
	description: 'removes existing sourcemap files',
	async test(code) {
		assert.equal(code.match(/sourceMappingURL=data:/), null);
	},
};
