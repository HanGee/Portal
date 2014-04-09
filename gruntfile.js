module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            options: {
                mangle: false,
                sourceMap: 'public/build/js/main.min.js.map'
            },
            target: {
                files: {
                    'public/build/js/main.js': ['public/js/*.js']
                }
            }
        },
        copy: {
          image: {
            files: [
              {
                expand: true,
                cwd: 'public/img',
                src: '**.*{png,jpg,svg}',
                dest: 'public/build/img/'
              }
            ]
          }
        },
        sass: {
            main: {
                options: {
                    compass: true
                },
                files: {
                    'public/build/css/style.css': 'public/css/style.sass'
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            sass: {
                files: ['public/css/**/*.sass'],
                tasks: ['sass'],
                options: {
                    //
                }
            },
            js: {
                files: ['public/js/*.js'],
                tasks: ['uglify'],
                options: {
                    //
                }
            }
        },
        clean: {
          build: ['public/build']
        },
        bower: {
          install: {
            options: {
              copy: false,
              verbose: true
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bower-task');

    grunt.registerTask('default', ['build', 'watch']);
    grunt.registerTask('build', ['clean:build', 'bower', 'copy', 'uglify', 'sass']);
};
