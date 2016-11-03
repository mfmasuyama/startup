import Movie from "movie";
import Logger from "logger";
import Social from "social";
import Actor from "actor";

// 2 DONE
let movie1 = new Movie("Notebook", 2004, 123);
let movie2 = new Movie("Star Wars: Episode II - Attack of the Clones", 2002, 142);
let movie3 = new Movie("SlumdogMillonaire", 2008, 120);

Social.call(movie1);

// 7 DONE
let actor1 = new Actor("Ryan", "Gosling");
let actor2 = new Actor("Rachel", "McAdams");
let actor3 = new Actor("James", "Garner");
let actor4 = new Actor("Gena", "Rowlands");
let actors = [actor2, actor3, actor4];

movie1.addCast(actor1);
movie1.addCast(actors);
