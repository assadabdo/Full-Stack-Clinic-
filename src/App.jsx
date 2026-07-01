import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { supabase } from "./components/utils/supabase";

// Components
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
  const [session, setSession] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔐 Fetch user role from DB
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

  // 🔐 Initial session check (runs once)
  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getSession();

      const currentSession = data.session;
      setSession(currentSession);

      if (currentSession) {
        const userRole = await getUserRole(currentSession.user.id);
        setRole(userRole);
      }

      setLoading(false);
    };

    init();
  }, []);

  // 🔐 Listen to login/logout changes
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

  // ⏳ Loading state
  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>
    );
  }

  // 🔐 Protected route for admin only
  const AdminRoute = ({ children }) => {
    if (!session) return <Navigate to="/login" />;
    if (role !== "admin") return <Navigate to="/" />;
    return children;
  };

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
        <Route
          path="/dashbord"
          element={
            <AdminRoute>
              <Dashbord />
            </AdminRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
