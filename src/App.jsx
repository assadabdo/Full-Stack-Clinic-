import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { supabase } from "./components/utils/supabase";

// Pages / Components
import Navbar from "./components/Navbar/Navbar";
import { Landing } from "./components/Landing/Landing";
import { Ourservices } from "./components/Oursevices/Ourservices";
import { Doctors } from "./components/Doctors/Doctors";
import { Contacts } from "./components/Contacts/Contacts";
import { Login } from "./components/LogIn/Login";
import { Booking } from "./components/Booking/Booking";
import { CreateAcount } from "./components/LogIn/CreateAcount";
import Footer from "./components/Footer/Footer";
import { Dashbord } from "./Dashbord/Dashbord";

function App() {
  const navigate = useNavigate();

  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);

  const getUserRole = async (userId) => {
    const { data, error } = await supabase
      .from("Profile")
      .select("role")
      .eq("user_id", userId)
      .single();

    if (error) {
      console.log("Role fetch error:", error);
      return null;
    }

    return data?.role;
  };

  useEffect(() => {
    const initSession = async () => {
      // Get current session from Supabase
      const { data } = await supabase.auth.getSession();

      const currentSession = data.session;
      console.log("Current session:", currentSession);
      setSession(currentSession);

      // If user exists, fetch role
      if (currentSession) {
        const userRole = await getUserRole(currentSession.user.id);
        setRole(userRole);
      }

      // Stop loading after session check
      setLoading(false);
    };

    initSession();
  }, []);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(
      async (_event, newSession) => {
        setSession(newSession);

        if (newSession) {
          const userRole = await getUserRole(newSession.user.id);
          setRole(userRole);
        } else {
          setRole(null);
        }
      },
    );

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (loading) return;
    if (!session) {
      return;
    }

    if (role === "admin") {
      navigate("/dashbord");
    } else {
      navigate("/");
    }
  }, [session, role, loading, navigate]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>
    );
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar session={session} />
              <Landing />
              <Ourservices />
              <Doctors />
              <Contacts />
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/createAcount" element={<CreateAcount />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/dashbord" element={<Dashbord />} />
      </Routes>
    </div>
  );
}

export default App;
