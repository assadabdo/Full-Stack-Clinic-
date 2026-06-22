import "./login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { supabase } from "../utils/supabase";

export const CreateAcount = () => {
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [name, Setname] = useState("");

  const handlsumbit = async (e) => {
    e.preventDefault();

    const { error, data } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.log("error signinIn", error);
    }
    console.log("data", data);
    return;
  };
  console.log("SUPABASE URL:", import.meta.env.VITE_SUPABASE_URL);

  return (
    <div className="background">
      {" "}
      <div className="alig">
        <form onSubmit={handlsumbit}>
          <h3>لإنشاء حساب قم بادخال بياناتك</h3>

          <div className="login-container">
            <TextField
              onChange={(e) => Setemail(e.target.value)}
              label="البريد الالكتروني"
              type="email"
              id="outlined-password-input"
              sx={{ width: "90%", margin: "0px auto" }}
            />
            <TextField
              onChange={(e) => Setname(e.target.value)}
              label="اسم المستخدم"
              type="text"
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
              إنشاء حساب
            </Button>
            <div className="down-link">
              لديك حساب بالفعل؟
              <span>
                {" "}
                <a href="/login">تسجيل الدخول</a>{" "}
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
