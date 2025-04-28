import { useRef } from 'react'
import './NavBar.css';

function NavBar() {

       const resultListRef = useRef(null);
       return (
              <div className='navbar-wrapper'>
                     <div>Movie Base</div>
                     <div className='search-bar'>
                            <input
                                   id='movie-search-input'
                                   type='text'
                                   placeholder='What movie you are thinking about...'
                                   onFocus={() => {
                                          resultListRef.current.style.display = 'block';
                                   }}

                                   onBlur={() => {
                                          resultListRef.current.style.display = 'none';
                                   }}
                            />
                            <div id='result-list' ref={resultListRef}>
                                   <div className='autocomplete-result'>result 1</div>
                                   <div className='autocomplete-result'>result 2</div>
                                   <div className='autocomplete-result'>result 3</div>
                                   <div className='autocomplete-result'>result 4</div>
                            </div>

                     </div>
                     <div>
                            Theme
                     </div>
              </div>
       )
}

export default NavBar