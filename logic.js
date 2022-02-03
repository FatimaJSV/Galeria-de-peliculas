const $fix = document.getElementById("banner");
let pelicula = 0;
$fix.src = movies[pelicula].posterurl;

function sig(){
    pelicula++;
    cambiopelicula();
    
    
}
function ant(){
    pelicula--;
    cambiopelicula();
    
}

const $info = document.getElementById( "ratings"); 
const $IN1 = document.getElementById( "releaseDate"); 
const $IN2= document.getElementById( "genres"); 
const $IN3 = document.getElementById( "actors"); 
const $nombre =document.getElementById("title");
const $read = document.getElementById("storyline");
function cambiopelicula(){
    $fix.src = movies[pelicula].posterurl;
    $nombre.textContent = movies[pelicula].title;
    $read.textContent = movies[pelicula].storyline;
    $info.textContent = prom(movies[pelicula].ratings);
    $IN1.textContent =movies[pelicula].releaseDate;
    $IN2.textContent =movies[pelicula].genres;
    $IN3.textContent =movies[pelicula].actors;


}
$nombre.textContent = movies[pelicula].title;
$read.textContent = movies[pelicula].storyline;
$IN1.textContent =movies[pelicula].releaseDate;
$IN2.textContent =movies[pelicula].genres;
$info.textContent = prom(movies[pelicula].ratings);
$IN3.textContent =movies[pelicula].actors;


function prom(ratings) {
    let suma = 0;
    for (let i = 0; i < ratings.length; i++){
        suma += ratings[i];
    }
return parseFloat(suma / ratings.length).toFixed(1) ;   
}

$info.textContent = prom(movies[pelicula].ratings)