import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./Booking.css";
import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { supabase } from "../utils/supabase";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MenuItem from "@mui/material/MenuItem";

export const Booking = () => {
  const [patient_name, setPatientName] = useState("");
  const [doctor_name, setDoctorName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [date, setDate] = useState(null);
  const [notes, setNotes] = useState("");
  const [doctor, setDoctor] = useState([]);

  const [workingDays, setWorkingDays] = useState([]);

  const navigate = useNavigate();

  const handleDoctorChange = async (name) => {
    setDoctorName(name);
    console.log("doctorname", name);

    const { data, error } = await supabase
      .from("doctor_schedule")
      .select("*")
      .eq("doctor_name", name);

    if (error) {
      console.log("Error fetching doctor schedule:", error);
      return;
    }
    console.log("Doctor schedule:", data[0].working_days);
    setWorkingDays(data[0].working_days);
    // console.log("Working days:", workingDays);
  };
  const isAllowedDay = (date) => {
    const day = date.getDay();
    return workingDays.includes(day);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data: userData } = await supabase.auth.getUser();
    const { error } = await supabase.from("Booking").insert({
      user_id: userData.user.id,
      patient_name,
      doctor_name,
      phone_number,
      date: date ? date.toISOString().split("T")[0] : null,
      notes,
    });

    if (error) {
      console.log("Error booking appointment:", error);
    }
    Swal.fire({
      title: "تهانينا!",
      text: " تم الحجز بنجاح وسنقوم بالاتصال بك قريباً",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      const { data, error } = await supabase
        .from("doctor_schedule")
        .select("*");

      if (error) {
        console.log("Error fetching doctor schedule:", error);
        return;
      }
      setDoctor(data);
    };

    fetchDoctors();
  }, []);
  console.log(" first Doctor data:", doctor[0]);

  return (
    <div className="background">
      <div className="alig">
        <form onSubmit={handleSubmit}>
          <h3>حجز موعد </h3>

          <div className="contact-message">
            <TextField
              required
              onChange={(e) => setPatientName(e.target.value)}
              label="اسم المريض "
              type="text"
              id="outlined-password-input"
              sx={{ width: "90%", margin: "0px auto" }}
            />
            <TextField
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
              label="    ( واتساب) رقم الجوال"
              type="text"
              id="outlined-password-input"
              sx={{ width: "90%", margin: "0px auto" }}
            />
            <TextField
              required
              select
              onChange={(e) => handleDoctorChange(e.target.value)}
              label="اسم الطبيب "
              // type="text"
              // id="outlined-password-input"
              sx={{ width: "90%", margin: "0px auto" }}
            >
              <MenuItem value={doctor[0]?.doctor_name}>
                {doctor[0]?.doctor_name}
              </MenuItem>
              <MenuItem value={doctor[1]?.doctor_name}>
                {doctor[1]?.doctor_name}
              </MenuItem>
              <MenuItem value={doctor[2]?.doctor_name}>
                {doctor[2]?.doctor_name}
              </MenuItem>
              <MenuItem value={doctor[3]?.doctor_name}>
                {doctor[3]?.doctor_name}
              </MenuItem>
              <MenuItem value={doctor[4]?.doctor_name}>
                {doctor[4]?.doctor_name}
              </MenuItem>
              <MenuItem value={doctor[5]?.doctor_name}>
                {doctor[5]?.doctor_name}
              </MenuItem>
            </TextField>

            <div className="booking-date">
              <DatePicker
                required
                selected={date}
                onChange={(d) => setDate(d)}
                filterDate={isAllowedDay}
                minDate={new Date()}
                placeholderText="اختر موعد الحجز"
                className="date-picker booking-date-picker"
              />
            </div>

            <TextField
              onChange={(e) => setNotes(e.target.value)}
              label="ملاحظات (اختياري)"
              type="text"
              id="outlined-password-input"
              sx={{ width: "90%", margin: "0px auto" }}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "90%",
                borderRadius: "7px",
                backgroundColor: "#1B3D6F",
                fontSize: "20px",
                margin: "10px auto",
              }}
            >
              تاكيد الحجز
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
