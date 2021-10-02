// module.exports = function (grunt) {
//     grunt.initConfig({

//     // define source files and their destinations
//     uglify: {
//         //files: { 
//             all_src : { 
//                 options : { 
//                   sourceMap : true, 
//                   sourceMapName : 'sourceMap.map'
//                 }, 
//             src: 'mysourcecode.site/js/*.js',  // source files mask
//             dest: 'composite.all.min.js',    // destination folder
            
//             expand: true,    // allow dynamic building
//             flatten: true,   // remove all unnecessary nesting
//             //ext: '.min.js'   // replace .js to .min.js
//             }
//         },
//     watch: {
//         js:  { files: 'js/*.js', tasks: [ 'uglify' ] },
//     }
// });

// // load plugins
// grunt.loadNpmTasks('grunt-contrib-watch');
// grunt.loadNpmTasks('grunt-contrib-uglify');

// // register at least this one task
// grunt.registerTask('default', [ 'uglify' ]);


// };



module.exports = function(grunt) {

    // This is the configuration.
    grunt.initConfig({
      concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: 'mysourcecode.site/js/*.js',
          dest: 'composite.all.min.js',
        },
      },
    });
    
      // Load the plugin that provides the "concat" task.
      grunt.loadNpmTasks('grunt-contrib-concat');
    
      // Default task(s).
      grunt.registerTask('default', ['concat']);
    };

    