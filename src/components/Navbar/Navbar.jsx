import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import NavbarText from './NavbarText';

function Navbar() {
    const [isBestSellersOpen, setIsBestSellersOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full mx-auto p-8 py-6 flex items-center justify-between z-50">
            <div className='text-white flex-initial font-montserrat font-normal text-4xl'>Essenza</div>
            
            <NavbarText 
            onBestSellersEnter={() => setIsBestSellersOpen(true)}
            onBestSellersLeave={() => setIsBestSellersOpen(false)}></NavbarText>

            <div className='relative'>
                <BestSellers isOpen={isBestSellersOpen}></BestSellers>
            </div>

        
            <div className='flex w-40 justify-around'>
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