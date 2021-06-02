import React from "react";
import Navbar from "../../components/Navbar";

export default function GeneralTemplate({ children }) {
  return (
    <div className="container">
      <Navbar />
      {children}
    </div>
  );
}
