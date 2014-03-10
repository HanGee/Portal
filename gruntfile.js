module.exports = function (grunt) {

    grunt.initConfig({
        'gh-pages': {
            options: {
                base: 'build'
            },
            src: '**/*'
        },
        copy: {
            vendor: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: 'public/img/**/*',
                        dest: 'build/'
                    },{
                        expand: true,
                        cwd: 'src/',
                        src: 'vendor/**/css/**.css',
                        dest: 'build/'
                    },{
                        expand: true,
                        cwd: 'src/',
                        src: ['vendor/**/*.min.js', 'vendor/**/*.min.map'],
                        dest: 'build/'
                    },
                ]
            }
        },
        uglify: {
            options: {
                mangle: false,
                sourceMap: 'build/public/js/main.min.js.map'
            },
            target: {
                files: {
                    'build/public/js/main.js': ['src/public/js/*.js']
                }
            }
        },
        jade: {
            compile: {
                options:{
                    pretty: true
                },
                files: {
                    'build/index.html': 'src/views/index.jade'
                }
            }
        },
        sass: {
            main: {
                options: {
                    compass: true
                },
                files: {
                    'build/public/css/style.css': 'src/public/css/style.sass'
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            jade: {
                files: ['src/views/**/*.jade'],
                tasks: ['jade'],
                options: {
                    //
                }
            },
            html:{
                files: ['build/**/*.html']
            },
            sass: {
                files: ['src/public/css/**/*.sass', 'src/public/css/**/*.scss'],
                tasks: ['sass'],
                options: {
                    //
                }
            },
            js: {
                files: ['src/public/js/*.js'],
                tasks: ['uglify'],
                options: {
                    //
                }
            }
        },
        clean: {
          build: ["build"],
          vendor: ["src/vendor"]
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

    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-bower-task');

    grunt.registerTask('publish', ['build', 'gh-pages']);
    grunt.registerTask('default', ['build', 'watch']);
    grunt.registerTask('build', ['clean:build', 'bower', 'uglify', 'copy', 'jade', 'sass']);
};
