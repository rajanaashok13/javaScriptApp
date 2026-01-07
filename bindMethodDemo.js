//Bind Method
const movie_info = {
  movieDetails: function () {
    return this.heroName + " " + this.villan;
  },
};
const pushpa = {
  heroName: "alluarjun",
  villan: "fahad fassile",
};

let res = movie_info.movieDetails.bind(pushpa);
console.log(res());
