import { DoctorCard } from "./DoctorCrad";
import { useState } from "react";
import { useEffect } from "react";
import "./doctor.css";
import { supabase } from "../utils/supabase";
import { data } from "react-router-dom";
import { Skeleton } from "@mui/material";

export const Doctors = () => {
  const [filtered, setFiltered] = useState("All");
  const [loading, setLoading] = useState(true);
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const { data, error } = await supabase
        .from("doctor_schedule")
        .select("*");

      if (error) {
        console.log("Error fetching doctor schedule:", error);
        setLoading(false);
        return;
      }
      setDoctor(data);
      setLoading(false);
    };
    setLoading(false);

    fetchDoctors();
  }, []);
  console.log(" first Doctor data:", doctor[0]);
  return (
    <div id="doctors">
      <div className="doctorIntro">
        <div className="doctor-hero"> كادرنا الطبي</div>
        <div className="doctor-title"> نخبة من الأطباء المتخصصين</div>
        <p className="doctor-desc">
          اختر طبيبك المناسب واحجز موعدك في بضع خطوات بسيطة
        </p>
        <div className="filtering">
          <div
            style={{ color: "#036b61" }}
            className={filtered == "All" ? "active-All" : ""}
            onClick={() => setFiltered("All")}
          >
            الكل
          </div>
          <div
            style={{ color: "#1B3D82" }}
            className={filtered == "الباطنية" ? "active-inner" : ""}
            onClick={() => setFiltered("الباطنية")}
          >
            الباطنية
          </div>
          <div
            style={{ color: "orange" }}
            className={filtered == "أطفال" ? "active-pediatric" : ""}
            onClick={() => setFiltered("أطفال")}
          >
            الأطفال
          </div>
          <div
            style={{ color: "#8E44AD" }}
            className={filtered == "أسنان" ? "active-dentist" : ""}
            onClick={() => setFiltered("أسنان")}
          >
            الأسنان
          </div>
          <div
            style={{ color: "#6FAE2E" }}
            className={filtered == "نساء وتوليد" ? "active-women" : ""}
            onClick={() => setFiltered("نساء وتوليد")}
          >
            نساء وتوليد
          </div>
          <div
            style={{ color: "#C0392B" }}
            className={filtered == "موجات" ? "active-waves" : ""}
            onClick={() => setFiltered("موجات")}
          >
            {" "}
            موجات
          </div>
          <div
            style={{ color: "#2F4052" }}
            className={filtered == "عمومي" ? "active-general" : ""}
            onClick={() => setFiltered("عمومي")}
          >
            عمومي
          </div>
        </div>
      </div>
      {loading ? (
        <>
          <Skeleton variant="rounded" width={350} height={320} />
          <Skeleton variant="rounded" width={350} height={320} />
          <Skeleton variant="rounded" width={350} height={320} />
          <Skeleton variant="rounded" width={350} height={320} />
          <Skeleton variant="rounded" width={350} height={320} />
          <Skeleton variant="rounded" width={350} height={320} />
        </>
      ) : (
        <div className="doctor-Container">
          {doctor
            .filter((doc) => {
              if (filtered === "All") return true;
              return doc.specialization === filtered;
            })

            .map((doc) => {
              console.log("doc", doc);
              return (
                <DoctorCard
                  key={doc.id}
                  Dname={doc.doctor_name}
                  description={doc.description}
                  specialization={doc.specialization}
                  borderColor={doc.border_color}
                  backgroundColor={doc.background_color}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};
