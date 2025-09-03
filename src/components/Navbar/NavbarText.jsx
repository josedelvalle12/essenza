import { Link } from "react-router-rom";
function NavbarText({ onBestSellersEnter, onBestSellersLeave }) {
    return (
        <nav className='flex w-3xl justify-evenly'>
            <link to="/" className='font-poppins text-white text-base font-normal hover:underline'>Home</link>
            <link to="/" className='font-poppins text-white text-base font-normal hover:underline'>Benefits</link>
            <link to="/" className='font-poppins text-white text-base font-normal hover:underline'>Trending</link>

            <span 
            onMouseEnter={onBestSellersEnter} 
            onMouseLeave={onBestSellersLeave} 
            className="font-poppins text-white text-base font-normal cursor-pointer hover:underline">
            Best Sellers
            </span>

            <link to="/shop" className='font-poppins text-white text-base font-normal hover:underline'>Shop</link>
        </nav>
    )
}

export default NavbarText;