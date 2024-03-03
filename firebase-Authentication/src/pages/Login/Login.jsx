import React, { useState  } from "react";
import { auth, app } from "../../firebase";
import InputField from "../../Compoenets/InputField";
import { Link , useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastAlert } from "../../utils/toast";

const Login = () => {


  const navigate = useNavigate()

  const [values, setValues] = useState({
    email:"",
    pass:"",
  })
  

  const handleLogin = ()=>{
    if ( !values.email || !values.pass) {
      ToastAlert("Fill All Fields", "warning");
      return;
    }
    
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        ToastAlert("Sucessfully loged in", "success");
        navigate('/home') 
      })
      .catch((error) => {
        ToastAlert(error.message, "error");
      });
  }
  



  return (
    <div className="bg-purple-300 min-h-[100vh] flex place-items-center justify-center">
      <div className="flex flex-col bg-purple-400 p-[2rem] border text-start rounded-lg md:w-[50rem] md:mx-[2rem] lg:w-[50rem] lg:mx-auto w-[20rem]">
        <h1 className="text-center text-4xl font-bold text-slate-800">Login</h1>
        <InputField
          label={"Email"}
          placeholder={"Enter Email"}
          type={"email"}
          onChange={(e) => {
            setValues((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
        <InputField
          label={"Password"}
          placeholder={"Enter Password"}
          type={"password"}
          onChange={(e) => {
            setValues((prev) => ({ ...prev, pass: e.target.value }));
          }}
        />
        
        <button
          onClick={handleLogin}
          className="my-4 py-2 tracking-wider font-bold text-lg bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white">
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
