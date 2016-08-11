/**
 * grunt-html2md
 * https://github.com/paazmaya/grunt-html2md
 *
 * Copyright (c) Juga Paazmaya <paazmaya@yahoo.com> (https://paazmaya.fi)
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function gruntConf(grunt) {
  require('time-grunt')(grunt); // Must be first item
  require('jit-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['test/fixtures/*.md']
    },

    // Configuration to be run (and then tested).
    html2md: {
      main: {
        options: {
          gfm: true
        },
        src: [
          'test/fixtures/default.html'
        ]
      },
      another: {
        files: {
          'test/fixtures/another.md': 'test/fixtures/default.html'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  grunt.loadTasks('tasks');

  grunt.registerTask('test', ['clean', 'html2md', 'nodeunit']);
  grunt.registerTask('default', ['test']);
};
