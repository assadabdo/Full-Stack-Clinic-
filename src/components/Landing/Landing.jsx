{
  /* <i class="fa-solid fa-arrow-left"></i> */
}
import Icon from "@mui/material/Icon";
import "./Landing.css";
import logo from "../Navbar/clinic-logo.jpeg";
import Button from "@mui/material/Button";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export const Landing = () => {
  return (
    <div id="home" className="hero-gradient">
      <div className="landing">
        <div className="content">
          <div className="hero">
            <ShieldOutlinedIcon></ShieldOutlinedIcon>
            رعاية صحية متكاملة وموثوقة
          </div>
          <div className="intro">
            <span>مركز</span>
            <span>العاليابي</span> الطبي المتخصص
          </div>

          <div className="desc">
            نقدم لكم رعاية صحية شاملة بايدي نخبة من الأطباء المتخصصين مع احدث
            التقنيات الطبية لضمان صحتكم وراحتكم.
          </div>
          <div className="buttons">
            <a href="#doctors">
              <Button
                startIcon={
                  <Icon
                    className="fa-regular fa-calendar-check"
                    sx={{ margin: "0 10px" }}
                  />
                }
                variant="contained"
                color="success"
                size="large"
              >
                احجز موعدك
              </Button>
            </a>
            <a href="#services">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#60809752",
                  border: "1px solid #b5bcc052;",
                }}
                size="large"
              >
                تعرف علينا
              </Button>
            </a>
          </div>
          <div className="three">
            <div>
              <LocalHospitalIcon
                sx={{ margin: "0 4px" }}
                fontSize="small"
              ></LocalHospitalIcon>
              اطباء متخصصون
            </div>
            <div>
              <AccessTimeIcon
                sx={{ margin: "0 4px" }}
                fontSize="small"
              ></AccessTimeIcon>
              مواعيد مرنة
            </div>
            <div>
              <ShieldOutlinedIcon sx={{ margin: "0 4px" }}></ShieldOutlinedIcon>
              بيئة امنة
            </div>
          </div>
        </div>
        <div className="animation">
          <img className="animated-img" src={logo} alt="no image" />
        </div>
      </div>
      <div className="desc-boxes">
        <div>
          <span>+5000</span>
          <span>مريض متعافيc</span>
        </div>
        <div>
          <span>+20</span>
          <span> طبيب متخصص</span>
        </div>
        <div>
          {" "}
          <span>+15</span>
          <span>قسم طبي</span>
        </div>
        <div className="hide">
          <span>24/7</span>
          <span>خدمة مستمرة</span>
        </div>
      </div>
    </div>
  );
};
