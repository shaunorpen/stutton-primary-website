import React from 'react';

import logo from '../images/Asset_Logo.png';

function Header () {
    return (
        <div className="flex items-center justify-between bg-green-300 p-3">
            <div>
                <img src={logo} alt="Asset Education Logo" />
            </div>
            <div>
                <ul className="flex text-blue-600">
                    <li className="ml-5">Home</li>
                    <li className="ml-5">Our School</li>
                    <li className="ml-5">Teaching and Learning</li>
                    <li className="ml-5">How we are performing</li>
                    <li className="ml-5">Useful information</li>
                    <li className="ml-5">News</li>
                    <li className="mx-4">Contact us</li>
                </ul>
            </div>
        </div>
    )
}

export default Header