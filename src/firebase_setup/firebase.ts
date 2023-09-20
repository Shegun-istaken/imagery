// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh9DfIXoakHjQac7KSfC6maiI3QIl68Sg",
  authDomain: "imagery-hng.firebaseapp.com",
  projectId: "imagery-hng",
  storageBucket: "imagery-hng.appspot.com",
  messagingSenderId: "767065346035",
  appId: "1:767065346035:web:c7ea9111f11548f25f4c86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

async function signUp(email: string, password: string) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return "success";
  } catch (error) {
    return { error: error.code };
  }
}

async function signIn(email: string, password: string) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return "success";
  } catch (error) {
    return { error: error.code };
  }
}

async function signOutAction() {
  try {
    await signOut(auth);
    return "success";
  } catch (error) {
    return { error: error.code };
  }
}

export { auth, signUp, signIn, signOutAction };
