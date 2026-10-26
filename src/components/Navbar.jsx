import { useLocation } from "react-router-dom";
import { navigation } from "../constants";
import { useState } from "react";
import yinyang from "../assets/yinyang.svg";

const Navbar = () => {
  const pathname = useLocation();
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setRotation(rotation + 180);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-[6.25rem]  z-50 backdrop-blur-2xl">
      <div className="fixed flex justify-between items-center lg:w-1/2 left-1/2 w-full -translate-x-1/2 p-5 transition-all duration-300">
        <a className="w-[5rem]" href="#home" onClick={handleClick}>
          <img
            src={yinyang}
            height={60}
            width={60}
            alt="TediLogo"
            className="block transition-transform duration-300"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </a>
        <nav className="space-x-3">
          {navigation.map((item) => (
            <a
              className={`font-code hover:text-sky-300 px-2 py-4 text-2xl ${
                item.url === pathname.hash ? "z-2 text-blue-900" : "text-n-1"
              }`}
              id={item.id}
              key={item.id}
              href={item.url}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
