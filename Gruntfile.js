module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  var _src = '_src/',
    _dest = 'dist/',
    javascripts = _src + 'js/**/*.js';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    _dest: _dest,
    _src: _src,

    // Javascript Tasks
    // ---------------------------------------------

    jshint: {
      options: {
        jshintrc: './.jshintrc'
      },
      dev: [_src + 'js']
    },

    concat: {
      dev: {
        src: [javascripts],
        dest: _dest + 'js/app.js',
        separator: ';'
      }
    },

    uglify: {
      min: {
        src: [javascripts],
        dest: _dest + 'js/app.min.js'
      }
    },

    // CSS Tasks
    // ---------------------------------------------

    autoprefixer: {
      options: {},
      dev: {
        expand: true,
        flatten: true,
        src: _dest + 'css/*.css'
      }
    },

    sass: {
      dev: {
        options: {
          style: 'nested'
        },
        files: {
          "<%= _dest + 'css/master-brass-tacks.css' %>": "<%= _src + 'sass/master-brass-tacks.scss' %>",
          "<%= _dest + 'css/master-project.css' %>": "<%= _src + 'sass/master-project.scss' %>"
        }
      },
      min: {
        options: {
          style: 'compressed'
        },
        files: {
          "<%= _dest + 'css/master-brass-tacks.min.css' %>": "<%= _src + 'sass/master-brass-tacks.scss' %>",
          "<%= _dest + 'css/master-project.min.css' %>": "<%= _src + 'sass/master-project.scss' %>"
        }
      }
    },

    // HTML Tasks
    // ---------------------------------------------

    htmllint: {
      all: [_dest + '**/*.html']
    },

    // Image Tasks
    // ---------------------------------------------

   imagemin: {
     all: {
       files: [{
         expand: true,
         cwd: _dest + 'images/',
         src: ['**/*.{jpg,gif,png}'],
         dest: _dest + 'images/'
       }]
     }
   },

    // Misc Tasks
    // ---------------------------------------------

    connect: {
      server: {
        options: {
          base: _dest,
          hostname: '*',
          livereload: true,
          port: 8000
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      js: {
        files: [_src + 'js/**/*.js'],
        tasks: ['javascripts']
      },
      sass: {
        options: {
          livereload: false
        },
        files: [_src + 'sass/**/*.scss'],
        tasks: ['stylesheets']
      },
      css: {
        files: [_dest + 'assets/**/*.css'],
        tasks: []
      }
    }
  });

  grunt.registerTask('default', ['watch']);

  grunt.registerTask('javascripts', [
    'jshint',
    'concat',
    'uglify'
  ]);

  grunt.registerTask('stylesheets', [
    'sass'
  ]);

  grunt.registerTask('server', [
    'connect:server',
    'watch'
  ]);

  grunt.registerTask('s', [
    'server'
  ]);

  grunt.registerTask('build', [
    'javascripts',
    'stylesheets'
  ]);
};
