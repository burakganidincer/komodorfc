import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography, Grid, Paper } from "@mui/material";
import hikayemiz from "../images/hikayemiz.jpg";

const AnimatedNumber = ({ value, startValue = 0, duration = 3000 }) => {
  const [number, setNumber] = useState(startValue);

  useEffect(() => {
    const startTime = performance.now();

    const updateNumber = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // 0 ile 1 arasında ilerleme

      const newNumber = Math.floor(
        startValue + (value - startValue) * progress
      );
      setNumber(newNumber);

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    };

    requestAnimationFrame(updateNumber);
  }, [value, startValue, duration]);

  return <span>{number}</span>;
};

const Hikayemiz = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  const photoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <Paper elevation={14} sx={{ margin: "30px", borderRadius: "40px" }}>
      <Box
        sx={{
          padding: "100px 40px",
          backgroundColor: "#fff",
          minHeight: "auto",
          display: "flex",
          alignItems: "stretch",
        }}
      >
        <Grid container spacing={2} alignItems="stretch">
          {/* Left Side - Text */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  fontFamily: "cursive",
                }} // Boşluk azaltıldı
              >
                Yolculuğumuz
              </Typography>

              <Typography variant="body1" sx={{ color: "#666", mb: 3 }}>
                Takımımızın bu uzun yolculuğunda yaşadığımız başarılara tanık
                olun. Yılların birikimi, oynadığımız maçlar, kazandığımız
                kupalar ve attığımız gollerle hikayemizi yazmaya devam ediyoruz.
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="h5" // Daha küçük font için h5 yapıldı
                    component="h3"
                    sx={{ fontWeight: "medium", mb: 1 }} // Boşluk azaltıldı
                  >
                    <AnimatedNumber
                      value={2015}
                      startValue={2000}
                      duration={3000}
                    />
                    'ten beri
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    2015'ten bu yana başarılarla dolu bir yolculuğa çıktık. Bu
                    yolculuktaki anahtarımız dostluğumuz oldu.
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: "medium", mb: 1 }}
                  >
                    <AnimatedNumber
                      value={197}
                      startValue={0}
                      duration={3000}
                    />{" "}
                    Maç Oynandı
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Takımımız bu süreçte 197 resmi maçta yer aldı. Bu maçlarda
                    kendine yakışır şekilde mücadele sergiledi.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: "medium", mb: 1 }}
                  >
                    <AnimatedNumber value={6} startValue={0} duration={3000} />{" "}
                    Kupa kazanıldı
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    6 prestijli kupa kazandık. Bu kupaların tamamı hakkıyla ve
                    şerefimizle..
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: "medium", mb: 1 }}
                  >
                    <AnimatedNumber
                      value={501}
                      startValue={0}
                      duration={3000}
                    />{" "}
                    Gol atıldı
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Takımımız bu maçlarda toplamda 501 kez fileleri
                    havalandırdı.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>

          {/* Right Side - Image */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={photoVariants}
            >
              <Box
                component="img"
                src={hikayemiz} // İstediğiniz görselin URL'sini koyun
                alt="Takım fotoğrafı"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Görselin kesilmeden yerleşmesini sağlar
                  borderRadius: "10px",
                  marginTop: "20px",
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Hikayemiz;
