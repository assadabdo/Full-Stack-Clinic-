import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Landing } from "./components/Landing/Landing";
import { Ourservices } from "./components/Oursevices/Ourservices";
import { Doctors } from "./components/Doctors/Doctors";
import { Contacts } from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Landing></Landing>
      <Ourservices></Ourservices>
      <Doctors></Doctors>
      <Contacts></Contacts>
      <Footer />
    </div>
  );
}

export default App;
