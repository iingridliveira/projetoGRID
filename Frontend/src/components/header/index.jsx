import React from "react";
import { Link } from "react-router-dom";
const Header = ({ name, name1, name2, name3 }) => {
  return (
        <header className="bg-custom-g shadow rounded-bl-xl rounded-br-xl fixed top-0 left-0 w-full z-50">

    <nav className="bg-custom-g shadow-lg">
    <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
           
            <h1 className="text-custom-gd text-lg">
                <a href="index.html">
                    <span className="fa fa-book mr-2"></span> Tutee
                </a>
            </h1>

            
            <button className="text-custom-gd inline-flex items-center justify-center p-2 rounded-md focus:outline-none lg:hidden">
                <span className="fa fa-bars"></span>
            </button>

            
            
            <div className="hidden lg:flex lg:items-center lg:w-auto" id="navbarTogglerDemo02">
                <ul className="flex flex-wrap list-none mr-auto">
                    <li className="nav-item">
                        <a className="px-3 py-2 text-custom-gd hover:text-gray-300" href="#Card">{name}</a>
                    </li>
                    <li className="nav-item">
                        <a className="px-3 py-2 text-custom-gd hover:text-gray-300" href="#Hero">{name1}</a>
                    </li>
                    <li className="nav-item">
                        <a className="px-3 py-2 text-custom-gd hover:text-gray-300" href="#Latter">{name2}</a>
                    </li>
                    
                </ul>
          
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          
             <Link className="ml-2 px-4 py-2 bg-custom-y text-custom-gd rounded-lg hover:bg-custom-teal" to={`/login`}>{name3}<span aria-hidden="true">&rarr;</span></Link>
         
             </div>
        </div>
        </div>
    </div>
</nav>
      <div className="lg:hidden">
        <ul className="space-y-1 px-2 pt-2 pb-3">
          <li className="text-base font-medium text-gray-900">{name}</li>
          <li className="text-base font-medium text-gray-900">{name1}</li>
          <li className="text-base font-medium text-gray-900">{name2}</li>
          <li className="ml-2 px-4 py-2 bg-custom-y text-custom-gd rounded-lg hover:bg-custom-g">
             <Link to={`/login`}>{name3}</Link>
          </li>
        </ul>
      </div>

    </header>
  );
};

export default Header;
