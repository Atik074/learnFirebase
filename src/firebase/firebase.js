// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword  ,signInWithPopup

} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries





// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP319JJY1pwQ_bDE9ZUVZsRm0sWR3P_EU",
  authDomain: "testforreactive.firebaseapp.com",
  projectId: "testforreactive",
  storageBucket: "testforreactive.firebasestorage.app",
  messagingSenderId: "320097366338",
  appId: "1:320097366338:web:76fd1cf0f4c640565098db"
      
};

//


// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)
const provider = new GoogleAuthProvider();


//regiter for authentication
const registerWithEmailAndPassword = async (email, password) => {
      try {
          const res = await createUserWithEmailAndPassword(auth, email, password);
          const user = res.user;

          return user;
      } catch (err) {
        throw new Error(err)
      }
  };


// Authentication for login

const loginWithEmailAndPassword=async(email ,password)=>{
      try{
            const response  = await signInWithEmailAndPassword(auth, email, password)
            return response ;

      }catch(err){
        throw new Error(err)
      }
}


/// reset password

  const sendPasswordResetWithEmail =async(email)=>{
    try{
             await sendPasswordResetEmail(auth ,email)

    }catch(err){console.log(err)}
  }

  //google login 

  const signInWithGoogle =async()=>{
    try{
           const res = await signInWithPopup(auth ,provider)
           const user = res.user
         
           return user ;

    }catch(err){throw new Error(err)}
  }


export {
  auth ,
  registerWithEmailAndPassword ,
  loginWithEmailAndPassword ,
  sendPasswordResetWithEmail ,
  signInWithGoogle 
}