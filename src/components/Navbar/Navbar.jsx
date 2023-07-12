import React, { useState } from "react";
import logo from "../../assets/logo/hb390.png";
import { AiOutlineCloseSquare, AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-scroll";

const navLinksData = [
  {
    _id: 1001,
    title: "Home",
    link: "home",
  },
  {
    _id: 1002,
    title: "About",
    link: "about",
  },
  {
    _id: 1003,
    title: "Projects",
    link: "projects",
  },
  {
    _id: 1004,
    title: "Contact",
    link: "contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="black-gradient px-4 py-5 md:px-24 lg:px-8 sticky top-0 z-10">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="inline-flex items-center cursor-pointer"
        >
          <img src={logo} alt="logo" className="w-8 h-8" />
          <span className="ml-2 text-lg font-bold tracking-wide text-gray-200">
            | Habibul Bashar
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center hidden space-x-8 lg:flex">
          {navLinksData.map((item) => (
            <li
              key={item._id}
              className="text-lg font-normal text-gray-300 tracking-wide cursor-pointer hover:text-white duration-300"
            >
              <Link
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <AiOutlineMenuUnfold size={24} className="text-gray-200" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 black-gradient border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <li className="inline-flex items-center">
                      <img src={logo} alt="logo" className="w-6 h-6" />
                      <span className="ml-2 text-lg font-bold tracking-wide text-gray-200">
                        | Habibul Bashar
                      </span>
                    </li>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <AiOutlineCloseSquare
                        size={24}
                        className="text-gray-200"
                      />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-3">
                    {navLinksData.map((item) => (
                      <li
                        key={item._id}
                        className="text-base font-normal text-gray-300 tracking-wide cursor-pointer hover:text-white duration-300"
                      >
                        <Link
                          onClick={() => setIsMenuOpen(false)}
                          activeClass="active"
                          to={item.link}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
