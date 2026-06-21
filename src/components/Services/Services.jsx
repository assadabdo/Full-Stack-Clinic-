import React from "react";
import "./Services.css";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Container,
} from "@mui/material";
import {
  LocalHospital,
  ChildCare,
  Favorite,
  Healing,
  Science,
  // XRay,
  // Pharmacy,
  Emergency,
} from "@mui/icons-material";

const services = [
  {
    icon: <LocalHospital fontSize="large" />,
    name: "الطب الباطني",
    description: "رعاية شاملة للمرضى الداخليين",
  },
  {
    icon: <ChildCare fontSize="large" />,
    name: "طب الأطفال",
    description: "رعاية متخصصة للأطفال والرضع",
  },
  {
    icon: <Favorite fontSize="large" />,
    name: "أمراض القلب",
    description: "تشخيص وعلاج أمراض القلب",
  },
  {
    icon: <Healing fontSize="large" />,
    name: "الأمراض الجلدية",
    description: "علاج جميع الأمراض الجلدية",
  },
  {
    icon: <Science fontSize="large" />,
    name: "المختبرات",
    description: "فحوصات مخبرية دقيقة وشاملة",
  },
  {
    // icon: <XRay fontSize="large" />,
    name: "الأشعة",
    description: "أحدث أجهزة التصوير الطبي",
  },
  {
    // icon: <Pharmacy fontSize="large" />,
    name: "الصيدلية",
    description: "توفير جميع الأدوية والمستلزمات",
  },
  {
    icon: <Emergency fontSize="large" />,
    name: "الطوارئ",
    description: "خدمة طوارئ 24/7",
  },
];

const Services = () => {
  return (
    <Box className="services-section">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          className="services-title"
          sx={{ fontWeight: 700, mb: 1 }}
        >
          خدماتنا الطبية
        </Typography>
        <Typography
          variant="h6"
          className="services-subtitle"
          sx={{ mb: 4, opacity: 0.8 }}
        >
          نقدم لكم مجموعة شاملة من الخدمات الطبية المتخصصة
        </Typography>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card className="service-card">
                <CardContent className="service-card-content">
                  <Box className="service-icon">{service.icon}</Box>
                  <Typography
                    variant="h6"
                    className="service-name"
                    sx={{ fontWeight: 600, mt: 2 }}
                  >
                    {service.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="service-description"
                    sx={{ mt: 1, opacity: 0.7 }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
