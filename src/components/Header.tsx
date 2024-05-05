const Header = ()=>{
    return (
        <header className="bg-grayCustom-gray text-white font-custom">
            <ul className="flex justify-between py-5 px-20 text-xl">
                <li className="hover hover:text-lightRed-red transition duration-300"><a href="#">Sliders</a></li>
                <li className="hover hover:text-lightRed-red transition duration-300"><a href="#">About</a></li>
                <li className="hover hover:text-lightRed-red transition duration-300"><a href="#">Other</a></li>
                <li className="hover hover:text-lightRed-red transition duration-300"><a href="#">Menu</a></li>
            </ul>
        </header>
    )
}

export default Header