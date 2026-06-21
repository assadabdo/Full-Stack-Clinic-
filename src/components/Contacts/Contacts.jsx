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
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import "./Contact.css";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
export const Contacts = () => {
  return (
    <div>
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
              <span> 050 123 4567</span>
              <span> الاحد - الخميس</span>
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
              <span>1234568</span>
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
              <span>العنوان</span>
              <span>العنوان</span>
            </div>
          </div>
          <div className="working-hours">
            <span className="my-icon" style={{ backgroundColor: "#6FAE2E" }}>
              <Icon className="fa-solid fa-clock" sx={{ color: "white" }} />
            </span>
            <div className="details">
              <span>ساعات العمل</span>
              <span>الأحد — الخميس</span>
              <span>٨ صباحًا — ١٠ مساءً</span>
            </div>
          </div>
        </div>
        <form>
          <h2>أرسل رسالتك</h2>

          <div className="contact-message">
            <TextField
              label="user name"
              type="text"
              id="outlined-password-input"
              sx={{ width: "90%", margin: "0px auto" }}
            />
            <TextField
              label="email"
              type="email"
              id="outlined-password-input"
              sx={{ width: "90%", margin: "0px auto" }}
            />
            <textarea
              placeholder="Message"
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
              variant="contained"
              sx={{
                width: "90%",
                borderRadius: "7px",
                backgroundColor: "#1B3D6F",
                fontSize: "20px",
                margin: "0px auto",
              }}
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
