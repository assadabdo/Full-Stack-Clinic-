import { DoctorCard } from "./DoctorCrad";

export const Alldoctors = () => {
  return (
    <div className="doctor-Container">
      <DoctorCard
        Dname="نجده انور "
        description="يهتم بمتابعة صحة البالغين وتشخيص الحالات العامة مثل السكري وضغط الدم ومشاكل الجهاز الهضمي ويقدم رعاية مستمرة وتقييم بسيط للحالة مع توجيه المريض للعلاج المناسب حسب الحاجة"
        specialization="الباطنية"
        borderColor="#1b5fb2"
        backgroundColor="#eef2f9"
      ></DoctorCard>
      <DoctorCard
        Dname="رجاء الكامل"
        description="يقدم رعاية طبية للنساء تشمل متابعة الحمل والولادة والفحوصات الدورية وعلاج بعض المشاكل النسائية الشائعة ويهتم بصحة الأم والجنين وتقديم متابعة آمنة خلال فترة الحمل وبعد الولادة"
        specialization="نساء وتوليد"
        borderColor="#6FAE2E"
        backgroundColor="#F3F8EE"
      ></DoctorCard>
      <DoctorCard
        Dname="رابيه بابكر"
        description="يقدم رعاية طبية للأطفال والرضع تشمل الفحوصات الدورية وتشخيص وعلاج الأمراض الشائعة ومتابعة النمو والتطور الصحي للطفل في مختلف المراحل العمرية"
        specialization="أطفال"
        borderColor="orange"
        backgroundColor="#f4eacf"
      ></DoctorCard>
      <DoctorCard
        Dname="أبوبكر عبدالرحيم الدغورابي "
        description="يقوم بإجراء فحوصات الموجات الصوتية لتصوير الأعضاء الداخلية مثل البطن والحوض والغدة الدرقية لمساعدة الأطباء في التشخيص وتقديم صور دقيقة وسريعة تدعم تقييم الحالة الصحية بشكل أفضل"
        specialization=" موجات"
        borderColor="#C0392B"
        backgroundColor="#FAEFEE"
      ></DoctorCard>
      <DoctorCard
        Dname=" هند عماد"
        description="يقدم خدمات العناية بالأسنان والفم بما في ذلك علاج التسوس وتنظيف الأسنان والحشوات البسيطة ويساعد المرضى على الحفاظ على صحة الفم والوقاية من مشاكل الأسنان الشائعة."
        specialization=" أسنان"
        borderColor="#8E44AD"
        backgroundColor="#F6F0F8"
      ></DoctorCard>
      <DoctorCard
        Dname="الحان محمد منصور"
        description="يقدم رعاية صحية أولية للمرضى من مختلف الأعمار ويقوم بتشخيص وعلاج الحالات الشائعة والبسيطة مثل الزكام والحمى والآلام العامة ويحوّل الحالات التي تحتاج لتخصص أدق عند الضرورة"
        specialization="عمومي"
        borderColor="#2C3E50"
        backgroundColor="#EEF3F9"
      ></DoctorCard>
    </div>
  );
};
