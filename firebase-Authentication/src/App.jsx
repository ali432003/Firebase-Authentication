import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import { auth, app } from "./firebase";

function App() {
  const [CurrUser, setCurrUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User is signed in :", user);
        setCurrUser(user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        // ...
      } else {
        console.log("Signed Out");
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home email={CurrUser.email} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
