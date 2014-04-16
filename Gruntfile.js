/**
 * grunt-html2md
 * https://github.com/paazmaya/grunt-html2md
 *
 * Copyright (c) Juga Paazmaya <olavic@gmail.com>
 * Licensed under the MIT license.
 */
'use strict';
  
module.exports = function(grunt) {
  require('time-grunt')(grunt); // Must be first item

  // Project configuration.
  grunt.initConfig({
    eslint: {
      options: {
        config: 'eslint.json'
      },
      target: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ]
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['test/fixtures/*.md']
    },

    // Configuration to be run (and then tested).
    html2md: {
      main: {
        options: {
          encoding: 'ascii'
        },
        src: [
          'test/fixtures/default.html'
        ]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  grunt.loadTasks('tasks');

  require('jit-grunt')(grunt);

  grunt.registerTask('test', ['clean', 'eslint', 'html2md', 'nodeunit']);

  grunt.registerTask('default', ['test']);
};
