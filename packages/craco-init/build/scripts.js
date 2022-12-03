(function () {
  'use strict';
  const gulp = require('gulp');
  const tsconfig = require('../tsconfig.json');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*'],
  });

  gulp.task('scripts:cjs', function () {
    return gulp
      .src('src/index.ts')
      .pipe($.replace('export default ', 'export = '))
      .pipe($.jswork.pkgHeader())
      .pipe($.typescript({ ...tsconfig.compilerOptions, module: 'commonjs' }))
      .pipe(gulp.dest('dist'))
      .pipe($.size({ title: '[ minimize size ]:' }));
  });

  gulp.task('scripts:tpls', function () {
    return gulp.src('templates/*').pipe(gulp.dest('dist/templates'));
  });
})();
