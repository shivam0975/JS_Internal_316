// Task 4: Movie List
// Create array of movie names.
// ➡ Add one movie
// ➡ Remove last movie
// ➡ Print final list using loop

let movies = ["Godfather" , "Bahubali" , "Angry Bird"];

movies.unshift("Harry Potter")

movies.pop();

for(let movie of movies){
    console.log(movie);
}