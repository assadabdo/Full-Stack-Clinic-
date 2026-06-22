import "./login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { supabase } from "../utils/supabase";
import { useState } from "react";

export const Login = () => {
  const [IssignUp, SetIssignUp] = useState(false);
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");

  const handlsumbit = async (e) => {
    e.preventDefault();

    if (IssignUp) {
      const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        console.log("error signinIn", error);
      }
      console.log("data", data);
      return;
    }
  };

  return (
    <div className="background">
      <div className="alig">
        <form onSubmit={handlsumbit}>
          <h3>لتسجيل الدخول قم بادخال بياناتك</h3>

          <div className="login-container">
            <TextField
              onChange={(e) => Setemail(e.target.value)}
              label="البريد الالكتروني"
              type="email"
              id="outlined-password-input"
              sx={{ width: "90%", margin: "0px auto" }}
            />
            <TextField
              onChange={(e) => Setpassword(e.target.value)}
              label="كلمة المرور"
              type="password"
              id="outlined-password-input"
              sx={{ width: "90%", margin: "0px auto" }}
            />

            <Button
              onClick={() => SetIssignUp(true)}
              variant="contained"
              type="sumbit"
              sx={{
                width: "90%",
                borderRadius: "7px",
                backgroundColor: "#1B3D6F",
                fontSize: "20px",
                margin: "0px auto",
              }}
            >
              تسجيل الدخول
            </Button>
            <div className="down-link">
              ليس لديك حساب؟{" "}
              <span>
                {" "}
                <a href="/createAcount">إنشاء حساب </a>{" "}
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
