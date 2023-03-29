import Head from "next/head";
import React from "react";

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

      <div className="flex flex-col justify-between w-full h-screen">
        <main className="flex-1 w-full">{children}</main>
      </div>
    </>
  );
}

export default Layout;
