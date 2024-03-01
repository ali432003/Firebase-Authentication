import React from 'react'
import {useState} from "react";
import { app } from '../../firebase'
import { auth } from '../../firebase'
import  InputField  from "../../Compoenets/InputField"
import { Link } from 'react-router-dom'



const SignUp = () => {
  const [values, setvalue] = useState([
    // fullName = "",
    // email ="",
    // password = "",
  ])



  return (
    <div className="bg-purple-300 min-h-[100vh] flex place-items-center justify-center">
      <div className="flex flex-col bg-purple-400 p-[2rem] border text-start rounded-lg md:w-[50rem] md:mx-[2rem] lg:w-[50rem] lg:mx-auto w-[20rem]">
        <h1 className="text-center text-4xl font-bold text-slate-800">
          Sign Up
        </h1>
        <InputField
          label={"Full Name"}
          placeholder={"Enter Your Full Name"}
          type={"name"}
        />
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
          Sign up
        </button>
        <footer>
          Already have an Account{" "}
          <Link to={"/login"} className="font-bold text-violet-700">
            Login
          </Link>{" "}
        </footer>
      </div>
    </div>
  );
}

export default SignUp