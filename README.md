# Brass Tacks
###(Last updated: 0.9.1 - March. 05, 2014)

Brass Tacks is (will be) a professional front-end HTML5 and SCSS framework that incorporates and standardizes many widely used HTML and CSS elements.

Once Brass Tacks reaches the 1.0 release, there will be a full listing of thank yous to the many people who's work has influenced this framework.

As of version 0.9.1, even more of the code from previous releases has been significantly rewritten. Until a final 1.0 stamp can be put on the code, there won't be a 'live' version of the framework available for viewing.



## Setting up your dev environment

Install SASS: http://sass-lang.com/install

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

* HTML5 ready
* Built for modern browsers & IE9+ with some legacy browser fall backs
* JavaScript light: only comes with a Google Analytics placeholder & HTML5shiv via CDN
* Various HTML Demos & snippets
* CSS base, helper and project files
* Sass Mixin, Silent Class and Variable libraries
* Extensive inline and accompanying documentation (this WILL exist by v 1.0)


### Sass Specifics

Brass Tacks' Sass files are split up into four base folders to help keep the code organized and easy to find.

* __globals
* _base-elements
* _helper-classes
* _project

Each folder contains an '__import.scss' file to compile and arrange all of the sub-files in each folder. This means there is only one file per
folder type to import into master.scss.

E.g. The __globals folder contains all mixins, placeholders and vars that are used across the entire framework.

All the individual folders' import files collect into either:

* master.scss
* project.scss (or whatever you name this file.)

Finally, by running gulp, these files are compiled to expanded and minified CSS files and exported to the build/assets/css folder.


#### Customizing Brass Tacks

All the base and helper files in Brass Tacks are wrapped in conditional @if statements.

Customizing the CSS output is as simple as setting variables to True or False in the master.scss file.

You can also easily restyle base style declarations and helper classes, without needing to go into the framework default files. Use the <b>setup.scss</b> file in the <b>project</b> folder to override default Brass Tacks styling.


<hr />


### About

Brass Tacks was officially started in mid-2013, but really is based on the evolution of my coding style over many years. I have learned a lot from other developers in my field, and continue to do so on a daily basis. Those developers, as well as my own experiences have significantly steered the path of Brass Tacks' development.

Even though Brass Tacks isn't 'finished', it's pretty darn close to prime time. So go ahead and fork, download and use what's available in your project now. I'd love to get any feedback on the framework that you may have!

And if you do end up using Brass Tacks, please let me know. I'd love to feature your work here.


#### In the Wild

I've already used earlier versions of Brass Tacks on websites I've built
for freelance clients, as well as in other open source collaborations.

##### 2014
* bedlampublishing.com - 0.9.0.7
* scottohara.me - 0.9.0.7

##### 2013
* www.ghop.me - 0.7.3.1
* www.neocities.org - 0.6.2 - in combination w/Twitter Bootstraps
* ecommerce website w/ @xbuzz - 0.5.4
* spin-off (Ground Floor) created for all default NeoCities websites
* ecommerce website w/ @xbuzz - 0.4.2
* ecommerce website w/ @xbuzz - 0.3.5
