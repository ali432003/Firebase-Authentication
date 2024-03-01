import React from "react";
import { useState, useEffect } from "react";
import { auth, app } from "../../firebase";
import InputField from "../../Compoenets/InputField";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [values, setvalue] = useState({
    fname: "",
    email: "",
    pass: "",
  });
  const [error, seterror] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");


  const handleSubmit = () => {
    if (!values.fname || !values.email || !values.pass) {
      seterror(true);
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then((userCredential) => {
        seterror(false);
        setErrorMsg("");
        const user = userCredential.user;
        navigate('/login')
      })
      .catch((error) => {
        seterror(true);
        setErrorMsg(error.message.slice());
        console.log("error", error);
      });
  };
  

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
          onChange={(e) => {
            setvalue((prev) => ({ ...prev, fname: e.target.value }));
          }}
        />
        <InputField
          label={"Email"}
          placeholder={"Enter Email"}
          type={"email"}
          onChange={(e) => {
            setvalue((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
        <InputField
          label={"Password"}
          placeholder={"Enter Password"}
          type={"password"}
          onChange={(e) => {
            setvalue((prev) => ({ ...prev, pass: e.target.value }));
          }}
        />
        {error && (
          <p className="text-red-600 text-center font-bold mt-2">{ErrorMsg}</p>
        )}
        <button
          onClick={handleSubmit}
          className="my-4 py-2 tracking-wider font-bold text-lg bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white">
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
};

export default SignUp ;
