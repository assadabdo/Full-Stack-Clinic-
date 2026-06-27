import { Icon } from "@mui/material";
import "./dashbord.css";

export const SideBar = () => {
  return (
    // <i class="fa-regular fa-message"></i>
    // <i class="fa-solid fa-stethoscope"></i>
    // <i class="fa-regular fa-calendar-days"></i>
    <div className="side-container">
      <div className="clinic-managment">Clinic Managment </div>
      <div className="bookings">
        <Icon className="fa-regular fa-calendar-days"></Icon>
        <span>Bookings</span>
      </div>
      <div className="doctors">
        <Icon className="fa-solid fa-stethoscope"></Icon>
        <span>Doctors</span>
      </div>
      <div className="messages">
        <Icon className="fa-regular fa-message"></Icon>
        <span>Messages</span>
      </div>
    </div>
  );
};
