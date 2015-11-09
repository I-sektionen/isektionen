module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dev: {
                options: {
                    style: "expanded"
                },
                files: {
                    'css/<%= pkg.name %>.css': 'css/isektionen.sass'
                },
            },
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/src/*.js'],
                dest: 'js/<%= pkg.name %>.js'
            }
        },
        watch: {
            sass: {
                files: ['css/**/*.sass', 'css/**/*.scss'],
                tasks: ['sass:dev']
            },
            concat: {
                files: ['js/src/**/*.js'],
                tasks: ['concat:dist']
            }
        }
    });
    /**
     * Load Grunt plugins dynaically
     */
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['sass:dev', 'watch', 'concat']);
};