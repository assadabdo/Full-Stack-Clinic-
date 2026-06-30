import { useState } from "react";
import { SideBar } from "./SideBar";
import { Messages } from "./Messages";
import { Bookings } from "./Bookings";
import { Doctors } from "./Doctors";
import { Home } from "./Home";

export const Dashbord = () => {
  const [activeView, setActiveView] = useState("bookings");

  const renderView = () => {
    switch (activeView) {
      // case "home":
      //   return <Home />;
      case "bookings":
        return <Bookings />;
      case "doctors":
        return <Doctors />;
      case "messages":
        return <Messages />;
      default:
        return <Bookings />;
    }
  };

  return (
    <div className="dashbord-container">
      <SideBar activeView={activeView} setActiveView={setActiveView} />
      {renderView()}
    </div>
  );
};
