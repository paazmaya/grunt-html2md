# grunt-html2md

> Transform HTML files to Markdown in a Grunt task

[![Build Status](https://img.shields.io/travis/paazmaya/grunt-html2md.svg?style=flat-square)](https://travis-ci.org/paazmaya/grunt-html2md)
[![Code Climate](https://img.shields.io/codeclimate/github/paazmaya/grunt-html2md.svg?style=flat-square)](https://codeclimate.com/github/paazmaya/grunt-html2md)
[![Dependency Status](https://img.shields.io/gemnasium/paazmaya/grunt-html2md.svg?style=flat-square)](https://gemnasium.com/paazmaya/grunt-html2md)
[![Built with Grunt](http://img.shields.io/badge/Grunt-1.0-blue.svg?style=flat-square)](http://gruntjs.com/)
[![Analytics](https://ga-beacon.appspot.com/UA-2643697-15/grunt-html2md/index?flat)](https://github.com/igrigorik/ga-beacon)


## Getting Started

This Grunt task plugin transforms the given HTML files to the
[Markdown format](http://daringfireball.net/projects/markdown/).

This plugin requires [Grunt](http://gruntjs.com/) `~1.0` and [Node.js](https://nodejs.org/en/)
version to be minimum of `4.2.0`, which is the Long Term Support (LTS) version, and
handles the transformation via
[HTML to Markdown converter](https://github.com/domchristie/to-markdown) `~3.0`.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the
[Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to
create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and
use Grunt plugins. Once you're familiar with that process,
you may install this plugin with this command:

```sh
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

Options are passed to the `to-markdown` handler, please see
https://github.com/domchristie/to-markdown for further details

#### options.gfm

Type: `boolean`

Default value: `false`

> GitHub Flavoured Markdown

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
      src: [
        'src/*.html',
        'legacy/*.html'
      ]
    },
  },
})
```

## Contributing

[Please refer to a GitHub blog post on how to create somewhat perfect pull request.](https://github.com/blog/1943-how-to-write-the-perfect-pull-request "How to write the perfect pull request")

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality.
Lint and test your code using [Grunt](http://gruntjs.com/).

## Testing

Unit tests are done with [Nodeunit](https://github.com/caolan/nodeunit/ "Easy unit testing in node.js and the browser, based on the assert module").

```sh
npm install
npm run lint
npm test
```

## Version history

* `v1.2.0` (2016-08-11)
  - Updating dependencies. Have you noticed it is now Grunt.js v1.0.0?
  - Use ESLint directly without the Grunt.js plugin
* `v1.1.0` (2016-02-15)
  - Updating dependencies
  - Minimum Node.js version supported is `4.2.0` (LTS)
* `v1.0.0` (2015-05-05)
  - Updating dependencies and better file configuration
* `v0.1.2` (2014-08-23)
  - Dependencies update and general code quality
* `v0.1.1` (2013-12-20)
  - Linting with eslint instead of JSHint for better coverage
* `v0.1.0` (2013-07-23)
  - Initial release


## License

Copyright (c) [Juga Paazmaya](https://paazmaya.fi) <paazmaya@yahoo.com>

Licensed under the [MIT license](LICENSE).

