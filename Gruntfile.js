module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.scss'],
          dest: 'public/css',
          ext: '.css'
        }]
      }
    },
    watch: {
      css: {
        files: ['sass/**/*.scss', 'public/index.html'],
        tasks: ['sass']
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '*',
          base: 'public'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['connect','watch','sass']);
  grunt.registerTask('server', ['connect']);
};