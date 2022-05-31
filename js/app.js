const apiUrl = "http://www.omdbapi.com/";
const apiKey = "5d016443";
const requestButton = document.getElementById('btn-request');

function linkBuilder(){
    let movieName = document.getElementById('input-search').value;
    let finalLink = `${apiUrl}?s=${movieName}&apikey=${apiKey}`;
    return finalLink;
}

function createElement(mostrador){
        let containerElement = document.querySelector(".movie-list")

        containerElement.innerHTML +=
        `<div class="movie">
            <div class="poster"><img src=${mostrador.Poster} alt="${mostrador.Title} Poster"></div>
            <div class="title"><span>${mostrador.Title}</span></div>
            <div class="year"><span>${mostrador.Year}</span></div>
        </div>`    
 }

requestButton.onclick = async function getMovie(){
    let inputSearch = document.getElementById('input-search').value;
    
    if (inputSearch == "" ){
        alert("O Campo filme precisa estar preenchido")
    }else{
        const response = await fetch(linkBuilder());
        const data = await response.json();
        let filmes = data.Search;
        
        filmes.map(function(filme){
            createElement(filme)       
        });
    }
}
