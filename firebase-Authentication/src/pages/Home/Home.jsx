import React from "react";
import { Link } from "react-router-dom";
import { auth, app } from "../../firebase";
import { signOut } from "firebase/auth";
import { ToastAlert } from "../../utils/toast";

const Home = (props) => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        ToastAlert("Sign-out successful", "success");
        console.log("Sign-out successful");
      })
      .catch((error) => {
        // An error happened.
        ToastAlert(error.message, "error");
        console.log("Error occured", error);
      });
  };

  return (
    <div className="flex flex-col justify-center place-items-center ">
      <div className="flex bg-purple-100 w-full justify-between text-xl py-[1rem]">
        <div>
          <img alt="" src={`/img/default.png`} className="w-[3rem] ms-[1rem]"/>
        </div>
        <div className="flex gap-3 me-[1rem]">
          <Link
            to={"/"}
            className={`text-white font-bold bg-purple-500 p-2 rounded-md hover:bg-purple-700 ease-in duration-300 ${
              props.email ? "hidden" : ""
            }`}>
            Login
          </Link>
          <Link
            to={"/signup"}
            className={`text-white font-bold bg-purple-500 p-2 rounded-md hover:bg-purple-700 ease-in duration-300 ${
              props.email ? "hidden" : ""
            }`}>
            Sign Up
          </Link>
          <Link
            to={"/"}
            className={`text-white font-bold bg-purple-500 p-2 rounded-md hover:bg-purple-700 ease-in duration-300 ${
              props.email ? "" : "hidden"
            }`}
            onClick={handleSignOut}>
            Sign Out
          </Link>
        </div>
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
