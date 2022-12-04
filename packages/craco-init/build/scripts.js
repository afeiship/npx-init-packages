'use strict';

const gulp = require('gulp');
const { execSync } = require('child_process');

gulp.task('scripts:cjs', async function () {
  execSync('tsc', { stdio: 'inherit' });
});

gulp.task('scripts:tpls', function () {
  return gulp.src('src/tpls/*').pipe(gulp.dest('dist/tpls'));
});
