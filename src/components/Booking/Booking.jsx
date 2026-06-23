import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./Booking.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { supabase } from "../utils/supabase";
import { useState } from "react";
export const Booking = () => {
  const [patient_name, setPatientName] = useState("");
  const [doctor_name, setDoctorName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data: userData } = await supabase.auth.getUser();
    const { error } = await supabase.from("Booking").insert({
      user_id: userData.user.id,
      patient_name,
      doctor_name,
      phone_number,
      date,
      notes,
    });

    if (error) {
      console.log("Error booking appointment:", error);
    }
  };

  const handlbook = () => {
    Swal.fire({
      title: "تهانينا!",
      text: "تم الحجز بنجاح",
      icon: "success",
    });
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>حجز موعد </h2>

        <div className="contact-message">
          <TextField
            onChange={(e) => setPatientName(e.target.value)}
            label="اسم المريض *"
            type="text"
            id="outlined-password-input"
            sx={{ width: "90%", margin: "0px auto" }}
          />
          <TextField
            onChange={(e) => setPhoneNumber(e.target.value)}
            label=" 
رقم الجوال *"
            type="text"
            id="outlined-password-input"
            sx={{ width: "90%", margin: "0px auto" }}
          />
          <TextField
            onChange={(e) => setDoctorName(e.target.value)}
            label="اسم الطبيب *"
            type="text"
            id="outlined-password-input"
            sx={{ width: "90%", margin: "0px auto" }}
          />
          <TextField
            onChange={(e) => setDate(e.target.value)}
            type="date"
            id="outlined-password-input"
            sx={{ width: "90%", margin: "0px auto" }}
          />

          <TextField
            onChange={(e) => setNotes(e.target.value)}
            label="ملاحظات (اختياري)"
            type="text"
            id="outlined-password-input"
            sx={{ width: "90%", margin: "0px auto" }}
          />

          <Button
            onClick={handlbook}
            type="submit"
            variant="contained"
            sx={{
              width: "90%",
              borderRadius: "7px",
              backgroundColor: "#1B3D6F",
              fontSize: "20px",
              margin: "0px auto",
            }}
          >
            تاكيد الحجز
          </Button>
        </div>
      </form>
    </div>
  );
};
