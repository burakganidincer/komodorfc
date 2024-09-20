import React from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";
import logo from "../images/logo.png";
import modeklogo from "../images/modeklogo-1.png";
import vedatlogo from "../images/vedatlogo1.png";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const About = () => {
  // Framer Motion animasyon ayarları
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };
  return (
    <>
      <Helmet>
        <title>Komodor FC | Hakkımızda</title>
        <meta
          name="description"
          content="Komodor FC, 2015 yılında kurulan ve Türkiye ile Avrupa şampiyonalarına katılma hedefi olan bir futbol kulübüdür. Aile, arkadaşlık ve kardeşlik değerleriyle başarıyı sahaya yansıtıyoruz."
        />
      </Helmet>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Paper>
          <div style={{ display: "grid", placeItems: "center" }}>
            <img src={logo} width={100} style={{ marginTop: "20px" }} alt="" />
          </div>
          <Container sx={{ padding: 4, fontFamily: "Poppins" }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "#012D72", textAlign: "center" }}
            >
              Takımımızın Hikayesi
            </Typography>
            <Typography variant="body1" paragraph>
              2015 yılında, bir mahalle futbol tutkusu olarak doğan takımımız,
              kısa sürede büyük hedeflere yönelmiştir. Başlangıçta yerel
              sahalarda başlayan bu serüven, kısa zamanda Türkiye Şampiyonası'na
              ulaşmayı hedefleyen bir yolculuğa dönüştü. Takımımız, arkadaşlık,
              kardeşlik ve aile bağlarının güçlü olduğu, her oyuncunun birbirine
              saygı ve sevgiyle yaklaştığı bir topluluktur. Futbolu yalnızca bir
              spor değil, aynı zamanda bu değerlerin bir yansıması olarak
              görüyoruz.
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: "#012D72", mt: "20px" }}
                >
                  Vizyonumuz
                </Typography>
                <Typography variant="body1">
                  Vizyonumuz, yerel başarılarımızı ulusal arenaya taşımak ve
                  Türkiye Şampiyonası'nda zirveye ulaşmaktır. Bununla
                  yetinmeyip, önümüzdeki yıllarda Avrupa sahalarında da boy
                  göstermeyi hedefliyoruz. Amacımız, takımımızı uluslararası
                  başarılarla taçlandırarak, adımızı futbol dünyasında
                  duyurmaktır.
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: "#012D72", mt: "20px" }}
                >
                  Misyonumuz
                </Typography>
                <Typography variant="body1">
                  Misyonumuz, sadece sahada değil, hayatın her alanında güçlü
                  bir takım ruhu oluşturmaktır. Arkadaşlık, kardeşlik ve aile
                  bağlarını ön planda tutarak, oyuncularımızı sadece birer
                  futbolcu olarak değil, birbirine kenetlenmiş bireyler olarak
                  yetiştiriyoruz. Başarı, ancak bu değerlerle mümkün olabilir;
                  biz de sahaya bu anlayışla çıkıyoruz.
                </Typography>
              </Grid>
            </Grid>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "#012D72", textAlign: "center", mt: "40px" }}
            >
              Sponsorlarımız
            </Typography>
            <Typography variant="body1" paragraph>
              Takımımızın başarısının arkasında, sadece oyuncularımızın ve
              teknik ekibimizin emeği değil, aynı zamanda değerli
              sponsorlarımızın da katkısı bulunmaktadır. Sponsorlarımız, sadece
              maddi destek sunmakla kalmaz; aynı zamanda takım ruhumuzu
              güçlendiren, motivasyonumuzu artıran ve hedeflerimize ulaşmamızda
              kritik rol oynayan iş ortaklarımızdır.
              <br />
              <br />
              Onların sağladığı destek, sahadaki performansımızı artırmakla
              kalmaz, aynı zamanda antrenman ve maç organizasyonlarından sosyal
              etkinliklerimize kadar pek çok alanda bize yardımcı olur. Bu iş
              birlikleri, takımımızın profesyonel bir düzeyde faaliyet
              göstermesini sağlar ve sporcularımızın en iyi performanslarını
              sergilemeleri için gerekli olanakları sunar.
              <br />
              <br />
              Sponsorlarımızın desteği, sadece finansal anlamda değil, aynı
              zamanda moral ve motivasyon açısından da büyük bir değer taşır. Bu
              iş birlikleri sayesinde, hedeflerimize daha yakınlaşabilir ve
              takım olarak daha büyük başarılara imza atabiliriz. Biz de bu
              desteklerin karşılığında, sponsorlarımıza olan minnettarlığımızı
              her zaman dile getiriyor ve başarılarımızı onlarla paylaşmaktan
              gurur duyuyoruz.
              <br />
              <h3 style={{ textAlign: "center", paddingTop: "10px" }}>
                Sponsorluk için iletişim bölümünden ulaşabilirsiniz.
              </h3>
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: "#012D72", textAlign: "center", mt: "20px" }}
                >
                  <div>
                    <img
                      src={modeklogo}
                      width={149}
                      alt=""
                      style={{ marginTop: "40px", marginBottom: "32px" }}
                    />
                  </div>
                  Modek Yapı
                </Typography>
                <Typography variant="body1" sx={{ mb: "20px" }}>
                  Modek Yapı, inşaat sektöründe yenilikçi ve kaliteli çözümler
                  sunan, güvenilir bir isimdir. Modern yapı anlayışını
                  geleneksel değerlere harmanlayarak, projelerinde estetik ve
                  fonksiyonelliği ön planda tutar. Takımımızın başarısına olan
                  katkıları ve destekleri için Modek Yapı'ya teşekkür ediyoruz.
                  Onların desteği, sahada elde ettiğimiz başarıların arkasındaki
                  güçlerden biridir.
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: "#012D72", textAlign: "center", mt: "20px " }}
                >
                  <div>
                    <img
                      src={vedatlogo}
                      style={{ borderRadius: "10px" }}
                      width={189}
                      alt=""
                    />
                  </div>
                  Vedat İşkembe
                </Typography>
                <Typography variant="body1" sx={{ mb: "20px" }}>
                  Vedat İşkembe, lezzetli işkembe çorbaları ve özenle
                  hazırlanmış yöresel yemekleriyle tanınan, kaliteli bir
                  restoran markasıdır. İşkembe konusunda yılların deneyimine
                  sahip olan Vedat İşkembe, takımımıza verdiği destekle, bizleri
                  hem sahada hem de sosyal etkinliklerde besleyen bir iş
                  ortağıdır. Onların katkıları, takımızın toplulukla olan bağını
                  güçlendirmekte büyük rol oynamaktadır.
                </Typography>
              </Grid>
            </Grid>

            <Typography
              sx={{
                textAlign: "center",
                my: "50px",
                fontFamily: "initial",
                fontSize: "25px",
                fontWeight: 500,
              }}
            >
              <p>Komodor FC Yönetim Kurulu</p>
            </Typography>
          </Container>
        </Paper>
      </motion.div>
    </>
  );
};

export default About;
