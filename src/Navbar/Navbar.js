import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

const Navbar = () => {
    let handleMenu = () =>{
        console.log("Clicked");
    }
  return (
    <>
        <nav className='flex bg-white justify-between items-center p-2'>
            <a href='#' id='brand' className=' flex gap-2 items-center'>
                <img className=' object-cover max-w-12 max-h-12 ' src='/assets/asset 0.png' alt='logo' />
                <span className=' font-medium text-lg font-display'>ToDesktop</span>
            </a>
            <button className=' px-2 py-1' onClick={handleMenu}>
                <FontAwesomeIcon className=' text-gray-500' icon={faBars} />
            </button>
        </nav>
    </>
  )
}

export default Navbar