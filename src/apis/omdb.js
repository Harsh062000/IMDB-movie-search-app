export function searchMovie(term) {
       return `http://www.omdbapi.com/?apiKey=${import.meta.env.VITE_API_KEY}&s=${term}`;
}