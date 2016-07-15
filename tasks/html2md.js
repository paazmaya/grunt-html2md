/**
 * grunt-html2md
 * https://github.com/paazmaya/grunt-html2md
 *
 * Copyright (c) Juga Paazmaya <paazmaya@yahoo.com> (https://paazmaya.fi)
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function html2md(grunt) {

  grunt.registerMultiTask('html2md', 'Transform HTML files to Markdown', function register() {

    var toMarkdown = require('to-markdown');
    var options = this.options({
      gfm: false
    });

    // Iterate over all specified file groups.
    this.files.forEach(function filesEach(f) {

      f.src.forEach(function eachSrc(filepath) {

        // Warn on and remove invalid source files (if no null was set).
        if (!grunt.file.exists(filepath) || !grunt.file.isFile(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
        }
        else {
          // Read file source.
          var html = grunt.file.read(filepath);

          // Convert
          var md = toMarkdown(html, options);

          // Replace suffix of source to create destination
          var dest = f.dest;
          if (!dest) {
            dest = filepath.substring(0, filepath.lastIndexOf('.')) + '.md';
          }

          // Write the destination file.
          grunt.file.write(dest, md, 'utf8');

          // Print a success message.
          grunt.log.writeln('File "' + dest + '" created.');
        }
      });
    });
  });

};
