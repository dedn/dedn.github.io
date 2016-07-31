var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'); //Подключаем Sass пакет



gulp.task('scss', function(){ // Создаем таск "sass"
    return gulp.src('css/sass/main.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('css')) // Выгружаем результата в папку app/css
});

gulp.task('watch', function() {
    gulp.watch('css/sass/**/*.scss', ['scss']); // Наблюдение за sass файлами
    // Наблюдение за другими типами файлов
});

gulp.task('default', ['watch', 'scss']);