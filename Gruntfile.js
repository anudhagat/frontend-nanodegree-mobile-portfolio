module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            all: {
                files: [
                {
                    expand: true,
                    cwd: 'js/',
                    src: ['*.js'],
                    dest:'build/js/'
                },
                {
                    expand: true,
                    cwd: 'views/js/',
                    src: ['*.js'],
                    dest: 'build/views/js'
                }
                ],
            },
        },

        imagemin: {
            dynamic: {                         // Another target
                files: [
                    {
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'img/',
                    src: ['*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'build/img/'                  // Destination path prefix
                    },
                    {
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'views/images/',
                    src: ['*.{png,jpg,gif}', '!pizzeria.jpg'],   // Actual patterns to match
                    dest: 'build/views/images/'
                    }
                ]
            }
        },
        cssmin: {
            target: {
                files: [
                {
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*min.css'],
                    dest: 'build/css/',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'views/css/',
                    src: ['*.css', '!*min.css'],
                    dest: 'build/views/css/',
                    ext: '.css'
                }
                ]
            }

        },
        htmlmin: {
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true
                },
                files: {                                   // Dictionary of files
                    'build/index.html': 'index.html',     // 'destination': 'source'
                    'build/project-2048.html': 'project-2048.html',
                    'build/project-mobile.html': 'project-mobile.html',
                    'build/project-webperf.html': 'project-webperf.html',
                    'build/views/pizza.html': 'views/pizza.html'
                }
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['uglify', 'imagemin', 'cssmin', 'htmlmin']);

};