# grunt-html2md

> Transform HTML files to Markdown in a Grunt task

[![Build Status](https://travis-ci.org/paazmaya/grunt-html2md.png?branch=master)](https://travis-ci.org/paazmaya/grunt-html2md)
[![Code Climate](https://codeclimate.com/github/paazmaya/grunt-html2md.png)](https://codeclimate.com/github/paazmaya/grunt-html2md)
[![Dependency Status](https://gemnasium.com/paazmaya/grunt-html2md.png)](https://gemnasium.com/paazmaya/grunt-html2md)
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/paazmaya/grunt-html2md/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

## Getting Started

This Grunt task plugin transforms the given HTML files to the 
[Markdown format](http://daringfireball.net/projects/markdown/).

This plugin requires [Grunt](http://gruntjs.com/) `~0.4.1` and is dependant of 
[HTML to Markdown converter](https://github.com/domchristie/to-markdown) `~0.0.1`.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the 
[Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to 
create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and 
use Grunt plugins. Once you're familiar with that process, 
you may install this plugin with this command:

```shell
npm install grunt-html2md --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile 
with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-html2md');
```


## The "html2md" task

### Overview

In your project's Gruntfile, add a section named `html2md` to the data object passed 
into `grunt.initConfig()`.

```js
grunt.initConfig({
  html2md: {
    your_target: {
      // Target-specific source file lists and/or file write options go here.
    },
  },
})
```


### Options

Options are passed directly to 
[`grunt.file.write`](https://github.com/gruntjs/grunt/wiki/grunt.file) method.

#### options.encoding

Type: `String`
Default value: `'utf8'`

The file encoding used for saving the resulting Markdown files.


### Usage Examples

#### Default Options

In this example, the default options are used, as there aren't any at the moment.
All the files matching the `src/*.html` and `legacy/*.html` selectors will be used
as HTML sources, which will be converted to Markdown files placed in the same folder
as the given source file.

```js
grunt.initConfig({
  html2md: {
    main: {
      options: {
        encoding: 'utf8'
      },
      src: [
        'src/*.html',
        'legacy/*.html'
      ]
    },
  },
})
```


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. 
Add unit tests for any new or changed functionality. 
Lint and test your code using [Grunt](http://gruntjs.com/).

## Testing

Unit tests are done with [Nodeunit](https://github.com/caolan/nodeunit/ "Easy unit testing in node.js and the browser, based on the assert module").

```sh
npm install -g venus
```

## Release History

* 2014-08-23    v0.1.2    Dependencies update and general code quality
* 2013-12-20    v0.1.1    Linting with eslint instead of JSHint for better coverage
* 2013-07-23    v0.1.0    Initial release


## License

Copyright (c) 2013 Juga Paazmaya <olavic@gmail.com>

Licensed under the [MIT license](LICENSE-MIT).

