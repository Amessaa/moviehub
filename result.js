let movieID = new URLSearchParams(window.location.search).get('title');
const resultGrid = document.getElementById('result-grid');

fetch(`http://www.omdbapi.com/?i=${movieID}&apikey=fc1fef96`).then((res) => res.json())
.then((data)=> displayMovieDetails(data));

function displayMovieDetails(details){
    resultGrid.innerHTML = 
    `<div class = "movie-poster">
        <img src = "${(details.Poster != "N/A") ? details.Poster : "image_not_found.png"}" alt = "movie poster">
    </div>
    <div class="movie-info">
    <div class = "movie-info1">
    <h1 class = "movie-title">${details.Title}</h1>
        <ul class = "movie-misc-info">
            <li class = "year">Year: ${details.Year}</li>
            <li class = "rated">Ratings: ${details.Rated}</li>
            <li class = "released">Released: ${details.Released}</li>
        </ul>
    </div>
    <hr>
        <div class="movie-info2">
        <p class = "plot"><b>Plot:</b> ${details.Plot}</p>
        <p class = "writer"><b>Writer:</b> ${details.Writer}</p>
        <p class = "actors">  <b>Actors: </b>${details.Actors}</p>
        <p class = "genre">   <b>Genre:</b> ${details.Genre}</p>
        <p class = "language"><b>Language:</b> ${details.Language}</p>
        <p class = "awards"><b><i class = "fas fa-award"></i></b> ${details.Awards}</p>
    </div>   
    </div>`

    ;
}
