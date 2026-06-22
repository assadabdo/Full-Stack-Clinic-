import "./Booking.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Booking = () => {
  return (
    <div>
      <form>
        <h2>حجز موعد </h2>

        <div className="contact-message">
          <TextField
            label="اسم المريض *"
            type="text"
            id="outlined-password-input"
            sx={{ width: "90%", margin: "0px auto" }}
          />
          <TextField
            label=" 
رقم الجوال *"
            type="text"
            id="outlined-password-input"
            sx={{ width: "90%", margin: "0px auto" }}
          />
          <TextField
            label="اسم الطبيب *"
            type="text"
            id="outlined-password-input"
            sx={{ width: "90%", margin: "0px auto" }}
          />
          <TextField
            type="date"
            id="outlined-password-input"
            sx={{ width: "90%", margin: "0px auto" }}
          />

          <TextField
            label="ملاحظات (اختياري)"
            type="text"
            id="outlined-password-input"
            sx={{ width: "90%", margin: "0px auto" }}
          />

          <Button
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
