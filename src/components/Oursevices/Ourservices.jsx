import Icon from "@mui/material/Icon";
import "./Ourservices.css";
import {
  LocalHospital,
  ChildCare,
  Science,
  GraphicEq,
  //   Pharmacy,
  //   Dentistry,
  Emergency,
} from "@mui/icons-material";
import { ServiceCard } from "./ServiceCard";
import { iconClasses } from "@mui/material";
export const Ourservices = () => {
  const pedisatric = {
    icon: <ChildCare fontSize="large" sx={{ color: "orange" }} />,
    name: "طب الأطفال",
    description:
      "رعاية طبية متخصصة للأطفال والرضع تشمل الفحوصات الدورية وتشخيص وعلاج الأمراض الشائعة متابعة نمو الطفل وصحته وتقديم الرعاية المناسبة في جميع المراحل العمرية",
  };
  const internalMedicine = {
    icon: <LocalHospital fontSize="large" sx={{ color: "#6FAE2E" }} />,

    name: "الطب الباطني",
    description:
      "تخصص طبي يهتم بتشخيص وعلاج أمراض البالغين مثل أمراض الجهاز الهضمي والتنفس والدورة الدموية والسكري وغيرها من الأمراض المزمنة والحادة مع متابعة شاملة للحالة الصحية وتقديم خطط علاجية دقيقة ومستمرة",
  };
  const soundwaves = {
    icon: <GraphicEq fontSize="large" sx={{ color: "#C0392B" }} />,
    name: "الموجات الصوتية",
    description:
      "فحص بالموجات الصوتية لتصوير الأعضاء والأنسجة الداخلية بدقة عالية دون استخدام الإشعاع. يساعد في تشخيص ومتابعة العديد من الحالات الطبية المختلف",
  };
  const pharmacy = {
    // icon: <ChildCare fontSize="large" sx={{ color: "#8E44AD" }} />,
    icon: <Icon className="fa-solid fa-capsules" sx={{ color: "#8E44AD" }} />,
    name: "الصيدلية",
    description:
      "توفير الأدوية والمستلزمات الطبية المعتمدة بجودة عالية لتلبية احتياجات المرضى المختلفة. يقدم فريق الصيدلة الإرشادات اللازمة حول استخدام الأدوية والجرعات الموصى بها.",
  };
  const dentistry = {
    // icon: <ChildCare fontSize="large" sx={{ color: "#16A085" }} />,
    //  className="fa-solid fa-tooth"
    icon: <Icon className="fa-solid fa-tooth" sx={{ color: "#16A085" }} />,
    name: "طب الأسنان",
    description:
      "دمات متكاملة للعناية بصحة الفم والأسنان، تشمل الفحوصات الدورية والعلاجات الوقائية والتجميلية. نساعدك في الحفاظ على أسنان صحية وابتسامة جميلة.",
  };
  const lablotary = {
    icon: <Science fontSize="large" sx={{ color: "#2C3E50" }} />,
    name: "المختبرات الطبية",
    description:
      "إجراء الفحوصات والتحاليل الطبية المختلفة بدقة عالية لمساعدة الأطباء في التشخيص الصحيح للحالات وتقديم نتائج موثوقة وسريعة لدعم خطة العلاج ومتابعة صحة المرضى",
  };

  //   {
  //     icon: <Emergency fontSize="large" />,
  //     name: "الفحص الدوري الشامل",
  //     description: "فحوصات طبية شاملة للكشف المبكر عن الأمراض وتقييم الصحة العامة",
  //   },

  return (
    <>
      <div id="services" className="sectionContainer">
        <div className="sectionIntro">
          <div className="section-hero">خدماتنا الطبية</div>
          <div className="section-title">رعاية شاملة لصحتك</div>
          <p className="section-desc">
            نقدم مجموعة متكاملة من الخدمات الطبية المتخصصة بأعلى معايير الجودة
            والاحترافية
          </p>
        </div>
        <div className="sectionContent">
          <ServiceCard
            icon={soundwaves.icon}
            title={soundwaves.name}
            description={soundwaves.description}
            borderColor="#C0392B"
            backgroundIcon="#FAEFEE"
          />
          <ServiceCard
            icon={internalMedicine.icon}
            title={internalMedicine.name}
            description={internalMedicine.description}
            borderColor="#6FAE2E"
            backgroundIcon="#F3F8EE"
          />
          <ServiceCard
            icon={lablotary.icon}
            title={lablotary.name}
            description={lablotary.description}
            borderColor="#2C3E50"
            backgroundIcon="#EEF3F9"
          />
          <ServiceCard
            icon={dentistry.icon}
            title={dentistry.name}
            description={dentistry.description}
            borderColor="#16A085"
            backgroundIcon="#ECF7F5"
          />
          <ServiceCard
            icon={pharmacy.icon}
            title={pharmacy.name}
            description={pharmacy.description}
            borderColor="#8E44AD"
            backgroundIcon="#F6F0F8"
          />
          <ServiceCard
            icon={pedisatric.icon}
            title={pedisatric.name}
            description={pedisatric.description}
            borderColor="orange"
            backgroundIcon="#f4eacf"
          />
        </div>
      </div>
    </>
  );
};
