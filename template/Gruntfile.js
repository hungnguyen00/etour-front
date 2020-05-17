
module.exports = function(grunt) {
  var c_css_path = "sass",
    c_js_path = "dev/js",
    o_css_path = "public/css",
    o_js_path = "public/js";

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    // jshint: {
    //   all: ["Gruntfile.js", c_js_path + "/*.js"],
    //   options: {
    //     "-W105": true
    //   }
    // },
    sass: {
      dev: {
        options: {
          style: "expanded",
          sourcemap: false
        },
        files: [
          {
            expand: true,
            cwd: c_css_path,
            src: ["*.scss", "**/*.scss"],
            dest: o_css_path,
            ext: ".css"
          }
        ]
      },
      dist: {
        options: {
          style: "compressed",
          sourcemap: "none"
        },
        files: [
          {
            expand: true,
            cwd: c_css_path,
            src: ["*.scss", "**/*.scss"],
            dest: o_css_path,
            ext: ".css"
          }
        ]
      }
      // preset: {
      //   files: [
      //     {
      //       expand: true,
      //       cwd: c_css_path,
      //       src: ["**/*.sass"],
      //       dest: o_css_path,
      //       ext: ".css"
      //     }
      //   ]
      // }
      // plugin: {
      //   options: {
      //     debugInfo: true,
      //     lineNumbers: true
      //   },
      //   files: [
      //     {
      //       expand: true,
      //       cwd: c_css_path,
      //       src: ["**/*.scss"],
      //       dest: o_css_path
      //     }
      //   ]
      // }
    },
    uglify: {
      theme: {
        options: {
          beautify: true,
          sourceMap: true
        },
        files: [
          {
            expand: true,
            cwd: c_js_path,
            src: "**/*.js",
            dest: o_js_path
          }
        ]
      },

      jar: {
        options: {
          beautify: false,
          sourceMap: true
        },
        files: [
          {
            expand: true,
            cwd: c_js_path,
            src: "**/*.js",
            dest: o_js_path
          }
        ]
      }
    },

    watch: {
      // configFiles: {
      //   files: ["Gruntfile.js"],
      //   tasks: ["jshint"],
      //   options: {
      //     reload: true,
      //     spawn: false
      //   }
      // },

      // scripts: {
      //   files: [c_js_path + "/*.js"],
      //   tasks: ["jshint", "uglify:theme", "uglify:jar"],
      //   options: {
      //     spawn: false,
      //     livereload: true
      //   }
      // },
      css: {
        files: [c_css_path + "/**/*.scss"],
        tasks: ["sass:dev"],
        options: {
          spawn: false,
          livereload: true
        }
      }
      // preset: {
      //   files: [c_css_path + "/**/*.scss"],
      //   tasks: ["sass:preset"],
      //   options: {
      //     spawn: false,
      //     livereload: true
      //   }
      // }
    }
  });

  //loading tasks
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");

  //register tasks
  grunt.registerTask("dev", [
    // "jshint",
    "sass:dev",
    // "sass:plugin",
    // "sass:preset",
    // "uglify:theme",
    // "uglify:jar",
    "watch"
  ]);
  grunt.registerTask("build", ["sass:dist"]);
};
