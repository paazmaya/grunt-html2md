/*
 * grunt-html2md
 * https://github.com/paazmaya/grunt-html2md
 *
 * Copyright (c) 2013 Juga Paazmaya
 * Licensed under the MIT license.
 */
module.exports = function(grunt) {
  'use strict';

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

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'eslint', 'html2md', 'nodeunit']);

  // By default, run all tests.
  grunt.registerTask('default', ['test']);

};
