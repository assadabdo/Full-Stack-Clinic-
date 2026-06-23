import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Landing } from "./components/Landing/Landing";
import { Ourservices } from "./components/Oursevices/Ourservices";
import { Doctors } from "./components/Doctors/Doctors";
import { Contacts } from "./components/Contacts/Contacts";
import { Login } from "./components/LogIn/Login";
import { Routes, Route } from "react-router-dom";
import { Booking } from "./components/Booking/Booking";
import { CreateAcount } from "./components/LogIn/CreateAcount";
import Footer from "./components/Footer/Footer";
import { supabase } from "./components/utils/supabase";

function App() {
  const [session, Setsession] = useState(null);

  const FetchSission = async () => {
    const currentSession = await supabase.auth.getSession();
    Setsession(currentSession.data.session);
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };
  console.log(session);

  useEffect(() => {
    FetchSission();

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      Setsession(session);
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar session={session} />
              <Landing></Landing>
              <Ourservices></Ourservices>
              <Doctors></Doctors>
              <Contacts></Contacts>
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/booking" element={<Booking></Booking>} />
        <Route path="/createAcount" element={<CreateAcount></CreateAcount>} />
      </Routes>
    </div>
  );
}

export default App;
