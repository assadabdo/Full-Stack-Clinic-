import "./login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { supabase } from "../utils/supabase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const Login = () => {
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handlsumbit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      Swal.fire({
        icon: "error",
        title: "خطأ في تسجيل الدخول",
        text: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
      });
      return;
    }
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data: profileData, error: profileError } = await supabase
      .from("Profile")
      .select("*")
      .eq("role", "admin")
      .eq("user_id", user.id);
    // .single();
    if (profileError) {
      console.log("error getting profile", profileError);
      return;
    }

    if (profileData?.length > 0) {
      navigate("/dashbord");
      return;
    } else {
      navigate("/");
    }
    Setemail("");
    Setpassword("");
    setLoading(false);
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
              variant="contained"
              type="submit"
              loading={loading}
              loadingPosition="start"
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
                <Link to="/createAcount">إنشاء حساب</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
