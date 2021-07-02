
"use strict";
const numberOfFilms=+prompt('Сколько фильмов вы уже посмотрели?', "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const   a = prompt('Один из последних просмотренных фильмов?', ""),
        b = prompt('На сколько оцените его?', ""),
        c = prompt('Один из последних просмотренных фильмов?', ""),
        d = prompt('На сколько оцените его?', "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

let num = 50;
for (let i = 1; i<100; i++){
    if (num === 55){
        break;
    }
num++;
console.log(num);
}