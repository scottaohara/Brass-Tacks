# Brass Tacks -- Beta
###(Last updated: 0.9.8.4 - February 25, 2014)

Brass Tacks is a professional Sass framework (written in the .scss syntax) that incorporates and standardizes many widely used HTML and CSS elements.

Note: Until a final 1.0 stamp can be put on the code, there won't be a 'live' version of the framework available for viewing as there are still decisions being made on class names and some final thoughts to the structure of the files and base styling.

However, the master branch is perfectly fine to use on projects right now. Version branches are where code updating and testing occurs, and while 'broken' code is never meant to be submitted, the version branches may contain 'in-progress' code that has bugs.



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

Read more about the Sass file architecture and how to customize Brass Tacks in the <a href="https://github.com/scottaohara/Brass-Tacks/blob/master/_develop/sass/README.md">Sass ReadMe.md</a>.


<hr />


### About

Brass Tacks was officially started in mid-2013, but really is based on the evolution of my coding style over many years. I have learned a lot from other developers in my field, and continue to do so on a daily basis. Those developers, as well as my own experiences have significantly steered the path of Brass Tacks' development.

Even though Brass Tacks isn't 'finished', it's pretty close to prime time. So go ahead and fork, download and use what's available in your project now. I'd love to get any feedback on the framework that you may have!

And if you do end up using Brass Tacks, please let me know.

I'd love to feature your work here.

<hr />

A couple of shouts outs to people that have inspired this project of mine by either their own open-source projects or by critical feedback:

@csswizardry
@stubbornella
@kevincennis
@spmurrayzzz
@nicoleglynn

Also

normalize.css - incredibly important for browser consistency.
min.css - for making me think of ways to cut down the file size of Brass Tacks.
inuit.css - for inspiring various structural aspects of this framework.

And many more really... thank you all.


<hr  />


#### In the Wild

Versions of Brass Tacks have been used on the sites listed below:

##### 2014
* painease.med.yale.edu/PainEASE = 0.9.6.6
* nikkisnow.com - 0.9.6.5
* painease.med.yale.edu/PainEASE - 0.9.5
* bedlampublishing.com - 0.9.0.7
* scottohara.me - 0.9.0.7

##### 2013
* ghop.me - 0.7.3.1
* neocities.org - 0.6.2 - in combination w/Twitter Bootstraps
* spin-off (Ground Floor) created for all default NeoCities websites
* ecommerce website partnered w/ @xbuzz - 0.5.4
* ecommerce website partnered w/ @xbuzz - 0.4.2
* ecommerce website partnered w/ @xbuzz - 0.3.5
