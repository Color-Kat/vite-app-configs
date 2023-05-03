import react from 'react';
import {Link} from "react-router-dom";

export const Logo = () => {
    return (
        <div className="logo font-ubuntu-mono text-3xl font-bold text-gray-900">
            <Link to="/home">GH</Link>
        </div>
    );
}