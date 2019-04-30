import gulp from 'gulp';

//处理任务之间的关联关系 和 先后顺序
import gulpSequence from 'gulp-sequence';

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
