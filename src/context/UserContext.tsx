import { createContext, useState, PropsWithChildren, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase_setup/firebase";

const authContext = createContext(null);

function useAuth() {
  const [authed, setAuthed] = useState(undefined);
  const [userMail, setUserMail] = useState("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserMail(user.email);
      setAuthed(true);
    } else {
      setUserMail("");
      setAuthed(false);
    }
  });

  return {
    authed,
    userMail,
  };
}

export function AuthProvider({ children }: PropsWithChildren) {
  const authValues = useAuth();

  return (
    <authContext.Provider value={authValues}>{children}</authContext.Provider>
  );
}

export default function AuthConsumer() {
  return useContext(authContext);
}
