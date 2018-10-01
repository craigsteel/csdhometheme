/* eslint-disable */

const newLocal = 'use strict';

const gulp = require('gulp');
    pkg = require('./package.json');
    toolkit = require('gulp-wp-toolkit');

toolkit.extendConfig({
  theme: {
    name: 'csdhometheme',
    homepage: pkg.homepage,
    description: pkg.description,
    author: pkg.author,
    version: pkg.version,
    license: pkg.license,
    textdomain: pkg.name,
  },
  js: {
    'custom': [
      'develop/js/jquery.js',
      'develop/js/custom.js',
      'develop/js/customizer.js',
      'develop/js/navigation.js',
      'develop/js/skip-link-focus.js',
    ]
  },
  dest: {
    js: 
     'dist/js/', /* Output path. */
  //   outputStyle: 'compressed', /* Set expanded output style. */
  //   sourceMap: false,
  },

  server: {
    proxy: 'craigs-imac.local/craigsteeldesigntheme',
    online: true,
  },

  src: {
    zipuser: [
      'images/*',
      'inc/**/*',
      'vendor/**/*',
      'dist/*',
      'languages/*',
      'front-page.php',
      'functions.php',
      'LICENSE.md',
      'readme.txt',
      'screenshot.png',
      'style*',
    ],
    zipdev: [
      'develop/images/*',
      'develop/js/*',
      'develop/languages/*',
      'develop/scss/**/*',
      'images/*',
      'inc/**/*',
      'vendor/**/*',
      'dist/*',
      'languages/*',
      'CHANGELOG.md',
      'composer.json',
      'composer.lock',
      'front-page.php',
      'functions.php',
      'Gulpfile.js',
      'LICENSE.md',
      'package.json',
      'readme.txt',
      'README.md',
      'screenshot.png',
      'style*',
      '*.php',
    ],
  },
  css: {
    basefontsize: 16, // Used by postcss-pxtorem.
    cssnano: {
      discardComments: {
        removeAll: true,
      },
      zindex: false,
    },
    remreplace: false, // Used by postcss-pxtorem.
    remmediaquery: true, // Used by postcss-pxtorem.

    scss: {
      'style': {
        src: 'develop/scss/style.scss', /* Input file */
        dest: 'assets/css/', /* Output path. */
        outputStyle: 'expanded', /* Set expanded output style. */
        sourceMap: true,
      },
      'mainStyle' : {
        src: 'develop/scss/style.scss', /* Input file */
        dest: 'dist/css/', /* Output path. */
        outputStyle: 'compressed', /* Set compressed output style. */
        sourceMap: true,
      },
    },
  },
});

toolkit.extendTasks(gulp, {
  // Task Name.
  console: [
    ['build'],
    function () {
      console.log('This is an extended task. It depends on `build`');
    },
  ],
  'lint:php': [['lint:phpcs']], // How not to run lint:phpmd.
  'zip': [['zipuser', 'zipdev']],
  'zipuser': function () {
    return gulp.src(toolkit.extendConfig.src.zipuser, { base: './' }).
      pipe(zip(pkg.name + '-' + pkg.version + '.zip')).
      pipe(gulp.dest('dist'));
  },
  'zipdev': function () {
    return gulp.src(toolkit.extendConfig.src.zipdev, { base: './' }).
      pipe(zip(pkg.name + '-developer-' + pkg.version + '.zip')).
      pipe(gulp.dest('dist'));
  },
});
