module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    react: {
      options: {
        harmony: true
      },
      src: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['**/*.jsx'],
            dest: 'transpiled',
            ext: '.js'
          }
        ]
      },
      demo: {
        files: [
          {
            expand: true,
            cwd: 'demo',
            src: ['**/*.jsx'],
            dest: 'transpiled',
            ext: '.js'
          }
        ]
      },
      test: {
        files: [
          {
            expand: true,
            cwd: 'test',
            src: ['**/*.jsx'],
            dest: 'test-built',
            ext: '.js'
          }
        ]
      }
    },

    clean: {
      transpiled: ['transpiled'],
      test: ['test-built']
    },

    watch: {
      all: {
        files: [
          'src/**/*.jsx',
          'src/**/*.js',
          'test/**/*.jsx',
          'test/**/*.js'
        ],
        tasks: ['build'],
        options: {
          spawn: false
        }
      }
    },

    browserify: {
      test: {
        files: {
          'test_bundle.js': ['test-built/**/*.js']
        },
        options: {
          verbose: true
        }
      },
      release: {
        files: {
          'canon-react.js': ['src/**/*.jsx']
        },
        options: {
          transform: ['reactify']
        }
      },
      demo: {
        files: {
          'demo/bundle.js': ['transpiled/**/*.js']
        },
        options: {
          transform: ['reactify']
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! canon-react <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'canon-react.js',
        dest: 'canon-react.min.js'
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('build', [
    'clean:test',
    'react:src',
    'react:test',
    'browserify:test',
    'browserify:release',
    'uglify:build',
    'clean:transpiled'
  ]);

  grunt.registerTask('demo-build', [
    'react:src',
    'react:demo',
    'browserify:demo',
    'clean:transpiled'
  ]);

  grunt.registerTask('default', ['build']);

};
