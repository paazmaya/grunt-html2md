/**
 * grunt-html2md
 * https://github.com/paazmaya/grunt-html2md
 *
 * Copyright (c) Juga Paazmaya <paazmaya@yahoo.com> (https://paazmaya.fi)
 * Licensed under the MIT license.
 */
'use strict';

const toMarkdown = require('to-markdown');

module.exports = function html2md(grunt) {

  const filterSrc = function filterSrc(filepath) {
    // Warn on and remove invalid source files (if no null was set).
    if (!grunt.file.exists(filepath) || !grunt.file.isFile(filepath)) {
      grunt.log.warn('Source file "' + filepath + '" not found.');
      return false;
    }
    return true;
  };

  const fileOpts = {
    encoding: 'utf8'
  };

  grunt.registerMultiTask('html2md', 'Transform HTML files to Markdown', function register() {

    const options = this.options({
      gfm: false
    });

    // Iterate over all specified file groups.
    this.files.forEach(function filesEach(files) {

      files.src.filter(filterSrc).forEach(function eachSrc(filepath) {

        // Read file source.
        const html = grunt.file.read(filepath, fileOpts);

        // Convert
        const md = toMarkdown(html, options);

        // Replace suffix of source to create destination
        let dest = files.dest;

        if (typeof dest !== 'string') {
          // Assume that destination to be written next to source
          dest = filepath.substring(0, filepath.lastIndexOf('.')) + '.md';
        }

        // Write the destination file.
        grunt.file.write(dest, md, fileOpts);

        // Print a success message.
        grunt.log.writeln('File "' + dest + '" created.');

      });
    });
  });

};
