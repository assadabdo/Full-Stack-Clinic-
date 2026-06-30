{
  /* <i class="fa-solid fa-clock"></i> */
}
{
  /* <i class="fa-solid fa-location-dot"></i> */
}
{
  /* <i class="fa-solid fa-envelope"></i>  email */
}
{
  /* <i class="fa-solid fa-phone"></i> */
}
import { supabase } from "../utils/supabase";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import "./Contact.css";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useState } from "react";
export const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlsubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("Messages").insert({
      name,
      email,
      message,
    });

    if (error) {
      console.log("Error booking appointment:", error);
      return;
    }
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div id="contact">
      <div className="contactIntro">
        <div className="contact-hero"> تواصل معنا</div>
        <div className="contact-title"> نحن هنا لخدمتكم</div>
        <p className="contact-desc">
          لا تتردد في التواصل معنا لأي استفسار أو حجز موعد
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-links">
          <div className="phone">
            <span className="my-icon" style={{ backgroundColor: "#1B3D6F" }}>
              <Icon className="fa-solid fa-phone" sx={{ color: "white" }} />
            </span>
            <div className="details">
              <span>هاتف</span>
              <span>249910054892+</span>
              <span>يومياً من 8 صباحاً إلى 8 مساءً</span>
            </div>
          </div>
          <div className="email">
            <span className="my-icon" style={{ backgroundColor: "#4E7A1E" }}>
              <Icon
                className="fa-regular fa-envelope"
                sx={{ color: "white" }}
              />
            </span>
            <div className="details">
              <span> البريد الإلكتروني</span>
              <span>Aliabicenter@gmail.com</span>
              <span>نرد خلال 24 ساعة</span>
            </div>
          </div>
          <div className="address">
            <span className="my-icon" style={{ backgroundColor: "#2E6DB4" }}>
              <Icon
                className="fa-solid fa-location-dot"
                sx={{ color: "white" }}
              />
            </span>
            <div className="details">
              <span>العنوان</span>
              <span>الدامر غرب الاستاد</span>
              <span>تقاطع الشمالية</span>
            </div>
          </div>
          <div className="working-hours">
            <span className="my-icon" style={{ backgroundColor: "#6FAE2E" }}>
              <Icon className="fa-solid fa-clock" sx={{ color: "white" }} />
            </span>
            <div className="details">
              <span>ساعات العمل</span>
              <span>الأحد — الخميس</span>
              <span> 8 صباحًا — 8 مساءً </span>
            </div>
          </div>
        </div>
        <form onSubmit={handlsubmit}>
          <h2>أرسل رسالتك</h2>

          <div className="contact-message">
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              label="المستخدم اسم"
              type="text"
              id="outlined-password-input"
              sx={{ width: "90%", margin: "0px auto" }}
            />
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              label="البريد الإلكتروني"
              type="email"
              id="outlined-password-input"
              sx={{ width: "90%", margin: "0px auto", textAlign: "right" }}
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              // placeholder="الرسالة"
              style={{
                borderColor: "black",
                opacity: 0.5,
                width: "90%",
                height: "200px",
                borderRadius: "4px",
                margin: "0px auto",
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                boxShadow: "2px 2px 1px black",
                width: "90%",
                borderRadius: "7px",
                backgroundColor: "#1B3D6F",
                fontSize: "20px",
                margin: "0px auto",
              }}
            >
              ارسل الرسالة
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
