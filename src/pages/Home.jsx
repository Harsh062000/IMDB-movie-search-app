import { useEffect, useState } from 'react';
import { searchMovie } from '../apis/omdb';
import axios from 'axios';

// components import
import MovieCard from '../components/MovieCard/MovieCard';
import './Home.css';

function Home() {

       const [movieList, setMovieList] = useState([]);

       async function downloadDefaultMovies(...args) {

              const urls = args.map((name) => searchMovie(name));
              const response = await axios.all((urls.map(url => axios.get(url))));
              const movies = await response.map((movieResponse) => movieResponse.data.Search);
              console.log(movies);
              setMovieList([].concat(...movies));
       }

       useEffect(() => {
              downloadDefaultMovies('harry', 'avengers');
       }, []);

       return (
              <>
                     {/* navbar */}
                     {/* Movie list */}
                     {/* pagination buttons */}

                     <div className='movie-card-wrapper'>
                            {movieList.length > 0 && movieList.map((movie) => {
                                   return (
                                          <MovieCard
                                                 key={movie.imdebId}
                                                 {...movie}
                                          />
                                   )
                            })}
                     </div>

              </>
       )
}

export default Home