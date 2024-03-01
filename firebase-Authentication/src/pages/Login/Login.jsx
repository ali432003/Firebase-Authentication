import React from "react";
import { app } from "../../firebase";
import { auth } from "../../firebase";
import InputField from "../../Compoenets/InputField";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-purple-300 min-h-[100vh] flex place-items-center justify-center">
      <div className="flex flex-col bg-purple-400 p-[2rem] border text-start rounded-lg md:w-[50rem] md:mx-[2rem] lg:w-[50rem] lg:mx-auto w-[20rem]">
        <h1 className="text-center text-4xl font-bold text-slate-800">
          Login
        </h1>
        <InputField
          label={"Email"}
          placeholder={"Enter Email"}
          type={"email"}
        />
        <InputField
          label={"Password"}
          placeholder={"Enter Password"}
          type={"password"}
        />
        <button className="my-4 py-2 tracking-wider font-bold text-lg bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white">
          Login
        </button>
        <footer>
          Create an Account{" "}
          <Link to={"/signup"} className="font-bold text-violet-700">
            Sign Up
          </Link>{" "}
        </footer>
      </div>
    </div>
  );
};

export default Login;
