"use client"
import { auth, googleAuthProvider } from '@/lib/firebase';
import React from 'react'
import { FaGoogle } from "react-icons/fa";

const page = () => {
  const user = null;
  const username = null;
  return (
    <main>
      {user ?
        !username ? <UsernameForm /> : <SignOutButton />
        :
        <SignInButton />
      }
    </main>
  )
}

const SignInButton = () => {
  const signInWithGoogle = async () =>{ 
    await auth.signInWithPopup(googleAuthProvider);
  }
  

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <FaGoogle className="google-icon"/>
      <p>Sign in with <span>Google</span></p>
    </button>
  )
}

const SignOutButton = () => {
  return (
    <button onClick={() => auth.signOut()}>
      Sign out
    </button>
  )
}

const UsernameForm = () => {
  return (
    <div></div>
  )
}

export default page
