const apiUrl = "http://www.omdbapi.com/";
const apiKey = "5d016443";
class HttpService{
    linkBuilder(movieName) {
        let finalLink = `${apiUrl}?s=${movieName}&apikey=${apiKey}`;
        return finalLink;
    }

    async searchMovies(movieName):Movie[] {
        const response = await fetch(linkBuilder(movieName));
        const data = await response.json();
        return data.Search.map((obj) => new Movie(obj));
    }
}

export default new HttpService();