class movie {
    constructor(title=null,studio=null,rating="PG") {

        this.title = title;
        this.studio = studio;
        this.rating = rating;
        
    }

    static getPG(movie){
        return movie.filter(movie => movie.rating.substring(0,2) == "PG")
    }
}

let aa = new movie(title = "Casino Royale", studio = "Eon Productions", rating = "PG13");


let cv = new movie();

cv.title = "aaa"; 
cv.studio="bbb"; 
cv.rating = "PG13";

let jj = new movie();

jj.title = "jjj"; 
jj.studio="kkk"; 
jj.rating = "PG";

console.log(movie.getPG([aa,cv,jj]))

/* output: [
  movie {
    title: 'Casino Royale',
    studio: 'Eon Productions',
    rating: 'PG13'
  },
  movie { title: 'aaa', studio: 'bbb', rating: 'PG13' },
  movie { title: 'jjj', studio: 'kkk', rating: 'PG' }
] */

