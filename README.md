# grunt-html2md

> Transform HTML files to Markdown in a Grunt task

[![Build Status](https://img.shields.io/travis/paazmaya/grunt-html2md.svg?style=flat-square)](https://app.travis-ci.com/paazmaya/grunt-html2md)
[![Maintainability](https://api.codeclimate.com/v1/badges/c00d6df47e1679798a98/maintainability)](https://codeclimate.com/github/paazmaya/grunt-html2md/maintainability)
[![dependencies Status](https://david-dm.org/paazmaya/grunt-html2md/status.svg)](https://david-dm.org/paazmaya/grunt-html2md)
[![Built with Grunt](http://img.shields.io/badge/Grunt-1.0-blue.svg?style=flat-square)](http://gruntjs.com/)


## Getting Started

This Grunt task plugin transforms the given HTML files to the
[Markdown format](http://daringfireball.net/projects/markdown/).

This plugin requires [Grunt](http://gruntjs.com/) `~1.0` and [Node.js](https://nodejs.org/en/)
version to be minimum of `14.15.0`, which is [the active Long Term Support (LTS) version](https://github.com/nodejs/Release#release-schedule), and
handles the transformation via
[HTML to Markdown converter](https://github.com/domchristie/to-markdown) `~3.1`.

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

["A Beginner's Guide to Open Source: The Best Advice for Making your First Contribution"](http://www.erikaheidi.com/blog/a-beginners-guide-to-open-source-the-best-advice-for-making-your-first-contribution/).

[Also there is a blog post about "45 Github Issues Dos and Don’ts"](https://davidwalsh.name/45-github-issues-dos-donts).

Linting is done with [ESLint](http://eslint.org) and can be executed with `npm run lint`.
There should be no errors appearing after any JavaScript file changes.

## Testing

Unit tests are done with [Nodeunit](https://github.com/caolan/nodeunit/ "Easy unit testing in node.js and the browser, based on the assert module").

```sh
npm install
npm run lint
npm test
```

## Version history

[Changes happening across different versions and upcoming changes are tracked in the `CHANGELOG.md` file.](CHANGELOG.md)

## License

Copyright (c) [Juga Paazmaya](https://paazmaya.fi) <paazmaya@yahoo.com>

Licensed under the [MIT license](LICENSE).
