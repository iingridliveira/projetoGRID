import React from "react";

const Header = ({ name, name1, name2 }) => {
  return (
    <header className="bg-pink-500 shadow rounded-bl-xl rounded-br-xl">
    <nav className="bg-gray-900 shadow-lg">
    <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
           
            <h1 className="text-white text-lg">
                <a href="index.html">
                    <span className="fa fa-book mr-2"></span> Tutee
                </a>
            </h1>

            
            <button className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none lg:hidden">
                <span className="fa fa-bars"></span>
            </button>


            
            <div className="hidden lg:flex lg:items-center lg:w-auto" id="navbarTogglerDemo02">
                <ul className="flex flex-wrap list-none mr-auto">
                    <li className="nav-item">
                        <a className="px-3 py-2 text-white hover:text-gray-300" href="index.html">{name}</a>
                    </li>
                    <li className="nav-item">
                        <a className="px-3 py-2 text-white hover:text-gray-300" href="about.html">{name1}</a>
                    </li>
                    <li className="nav-item">
                        <a className="px-3 py-2 text-white hover:text-gray-300" href="services.html">{name2}</a>
                    </li>
                </ul>
          
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
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
          <li>
            <a href="#" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Log in
            </a>
          </li>
        </ul>
      </div>

    </header>
  );
};

export default Header;
