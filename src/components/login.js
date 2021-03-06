import React from "react";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import "../components/home.css";
import signInWithGoogle from "../providers/UserProvider";

import firebase from "firebase/app";
import auth from "../components/firebase";

import { UserContext } from "../providers/UserProvider";




function LoginSKILL() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const InWithGoogle = () => {
    auth.signInWithPopup(provider);
  };

  const user = useContext(UserContext);
  console.log(user);
  if (user.user != null) {


return(<>
<h1>hello Hello</h1>
</>)
    // return <Redirect to="/" />;




  } else {
    return (
      <>
        <section className=" mt-5 ">
          <div className="row justify-content-center">
            <div className="mainSec">
              <div className="w-11/12 dog"></div>
            </div>
          </div>
          <div className="mt-4 pt-4 row justify-content-center">
            <Link to="/" className="btn effect01" onClick={InWithGoogle}>
              <span>SignIn with Google</span>
            </Link>
          </div>
        </section>
      </>
    );
  }
}

export default LoginSKILL;
