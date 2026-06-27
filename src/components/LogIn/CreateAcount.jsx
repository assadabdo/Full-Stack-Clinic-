import "./login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { supabase } from "../utils/supabase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const CreateAcount = () => {
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [name, Setname] = useState("");
  const navigate = useNavigate();

  const handlsumbit = async (e) => {
    e.preventDefault();

    const { error, data } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.log("error signiingUp", error);
      return;
    }
    console.log("data", data);

    navigate("/");

    const user = data.user;

    const { error: profileError } = await supabase.from("Profile").insert({
      email,
      name,
      role: "user",
      user_id: user.id,
    });

    if (profileError) {
      console.log("error creating profile", profileError);
      return;
    }
  };

  return (
    <div className="background">
      {" "}
      <div className="alig">
        <form onSubmit={handlsumbit}>
          <h3>لإنشاء حساب قم بادخال بياناتك</h3>

          <div className="login-container">
            <TextField
              value={email}
              onChange={(e) => Setemail(e.target.value)}
              label="البريد الالكتروني"
              type="email"
              id="outlined-password-input"
              sx={{ width: "90%", margin: "0px auto" }}
            />
            <TextField
              value={name}
              onChange={(e) => Setname(e.target.value)}
              label="اسم المستخدم"
              type="text"
              id="outlined-password-input"
              sx={{ width: "90%", margin: "0px auto" }}
            />
            <TextField
              value={password}
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
                <Link to="/login">تسجيل الدخول</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
