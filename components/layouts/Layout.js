import Head from "next/head";
import React from "react";

import Footer from "../utils/Footer";
import Navbar from "../utils/Navbar";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Ebraj | Portfolio</title>
        <meta
          name="description"
          content="Ebraj | Portfolio using NextJS and Tailwind CSS."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col w-full justify-between min-h-screen">
        <main className="w-full flex-1">{children}</main>
      </div>
    </>
  );
}

export default Layout;
