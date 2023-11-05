import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import styles from '../styles/globals.css'
import BackgroundVideo from "../components/BackgroundVideo";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
