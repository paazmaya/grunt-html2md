/*
 * grunt-html2md
 * https://github.com/paazmaya/grunt-html2md
 *
 * Copyright (c) 2013 Juga Paazmaya
 * Licensed under the MIT license.
 */
module.exports = function (grunt) {
  'use strict';

  grunt.registerMultiTask('html2md', 'Transform HTML files to Markdown', function() {
    
    var toMarkdown = require('to-markdown').toMarkdown,
        options = this.options({
          encoding: 'utf8'
        });
    
    // Iterate over all specified file groups.
    this.filesSrc.forEach(function(filepath) {
    
      // Warn on and remove invalid source files (if nonull was set).
      if (!grunt.file.exists(filepath) || !grunt.file.isFile(filepath)) {
        grunt.log.warn('Source file "' + filepath + '" not found.');
      }
      else {
        // Read file source.
        var html = grunt.file.read(filepath);
        
        // Convert
        var md = toMarkdown(html);
      
        // Replace suffix of of src to create dest
        var dest = filepath.substring(0, filepath.lastIndexOf('.')) + '.md';

        // Write the destination file.
        grunt.file.write(dest, md, options);

        // Print a success message.
        grunt.log.writeln('File "' + dest + '" created.');
      }
    });
  });

};
