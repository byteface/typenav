module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        sourceMap: true
      },
      my_target: {
        files: {
         '../dist/typenav.min.js': [ 'typenav.js' ],
         '../archive/chromeplugin/chrome-boilerplate/src/typenav.min.js': [ 'typenav.js' ]
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify'] );

};