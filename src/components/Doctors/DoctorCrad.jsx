{
  /* <i class="fa-solid fa-calendar-check"></i> */
}
{
  /* <i class="fa-solid fa-arrow-left"></i> */
}
{
  /* <i class="fa-solid fa-xmark"></i> */
}
import { useEffect } from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import { supabase } from "../utils/supabase";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
export const DoctorCard = ({
  Dname,
  specialization,
  description,
  borderColor,
  backgroundColor,
}) => {
  const [isBooked, setIsBooked] = useState(false);
  const navigate = useNavigate();
  const handleCancel = async () => {
    const { data: userData } = await supabase.auth.getUser();

    if (!userData.user) {
      return;
    }

    const { error } = await supabase
      .from("Booking")
      .delete()
      .eq("user_id", userData.user.id)
      .eq("doctor_name", Dname);

    if (error) {
      console.log("error while caneling", error);
    }
    setIsBooked(false);
  };

  const book = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      if (isBooked) {
        handleCancel();
      } else {
        navigate("/booking");
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "يجب تسجيل الدخول",
        text: "يرجى تسجيل الدخول أولاً لحجز موعد",
        confirmButtonText: "تسجيل الدخول",
      }).then(() => {
        navigate("/login");
      });
    }
  };

  useEffect(() => {
    const checkBooking = async () => {
      const { data: userData } = await supabase.auth.getUser();

      if (!userData.user) {
        return;
      }

      const { data, error } = await supabase
        .from("Booking")
        .select("*")
        .eq("user_id", userData.user.id)
        .eq("doctor_name", Dname);

      if (error) {
        console.log("error", error);
      }

      setIsBooked(data?.length > 0);
    };

    checkBooking();
  }, []);
  return (
    <div
      className="doctor-card"
      style={{ borderTop: `5px solid ${borderColor}` }}
    >
      <div className="aligment">
        <h3 className="doctor-name"> د/ {Dname}</h3>
        <div
          className="specialization"
          style={{ backgroundColor: backgroundColor, color: borderColor }}
        >
          {specialization}
        </div>
        <p className="doctor-desc">{description}</p>

        <Button
          style={isBooked ? { backgroundColor: "red" } : {}}
          onClick={book}
          startIcon={
            <Icon
              className={
                isBooked ? "fa-solid fa-xmark" : "fa-regular fa-calendar-check"
              }
              sx={{ margin: "0px 10px" }}
            />
          }
          variant="contained"
          sx={{
            backgroundColor: "green",
            width: "100px",
            fontWeight: "bold",
            margin: "10px 0",
            width: "100%",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          {isBooked ? "الغاء الحجز" : " احجز موعد"}
        </Button>
      </div>
    </div>
  );
};
