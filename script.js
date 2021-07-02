"use strict";
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', ""),
        b = prompt('На сколько оцените его?', "");
    (a != null && b != null && a != '' && b != "" && a.length < 50) ? personalMovieDB.movies[a] = b: i--;
    console.log(i)
};
if (+personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (+personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (+personalMovieDB.count > 30) {
    alert('Вы киноман')
} else if (personalMovieDB.count == " " || personalMovieDB.count == null) {
    alert('Произошла ошибка');
};
console.log(personalMovieDB);