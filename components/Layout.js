import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
