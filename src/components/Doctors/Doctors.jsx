import { DoctorCard } from "./DoctorCrad";
import { useState } from "react";
import { useEffect } from "react";
import "./doctor.css";
import { supabase } from "../utils/supabase";
import { data } from "react-router-dom";
import { Skeleton } from "@mui/material";

export const Doctors = () => {
  const [filtered, setFiltered] = useState("All");
  const [loading, setLoading] = useState(false);
  const [doctor, setDoctor] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      const { data, error } = await supabase
        .from("doctor_schedule")
        .select("*");

      if (error) {
        console.log("Error fetching doctor schedule:", error);
        setLoading(true);
        return;
      }
      setDoctor(data);
      setLoading(false);
    };

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
            className={filtered == "inner" ? "active-inner" : ""}
            onClick={() => setFiltered("inner")}
          >
            الباطنية
          </div>
          <div
            style={{ color: "orange" }}
            className={filtered == "pediatric" ? "active-pediatric" : ""}
            onClick={() => setFiltered("pediatric")}
          >
            الأطفال
          </div>
          <div
            style={{ color: "#8E44AD" }}
            className={filtered == "dentist" ? "active-dentist" : ""}
            onClick={() => setFiltered("dentist")}
          >
            الأسنان
          </div>
          <div
            style={{ color: "#6FAE2E" }}
            className={filtered == "women" ? "active-women" : ""}
            onClick={() => setFiltered("women")}
          >
            نساء وتوليد
          </div>
          <div
            style={{ color: "#C0392B" }}
            className={filtered == "waves" ? "active-waves" : ""}
            onClick={() => setFiltered("waves")}
          >
            {" "}
            موجات
          </div>
          <div
            style={{ color: "#2F4052" }}
            className={filtered == "general" ? "active-general" : ""}
            onClick={() => setFiltered("general")}
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
          {(filtered === "All" || filtered === "inner") && (
            <DoctorCard
              Dname={doctor[0]?.doctor_name}
              description={doctor[0]?.description}
              specialization={doctor[0]?.specialization}
              borderColor="#1b5fb2"
              backgroundColor="#eef2f9"
            ></DoctorCard>
          )}
          {(filtered === "All" || filtered === "pediatric") && (
            <DoctorCard
              Dname={doctor[3]?.doctor_name}
              description={doctor[3]?.description}
              specialization={doctor[3]?.specialization}
              borderColor="orange"
              backgroundColor="#f4eacf"
            ></DoctorCard>
          )}
          {(filtered === "All" || filtered === "women") && (
            <DoctorCard
              Dname={doctor[1]?.doctor_name}
              description={doctor[1]?.description}
              specialization={doctor[1]?.specialization}
              borderColor="#6FAE2E"
              backgroundColor="#F3F8EE"
            ></DoctorCard>
          )}
          {(filtered === "All" || filtered === "waves") && (
            <DoctorCard
              Dname={doctor[2]?.doctor_name}
              description={doctor[2]?.description}
              specialization={doctor[2]?.specialization}
              borderColor="#C0392B"
              backgroundColor="#FAEFEE"
            ></DoctorCard>
          )}
          {(filtered === "All" || filtered === "dentist") && (
            <DoctorCard
              Dname={doctor[4]?.doctor_name}
              description={doctor[4]?.description}
              specialization={doctor[4]?.specialization}
              borderColor="#8E44AD"
              backgroundColor="#F6F0F8"
            ></DoctorCard>
          )}
          {(filtered === "All" || filtered === "general") && (
            <DoctorCard
              Dname={doctor[5]?.doctor_name}
              description={doctor[5]?.description}
              specialization={doctor[5]?.specialization}
              borderColor="#2C3E50"
              backgroundColor="#EEF3F9"
            ></DoctorCard>
          )}
        </div>
      )}
    </div>
  );
};
