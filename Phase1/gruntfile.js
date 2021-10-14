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
      uglify: {
        my_target: {
          files: {
            'composite.all.min.js': 'composite.all.js',
          }
        }
      },
      terser: {
        options: {
          // Task-specific options go here.
        },
        your_target: {
          // Target-specific file lists and/or options go here.
          files: {
            'tercomposite.all.min.js': 'composite.all.js',
        },
      },
    },
    });
    
      // Load the plugin that provides the "concat" task.
      grunt.loadNpmTasks('grunt-contrib-concat');
    
      // Default task(s).
      grunt.registerTask('default', ['concat','uglify','terser']);

      // load plugins for minification through uglify
      grunt.loadNpmTasks('grunt-contrib-uglify');

      //// load plugins for minification through terser
      grunt.loadNpmTasks('grunt-terser');

    };

    
