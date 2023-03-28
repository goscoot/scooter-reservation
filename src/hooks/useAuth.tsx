import { auth } from "../../config/firebase.js";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";

export const useAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const authCheck = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
        // console.log("uid: " + user.uid);
      } else {
        setIsLogged(false);
        // console.log("user is not logged");
      }
    });
  };

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    setEmail,
    setPassword,
    register,
    logout,
    login,
    isLogged,
    authCheck,
  };
};

{
  /* Use case
<input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
<input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
<button onClick={login}>Sign In</button>
<button onClick={register}>Register</button>
<button onClick={logout}>Sign Out</button> 
*/
}
