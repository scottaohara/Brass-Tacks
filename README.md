# Brass Tacks -- Beta
(Last updated: 0.9.9 - May 14, 2016)

## Setting up your development environment

The only thing you <b>need</b> to use Brass Tacks is <b>Sass v 3.3+</b>.

Install SASS: http://sass-lang.com/install

__however__

You may use the included Grunt build.

This build process requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install dependencies with this command:

```shell
npm install
```


## Building your project

Watch for changes

```shell
grunt
```

Watch for changes with server at port `8000`

```shell
grunt server
```

or

```shell
grunt s
```

<hr />


## Brass Tacks Specifics

* Built for HTML5 enabled modern browsers (autoprefixer targets last 3 browsers)
* JavaScript light: only comes with a Google Analytics placeholder & link to HTML5shiv via CDN
* Mark-up demos & code snippets within the scss files
* Mixin, Silent Class and Variable libraries
* scss base, helper and skeleton setup for project files


### Sass Specifics

Brass Tacks' Sass files are split up into four base folders, and two optional folders, to help keep the code organized and easy to find.

* __globals
* _base-elements
* _helper-classes
* _project
* --addons
* --starter

Read more about the Sass file architecture and how to customize Brass Tacks in the <a href="https://github.com/scottaohara/Brass-Tacks/blob/master/_src/sass/README.md">Sass ReadMe.md</a>.
