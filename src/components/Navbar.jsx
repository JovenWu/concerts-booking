import React from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const HandleClick = () => {
    navigate("/SignIn")
  }
  return (
    <div className="flex w-full px-4 items-center h-20 text-white font-semibold absolute z-10 ">
      <div className="text-xl font-bold md:text-2xl">
        <h1 className="hover:text-white/80"><a href="#">ConcertHub</a></h1>
      </div>

      <form className="flex max-w[720px] mx-4 p-2 w-[100px] sm:w-[200px] md:w-[300px] rounded-2xl text-black/50 bg-white">
        <button className="pr-2 text-gray-500">
          <FaSearch size={20} />
        </button>
        <input
          className="bg-transparent w-[60px] md:w-[250px] focus:outline-none"
          type="text"
          placeholder="Search for Event"
        ></input>
      </form>

      <div className="hidden sm:block mr-auto">
        <ul className="flex">
          <li className="hover:text-white/80"><button>About</button></li>
          <li className="hover:text-white/80"><button>My Tickets</button></li>
          <li className="hover:text-white/80"><button>Favorites</button></li>
        </ul>
      </div>

      <div className=" ml-auto">
        <button className="flex hover:text-white/80" onClick={HandleClick}>
          <h2 className="text-sm md:text-base px-2">Sign In</h2>
          <CgProfile size={30} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
