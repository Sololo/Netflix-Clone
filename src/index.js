//Consts
const apikey = "8d99168320785ca69d269538057bbbfa"
const apiEndpoint = "https://api.themoviedb.org/3"

const apiPaths = {
    fetchAllCategories: `${apiEndpoint}/genre/movie/list?api_key=${apikey}`
}

//Boots up the app 
function init() {
    fetchAndBuildAllSections();
}

function fetchAndBuildAllSections() {
    fetch(apiPaths.fetchAllCategories)
    .then(res => res.json())
    .then(res => {
        const categories = res.genres;
        if (Array.isArray(categories) && categories.length) {
            categories.forEach(category => {
                fetchAndBuildAllSections(category);
            });
        }
        //console.table(movies);
    })
    .catch(err=>console.error(err));
}

function fetchAndBuildMovieSection(category) {
    console.log(category)
}

window.addEventListener('load', function() {
    init();
})