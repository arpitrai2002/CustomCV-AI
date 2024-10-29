import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="p-4 px-6 flex justify-between items-center shadow-lg bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <Link to="/">
        <img src="/logo.png" alt="Logo" className="w-24 h-auto cursor-pointer" />
      </Link>

      {isSignedIn ? (
        <div className="flex gap-3 items-center">
          <Link to={'/dashboard'}>
            <Button variant="outline" className="bg-indigo-600 hover:bg-gray-700 hover:text-white transition duration-300">
              Dashboard
            </Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button className="bg-indigo-600 text-white hover:bg-indigo-500 transition duration-300 shadow-md">
            Get Started
          </Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
