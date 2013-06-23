# grunt-html2md

> Transform HTML files to Markdown in a Grunt task


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
      // Target-specific source file lists and/or options go here.
    },
  },
})
```


### Options

#### options.encoding

Type: `String`
Default value: `'utf8'`

The file encoding used for saving the resulting Markdown files. Not used in the current version.


### Usage Examples

#### Default Options

In this example, the default options are used, as there aren't any at the moment.
All the files matching the `src/*.html` and `legacy/*.html` selectors will be used
as HTML sources, which will be converted to Markdown files placed in the same folder
as the given source file.

```js
grunt.initConfig({
  html2md: {
    options: {},
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

In lieu of a formal styleguide, take care to maintain the existing coding style. 
Add unit tests for any new or changed functionality. 
Lint and test your code using [Grunt](http://gruntjs.com/).


## Release History
_(Nothing yet)_
