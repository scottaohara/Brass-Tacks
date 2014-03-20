# Brass Tacks
###(Last updated: 0.9.3 - March. 20, 2014)

Brass Tacks is a professional front-end HTML5 and SCSS framework that incorporates and standardizes many widely used HTML and CSS elements.

Once Brass Tacks reaches the 1.0 release, there will be a full listing of "thank you"s to the many people who's work has influenced this framework.

As of version 0.9.1, even more of the code from previous releases has been significantly rewritten. Until a final 1.0 stamp can be put on the code, there won't be a 'live' version of the framework available for viewing.



## Setting up your dev environment

The only thing you <b>need</b> to use Brass Tacks is <b>Sass v 3.3+</b>.

Install SASS: http://sass-lang.com/install


However, I've also setup a Gulp task file to help minify and compile files.

Install Node.js: http://nodejs.org

Install Gulp Globally: <code>$ npm install gulp -g</code>(may require sudo)

Install Gulp for your project: <code>$ npm install gulp --save-dev</code>

Install Gulp plugins for Brass Tacks:

<code>$ npm install gulp-ruby-sass gulp-minify-css gulp-imagemin gulp-clean gulp-rename event-stream --save-dev</code>



## Building your dev environment

Enter <code>gulp</code> in the terminal to run all gulp tasks.

Enter <code>gulp watch</code> to fire of tasks on change to Sass, images or JavaScript.


<hr />


## Brass Tacks Specifics

* Built for HTML5 enabled modern browsers & IE9+
* JavaScript light: only comes with a Google Analytics placeholder & HTML5shiv via CDN
* Markup demos & code snippets within the scss files
* Sass Mixin, Silent Class and Variable libraries
* CSS base, helper and skeleton setup for project files
* Extensive demos, code patterns and documentation (this WILL exist by v 1.0)


### Sass Specifics

Brass Tacks' Sass files are split up into four base folders to help keep the code organized and easy to find.

* __globals
* _base-elements
* _helper-classes
* _project

Read more about the Sass file architecture and how to customize Brass Tacks in the <a href="https://github.com/scottaohara/Brass-Tacks/blob/master/_develop/css/README.md">Sass ReadMe.md</a>.


<hr />


### About

Brass Tacks was officially started in mid-2013, but really is based on the evolution of my coding style over many years. I have learned a lot from other developers in my field, and continue to do so on a daily basis. Those developers, as well as my own experiences have significantly steered the path of Brass Tacks' development.

Even though Brass Tacks isn't 'finished', it's pretty darn close to prime time. So go ahead and fork, download and use what's available in your project now. I'd love to get any feedback on the framework that you may have!

And if you do end up using Brass Tacks, please let me know.

I'd love to feature your work here.


<hr  />


#### In the Wild

I've already used earlier versions of Brass Tacks on websites I've built for freelance clients, as well as in other open source collaborations.

##### 2014
* bedlampublishing.com - 0.9.0.7
* scottohara.me - 0.9.0.7

##### 2013
* ghop.me - 0.7.3.1
* neocities.org - 0.6.2 - in combination w/Twitter Bootstraps
* spin-off (Ground Floor) created for all default NeoCities websites
* ecommerce website partnered w/ @xbuzz - 0.5.4
* ecommerce website partnered w/ @xbuzz - 0.4.2
* ecommerce website partnered w/ @xbuzz - 0.3.5
