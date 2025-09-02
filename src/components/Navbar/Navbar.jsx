import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import NavbarText from './NavbarText';

function Navbar() {
    return (
        <nav className="absolute mx-auto p-8 flex w-full items-center place-content-between z-50">
            <div className='text-white flex-initial font-roboto(Montserrat) font-normal text-4xl'>Essenza</div>

            <NavbarText></NavbarText>
        
            <div className='flex w-40 place-content-around'>
                <button className="text-white">
                    <SearchIcon></SearchIcon>
                </button>
                <button className="text-white">
                    <ShoppingCartIcon></ShoppingCartIcon>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;