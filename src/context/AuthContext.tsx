import { auth } from "../firebase.js";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  UserCredential,
} from "firebase/auth";
import {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";

type AuthContextType = {
  currentUser: User | null;
  login: (
    email: string,
    password: string
  ) => Promise<UserCredential | undefined>;
  register: (
    email: string,
    password: string
  ) => Promise<UserCredential | undefined>;
  logout: () => Promise<void>;
};

type AuthContextProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({
  children,
}: AuthContextProps): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const register = async (email: string, password: string) => {
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      return await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    currentUser,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
