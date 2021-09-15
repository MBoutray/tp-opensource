const API_KEY = 'api_key=ba1d5721b9f06403fa684e62acb56065';

const BASE_URL = 'https://api.themoviedb.org/3';

const API_URL = BASE_URL + '/discover/tv?sort_by=popularity.desc&' + API_KEY;


const IMG_URL = 'https://image.tmdb.org/t/p/w500';


const main = document.getElementById('main');

getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data=> {
        console.log(data.results);
        showMovies(data.results);
    })
}


function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie=> {
        const {name, poster_path, vote_average, overview} = movie;
        const movie1 =document.createElement('div');
        movie1.classList.add('movie');
        movie1.innerHTML = `
        <img src="${IMG_URL+poster_path}" alt="${name}">
        
        <div class="info-container">
            <div class="movie-info">
                <h2>${name}</h2>
                <p>${vote_average}</p>
            </div>

            <div class="overview">
                <h3>Overview</h3>
                ${overview};
            </div>
        </div>
        
        `

        main.appendChild(movie1);
    })
}