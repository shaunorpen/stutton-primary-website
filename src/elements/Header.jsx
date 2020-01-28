import React from 'react';

import NavBar from './NavBar'

function Header () {
    return (
        <div className='bg-gray-300 p-8'>
            <NavBar />
            <h1 className='font-bold text-6xl text-gray-800 text-center'>Stutton CEVC Primary School</h1>
            <h2 className='text-xl text-center'>01473 328531 / admin@stuttonprimary.co.uk</h2>
        </div>
    )
}

export default Header