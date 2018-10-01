'use strict';

var gulp = require('gulp'),
  pkg = require('./package.json'),
  toolkit = require('gulp-wp-toolkit');

toolkit.extendConfig({
  theme: {
    name: "WordPress Theme Name",
    homepage: pkg.homepage,
    description: pkg.description,
    author: pkg.author,
    version: pkg.version,
    license: pkg.license,
    textdomain: pkg.name
  },
  js: {
    'global': [ /* File will be output as global.js and global.min.js */
      'develop/js/customizer.js',
      'develop/js/navigation.js',
      'develop/js/skip-link-focus-fix.js',
      'develop/js/main.js'
    ],
  },
  server: {
    proxy: 'craigs-imac.local/craigsteeldesigntheme',
    online: true,
  },
  src: {
    zipuser: [
      'images/*',
      'includes/**/*',
      'includes-vendors/**/*',
      'js/*',
      'languages/*',
      'front-page.php',
      'functions.php',
      'LICENSE.md',
      'page_landing.php',
      'readme.txt',
      'screenshot.png',
      'style*',
    ],
    zipdev: [
      'development/images/*',
      'development/js/*',
      'development/languages/*',
      'development/scss/**/*',
      'images/*',
      'includes/**/*',
      'includes-vendors/**/*',
      'js/*',
      'languages/*',
      'CHANGELOG.md',
      'composer.json',
      'composer.lock',
      'front-page.php',
      'functions.php',
      'Gulpfile.js',
      'LICENSE.md',
      'package.json',
      'page_landing.php',
      'readme.txt',
      'README.md',
      'screenshot.png',
      'style*',
    ],
  },
  css: {
    basefontsize: 16, // Used by postcss-pxtorem.
    cssnano: {
      discardComments: {
        removeAll: true
      },
        zindex: false,
      },
      remreplace: false, // Used by postcss-pxtorem.
      remmediaquery: true, // Used by postcss-pxtorem.
      'woocommerce': { /* Output filename */
    scss: {
        src: 'develop/scss/woocommerce.scss', /* Input file */
        dest: 'css/' /* Output path. */
      },
      'edd': { /* Output filename */
        src: 'develop/scss/edd.scss', /* Input file */
        dest: 'css/', /* Output path. */
        outputStyle: 'compressed', /* Set expanded output style. */
        sourceMap: false,
      },
    },
  },
}),

toolkit.extendTasks(gulp, {
  // Task Name.
  console: [
    ['build'],
    function () {
      console.log('This is an extended task. It depends on `build`');
    },
    ],
    'something-conditional': [
      'develop/js/standalone.js'
    ]
  }
});
