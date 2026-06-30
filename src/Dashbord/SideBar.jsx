import { Icon } from "@mui/material";
import "./dashbord.css";

export const SideBar = ({ activeView, setActiveView }) => {
  return (
    <div className="side-container">
      <div className="clinic-managment">Clinic Admin</div>
      {/* <div
        className={`home ${activeView === "home" ? "active" : ""}`}
        onClick={() => setActiveView("home")}
      >
        <Icon className="fa-solid fa-house"></Icon>
        <span>Home</span>
      </div> */}
      <div
        className={`bookings ${activeView === "bookings" ? "active" : ""}`}
        onClick={() => setActiveView("bookings")}
      >
        <Icon className="fa-regular fa-calendar-days"></Icon>
        <span>Bookings</span>
      </div>
      <div
        className={`doctors ${activeView === "doctors" ? "active" : ""}`}
        onClick={() => setActiveView("doctors")}
      >
        <Icon className="fa-solid fa-stethoscope"></Icon>
        <span>Doctors</span>
      </div>
      <div
        className={`messages ${activeView === "messages" ? "active" : ""}`}
        onClick={() => setActiveView("messages")}
      >
        <Icon className="fa-regular fa-message"></Icon>
        <span>Messages</span>
      </div>
    </div>
  );
};
