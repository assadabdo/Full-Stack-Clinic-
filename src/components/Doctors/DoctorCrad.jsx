{
  /* <i class="fa-solid fa-calendar-check"></i> */
}
{
  /* <i class="fa-solid fa-arrow-left"></i> */
}
import { useState } from "react";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export const DoctorCard = ({
  Dname,
  specialization,
  description,
  borderColor,
  backgroundColor,
}) => {
  //   const [Isfiltered, setIsfiltered] = useState(false);

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

        <a href="/booking">
          <Button
            startIcon={
              <Icon
                className="fa-regular fa-calendar-check"
                sx={{
                  margin: "0 10px",
                }}
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
            احجز موعد
          </Button>
        </a>
      </div>
    </div>
  );
};
