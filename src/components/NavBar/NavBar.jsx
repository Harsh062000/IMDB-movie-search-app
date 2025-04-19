import React from 'react'
import './NavBar.css';

function NavBar() {
       return (
              <div className='navbar-wrapper'>
                     <div>Movie Base</div>
                     <div className='search-bar'>
                            <input
                                   type='text'
                                   placeholder='What movie you are thinking about...'
                            />
                     </div>
                     <div>
                            Theme
                     </div>
              </div>
       )
}

export default NavBar