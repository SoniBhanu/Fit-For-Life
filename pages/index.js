import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { Inter } from "@next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";
import BackgroundVideo from "../components/BackgroundVideo";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const session = useSession();
  console.log("Session", session);
  if (session.data == null) {
    return <button onClick={signIn}>Login</button>;
    
    // return <login />
  }

  return (
    <>
      <div className="flex item-center justify-content h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        <h1>Hello {session?.data?.user?.name}</h1>
        <button onClick={signOut}>Logout</button>
      </div>
      <BackgroundVideo />
      <head>
        <title>Fit For Life</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.jpg" />
      </head>
    </>
  );
}
