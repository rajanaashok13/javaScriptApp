//  Multi line Strings
// Backtick
let description = `Vignan's Lara Institute of Technology & 
  Science (VLITS) is a well-regarded private engineering 
  college in Vadlamudi, Guntur District, Andhra Pradesh,
  established in 2007 `;
console.log(description);
// String interpolation
let firstname = "ashok";
let lastname = "rajana";
console.log(`${firstname} ${lastname}`);
//Array destructing
let p_names = ["realme", "vivo", "poco"];
let [brand1, brand2, brand3] = p_names;
console.log(brand1);
console.log(brand2);
console.log(brand3);
//object destructing
const movie_info = {
  moviename: "pushpa",
  moviehero: "alluarjun",
  moviedirector: "sukumar",
  movieproducer: "mytri",
};

let { moviename, moviehero, moviedirector, movieproducer } = movie_info;
console.log(film);
console.log(hero);
console.log(director);
console.log(producer);
