/**
 * grunt-html2md
 * https://github.com/paazmaya/grunt-html2md
 *
 * Copyright (c) Juga Paazmaya <paazmaya@yahoo.com> (https://paazmaya.fi)
 * Licensed under the MIT license.
 */


const grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/
exports.html2md = {
  setUp: function setUp(done) {
    // setup here if necessary
    done();
  },
  main: function main(test) {
    test.expect(1);

    const actual = grunt.file.read('test/fixtures/default.md');
    const expected = grunt.file.read('test/expected/default.md');
    test.equal(actual, expected, 'gfm conversion');

    test.done();
  },
  another: function another(test) {
    test.expect(1);

    const actual = grunt.file.read('test/fixtures/another.md');
    const expected = grunt.file.read('test/expected/default.md');
    test.equal(actual, expected, 'simple conversion');

    test.done();
  }
};
