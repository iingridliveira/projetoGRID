import React from "react";

const Header = ({ name, name1, name2 }) => {
  return (
    <header className="bg-pink-500 shadow rounded-bl-xl rounded-br-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 ">
        <div className="flex flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Logo" />
          </a>
        </div>
        <div className="hidden lg:flex lg:space-x-8">
          <ul className="flex space-x-4">
            <li className="text-sm font-semibold leading-6 text-gray-900">{name}</li>
            <li className="text-sm font-semibold leading-6 text-gray-900">{name1}</li>
            <li className="text-sm font-semibold leading-6 text-gray-900">{name2}</li>
          </ul>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            aria-label="Open main menu"
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      <div className="lg:hidden">
        <ul className="space-y-1 px-2 pt-2 pb-3">
          <li className="text-base font-medium text-gray-900">{name}</li>
          <li className="text-base font-medium text-gray-900">{name1}</li>
          <li className="text-base font-medium text-gray-900">{name2}</li>
          <li>
            <a href="#" className="block text-base font-medium text-gray-900">
              Log in
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
