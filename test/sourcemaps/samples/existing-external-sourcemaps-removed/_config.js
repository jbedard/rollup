const assert = require('assert');

module.exports = {
	description: 'removes existing inline sourcemap comments',
	async test(code) {
		assert.equal(code.match(/sourceMappingURL=main\.js\.map/), null);
		assert.equal(code.match(/sourceMappingURL=other\.js\.map/), null);
	},
};
