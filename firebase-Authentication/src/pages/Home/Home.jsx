import React from "react";
import { Link } from "react-router-dom";
import { auth, app } from "../../firebase";
import { signOut } from "firebase/auth";

const Home = (props) => {


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful");
      })
      .catch((error) => {
        // An error happened.
        console.log("Error occured" , error);
      });
  }


  return (
    <div className="flex flex-col justify-center place-items-center ">
      <div className="flex flex-col text-4xl gap-y-3">
        <Link to={"/login"} className="text-violet-500">
          {props.email ? "" : "Login"}
        </Link>
        <Link
          to={"/signup"}
          className={`text-violet-500 ${props.email ? "hidden" : ""}`}>
          Sign Up
        </Link>
        <Link
          to={"/login"}
          className={`text-violet-500 ${props.email ? "" : "hidden"}`}
          onClick={handleSignOut}>
          Sign Out
        </Link>
      </div>

      <h1 className="lg:text-[3rem] text-2xl mt-[4rem] text-center">
        Welcome {props.email} !!
      </h1>
      {!props.email && (
        <h2 className="mt-3 text-xl lg:text-[2rem] text-center">
          Sign Up too see Your name above
        </h2>
      )}
    </div>
  );
};

export default Home;
