import { auth } from "../../config/firebase.js";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";

export const useAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      alert(err);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      alert(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      alert(err);
    }
  };

  return {
    setEmail,
    setPassword,
    register,
    logout,
    login,
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
