import MovieCard from '../components/MovieCard/MovieCard';
import './Home.css';

function Home() {

       const Movie = {
              "Title": "Harry Doright's Prelude to Hell",
              "Year": "2008",
              "Type": "movie",
              "Poster": "https://m.media-amazon.com/images/M/MV5BZGUyNzU0OTgtZTM0NS00MWY0LWJhZjAtYzM5ZmZlY2IwNzhlXkEyXkFqcGdeQXVyNDU4ODIyNjU@._V1_SX300.jpg"
       }
       return (
              <>
                     {/* navbar */}
                     {/* Movie list */}
                     {/* pagination buttons */}

                     <div className='movie-card-wrapper'>
                            <MovieCard
                                   {...Movie}
                            />
                            <MovieCard
                                   {...Movie}
                            />
                            <MovieCard
                                   {...Movie}
                            />
                     </div>

              </>
       )
}

export default Home