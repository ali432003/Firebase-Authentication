import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="flex flex-col justify-center place-items-center ">
      <div className="flex flex-col text-4xl gap-y-3">
        <Link to={"/login"} className="text-violet-500">
          Login
        </Link>
        <Link to={"/signup"} className="text-violet-500">
          Sign Up
        </Link>
      </div>

      <h1 className="lg:text-[3rem] text-2xl mt-[4rem] text-center">
        Welcome {props.name} !!
      </h1>
      <h2 className="mt-3 text-xl lg:text-[2rem] text-center">Sign Up too see Your name above</h2>
    </div>
  );
};

export default Home;
