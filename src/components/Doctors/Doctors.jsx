import { DoctorCard } from "./DoctorCrad";
import { useState } from "react";
import "./doctor.css";
export const Doctors = () => {
  const [filtered, setFiltered] = useState("All");

  const handlfilter = () => {
    let state = document.querySelectorAll(".non");

    // setIsfiltered(true);
    // setDentist(true);
    // setPediatric(true);
    // state.classlist.add("active")
  };
  return (
    <div>
      <div className="doctorIntro">
        <div className="doctor-hero"> كادرنا الطبي</div>
        <div className="doctor-title"> نخبة من الأطباء المتخصصين</div>
        <p className="doctor-desc">
          اختر طبيبك المناسب واحجز موعدك في بضع خطوات بسيطة
        </p>
        <div className="filtering">
          <div
            className={filtered == "All" ? "active" : ""}
            onClick={() => setFiltered("All")}
          >
            الكل
          </div>
          <div
            className={filtered == "inner" ? "active" : ""}
            onClick={() => setFiltered("inner")}
          >
            الباطنية
          </div>
          <div
            className={filtered == "pediatric" ? "active" : ""}
            onClick={() => setFiltered("pediatric")}
          >
            الأطفال
          </div>
          <div
            className={filtered == "dentist" ? "active" : ""}
            onClick={() => setFiltered("dentist")}
          >
            الأسنان
          </div>
          <div
            className={filtered == "women" ? "active" : ""}
            onClick={() => setFiltered("women")}
          >
            نساء وتوليد
          </div>
          <div
            className={filtered == "waves" ? "active" : ""}
            onClick={() => setFiltered("waves")}
          >
            {" "}
            موجات
          </div>
          <div
            className={filtered == "general" ? "active" : ""}
            onClick={() => setFiltered("general")}
          >
            عمومي
          </div>
        </div>
      </div>
      <div className="doctor-Container">
        {(filtered === "All" || filtered === "inner") && (
          <DoctorCard
            Dname="نجده انور "
            description="يهتم بمتابعة صحة البالغين وتشخيص الحالات العامة مثل السكري وضغط الدم ومشاكل الجهاز الهضمي ويقدم رعاية مستمرة وتقييم بسيط للحالة مع توجيه المريض للعلاج المناسب حسب الحاجة"
            specialization="الباطنية"
            borderColor="#1b5fb2"
            backgroundColor="#eef2f9"
          ></DoctorCard>
        )}
        {(filtered === "All" || filtered === "pediatric") && (
          <DoctorCard
            Dname="رابيه بابكر"
            description="يقدم رعاية طبية للأطفال والرضع تشمل الفحوصات الدورية وتشخيص وعلاج الأمراض الشائعة ومتابعة النمو والتطور الصحي للطفل في مختلف المراحل العمرية"
            specialization="أطفال"
            borderColor="orange"
            backgroundColor="#f4eacf"
          ></DoctorCard>
        )}
        {(filtered === "All" || filtered === "women") && (
          <DoctorCard
            Dname="رجاء الكامل"
            description="يقدم رعاية طبية للنساء تشمل متابعة الحمل والولادة والفحوصات الدورية وعلاج بعض المشاكل النسائية الشائعة ويهتم بصحة الأم والجنين وتقديم متابعة آمنة خلال فترة الحمل وبعد الولادة"
            specialization="نساء وتوليد"
            borderColor="#6FAE2E"
            backgroundColor="#F3F8EE"
          ></DoctorCard>
        )}
        {(filtered === "All" || filtered === "waves") && (
          <DoctorCard
            Dname="أبوبكر عبدالرحيم الدغورابي "
            description="يقوم بإجراء فحوصات الموجات الصوتية لتصوير الأعضاء الداخلية مثل البطن والحوض والغدة الدرقية لمساعدة الأطباء في التشخيص وتقديم صور دقيقة وسريعة تدعم تقييم الحالة الصحية بشكل أفضل"
            specialization=" موجات"
            borderColor="#C0392B"
            backgroundColor="#FAEFEE"
          ></DoctorCard>
        )}
        {(filtered === "All" || filtered === "dentist") && (
          <DoctorCard
            Dname=" هند عماد"
            description="يقدم خدمات العناية بالأسنان والفم بما في ذلك علاج التسوس وتنظيف الأسنان والحشوات البسيطة ويساعد المرضى على الحفاظ على صحة الفم والوقاية من مشاكل الأسنان الشائعة."
            specialization=" أسنان"
            borderColor="#8E44AD"
            backgroundColor="#F6F0F8"
          ></DoctorCard>
        )}
        {(filtered === "All" || filtered === "general") && (
          <DoctorCard
            Dname="الحان محمد منصور"
            description="يقدم رعاية صحية أولية للمرضى من مختلف الأعمار ويقوم بتشخيص وعلاج الحالات الشائعة والبسيطة مثل الزكام والحمى والآلام العامة ويحوّل الحالات التي تحتاج لتخصص أدق عند الضرورة"
            specialization="عمومي"
            borderColor="#2C3E50"
            backgroundColor="#EEF3F9"
          ></DoctorCard>
        )}
      </div>
    </div>
  );
};
