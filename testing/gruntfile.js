module.exports = function(grunt) {

    // This is the configuration.
    grunt.initConfig({
      concat: {
        options: {
          separator: ';',
        },
        dist: {     //task
          src: 'mysourcecode.site/js/*.js',                 //target of a task
          dest: 'composite.all.js',
        },
      },
    });
    
      // Load the plugin that provides the "concat" task.
      grunt.loadNpmTasks('grunt-contrib-concat');
    
      // Default task(s).
      grunt.registerTask('default', ['concat',]);

    };