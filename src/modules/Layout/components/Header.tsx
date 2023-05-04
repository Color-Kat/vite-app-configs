import react from 'react';
import {Logo} from "@UI/Elements/Logo/Logo";
import {Link} from "react-router-dom";

export const Header = () => {

    return (
        <header className="flex justify-center items-center h-16 px-5 w-full bg-gray-100 text-gray-800">
            <div className="container flex justify-evenly items-center">
                <Logo />

                <Link to="/favourites" className="hover:underline">Favourites</Link>

                <a href="https://github.com/" target="_blank" className="hover:underline">GitHub</a>
            </div>
        </header>
    );
}