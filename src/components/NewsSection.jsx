import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import haber2 from "../images/haftaninmaci/haftaninmaci1.jpeg";
import haber1 from "../images/haftaninmaci/haber1.jpeg";
import muaz from "../images/haftaninmaci/haftaninmaci11.jpeg";
import minifutbol from "../images/minifutbol.jpg";

import isobaba from "../images/isobaba1.png";
import alimertdogan from "../images/alimertdogan.png";
import modernfootball from "../images/takimlar/modernfootball.png";
import prodevils from "../images/takimlar/prodevils.png";
import karabela from "../images/takimlar/karabela.png";
import sutatjazz from "../images/takimlar/sutatjazz.png";
import red from "../images/takimlar/redlightning.png";

// Slider Haberler
export const sliderNews = [
  {
    id: 1,
    title: "Sezonu Lider Tamamlıyoruz",
    description: "Takımımız Play-off'larda yarı finalden dahil olacak.",
    image: haber1,
    fullText: `
         Komodor FC olarak Play-off'lara çok iyi hazırlanıyoruz. Şampiyon bir takımın nasıl hazırlanması gerekiyorsa öyle çalışıyor, motivasyonumuzu en üst seviyede tutuyoruz. Geçtiğimiz günlerde Türkiye Şampiyonası'ndan döndük ve orada yaşadığımız tecrübeler bize büyük bir moral kaynağı oldu.
  
  Bu motivasyonla, sezonu şampiyon olarak tamamlamak için gereken tüm hazırlıkları yapıyoruz. Tekrardan zirvede yer almak ve şampiyonluk kupasını kaldırmak için kararlıyız. Komodor FC ailesi olarak hedefimize adım adım ilerliyoruz!
      `,
  },
  {
    id: 2,
    title: "MS: Komodor FC 4 - 4 Karabela FC",
    description: "Yarı-final'de rakibimizi bekliyoruz",
    image: haber2,
    fullText: `
       Bu hafta oynanan zorlu karşılaşmada Komodor FC, Karabela ile karşı karşıya geldi ve mücadele 4-4’lük beraberlikle sonuçlandı. Takımımız, sahada sergilediği üstün oyunla bir kez daha gücünü kanıtladı ve sezonu namağlup tamamlayarak playofflara direk yarı finalden katılma hakkı kazandı.

Maçın ilk dakikalarında etkili bir performans sergileyen takımımız, Gani’nin beklenmedik şutuyla 1-0 öne geçti. Ancak kısa süre sonra Karabela durumu 1-1’e getirdi. Oyunun temposunu düşürmeden baskısını sürdüren takımımız, Gani’nin uzun pasında rakip takımın kendi kalesine attığı talihsiz golle 2-1 öne geçti. Ne var ki bu golden sonra üst üste üç gol yiyerek 4-2 geriye düştük.

Maçın ilerleyen dakikalarında savunmadan ileri çıkan stoperimiz Batuhan Özbay, Enes’in güzel pasını değerlendirerek farkı bire indirdi: 4-3. Son saniyelerde kazandığımız frikikte, Gani topun başına geçti ve yerden sert, akıllıca bir vuruşla skoru 4-4’e getirdi. Böylece takımımız sahadan namağlup unvanını koruyarak ayrıldı.

Bu sonuçla sezonu lider tamamlayan Komodor FC, ne kadar güçlü ve kararlı bir takım olduğunu bir kez daha göstermiş oldu. Şimdi gözler yarı finaldeki rakibimizde! Takımımıza şampiyonluk yolunda başarılar diliyoruz. Hedefimiz zirve, ve bu hedefe ulaşacağımıza yürekten inanıyoruz!
    `,
  },
  {
    id: 3,
    title: "Komodor'un Yeni Panteri..",
    description: "Muaz Babur Komodor FC'de",
    image: muaz,
    fullText: `
         Komodor FC ailesi olarak, genç kalecimiz Muaz Babur’u aramıza katmaktan büyük mutluluk duyuyoruz. Takımımızın yeni panteri, bu hafta ilk maçına çıkarak yeteneklerini sergileme fırsatı buldu. 
  
  Maç boyunca yaptığı başarılı kurtarışlarla dikkat çeken Muaz, gelecekte takımımızın kalede güven veren ismi olacağını şimdiden kanıtladı. Performansıyla yalnızca takım arkadaşlarına değil, taraftarlarımıza da büyük bir ümit verdi. Muaz, hedeflerini yüksek tutuyor ve takımımızla birlikte şampiyonluk yolunda büyük katkılar sunmayı hedefliyor.
  
  Komodor FC olarak, Muaz Babur’a aramıza hoş geldin diyor, birlikte nice başarılara imza atacağımıza inanıyoruz!
      `,
  },
];

// Kart Haberler
export const cardNews = [
  {
    id: 4,
    title: "Hedef Türkiye Şampiyonası!",
    description:
      "Komodor FC Nisan ayında düzenlenecek Türkiye şampiyonasına katılmak istiyor",
    image: minifutbol,
    fullText: `
      Komodor FC, büyük bir heyecanla Nisan ayında İzmir'de düzenlenecek olan Türkiye Şampiyonası'nda sahne almak için hazırlanıyor. Sezon boyunca gösterdiği üstün performansla dikkat çeken takımımız, bu önemli turnuvada şampiyonluk hedefliyor. İzmir'deki turnuva, Türkiye'nin dört bir yanından gelen en iyi takımları bir araya getirirken, Komodor FC de bu zorlu mücadelede yer almak için tüm hazırlıklarını tamamladı.
  
        Teknik ekibimiz ve futbolcularımız, haftalardır yoğun bir antrenman programı ile fiziksel ve mental olarak bu büyük organizasyona hazırlanıyor. Teknik direktörümüz, "Türkiye Şampiyonası, takımımız için önemli bir hedef. İzmir'de sahaya çıktığımızda takımımızın gerçek gücünü herkese göstereceğiz. Şampiyonluk yolunda kararlıyız ve taraftarlarımızın desteğiyle bunu başaracağımıza inanıyoruz." şeklinde açıklamalarda bulundu.
  
        Rakiplerimizin arasında ülkenin en köklü ve güçlü ekipleri bulunsa da, Komodor FC olarak sahada elimizden gelenin en iyisini yapacağımızdan kimsenin şüphesi olmasın. İzmir’de düzenlenecek bu prestijli turnuvada sahne almak, bizim için hem gurur hem de büyük bir fırsat olacak. Taraftarlarımızı, bu heyecanlı mücadelelerde yanımızda görmek istiyoruz. Turnuvanın ilk maçı Nisan ayında oynanacak ve Komodor FC, şampiyonluk hedefine doğru emin adımlarla ilerlemeye kararlı.
  
        Tüm takımımıza başarılar diliyor, Anadolu Ligi finallerinde herkesi yanımızda görmek istiyoruz. Komodor FC, bir kez daha futboluyla adından söz ettirmeye hazır!
      `,
  },
  {
    id: 5,
    title: "Ali Mert DOĞAN ameliyat oldu..",
    description:
      "Takımızın gol kralı ayak bileğindeki sakatlığından dolayı ameliyat oldu.",
    image: alimertdogan,
    fullText: `
      Takımımızın kilit oyuncularından Ali Mert Doğan, ayak bileğinde yaşadığı sakatlık sonucu geçtiğimiz günlerde başarılı bir ameliyat geçirdi. Sahada gösterdiği üstün performans ve bitirici vuruşlarıyla takımımıza önemli katkılarda bulunan Ali Mert, bu talihsiz sakatlık nedeniyle bir süre sahalardan uzak kalacak. Ancak, oyuncumuzun ameliyatı başarılı geçmiş olup, doktorlarımızın öngörüsüne göre iyileşme süreci hızlı bir şekilde devam ediyor.

Ali Mert Doğan, profesyonelliği ve mücadeleci ruhuyla tanınan bir futbolcumuz. İyileşme sürecinde de aynı kararlılık ve disiplinle tedavi programını uygulayarak en kısa sürede eski formuna kavuşmayı hedefliyor. Teknik ekibimiz ve sağlık ekibimiz, onun en iyi şekilde sahalara dönmesi için titizlikle çalışmaya devam ediyor. Taraftarlarımızın ve camiamızın desteğiyle bu sürecin daha da kolay geçeceğine inanıyoruz.

Taraftarlarımızın oyuncumuza olan sevgi ve destek mesajları, hem Ali Mert hem de tüm takımımız için büyük bir moral kaynağı oldu. Bu süreçte gösterilen sabır ve anlayış için tüm futbolseverlere teşekkür ediyor, Ali Mert'in güçlü bir şekilde geri dönerek yine büyük başarılara imza atacağı günleri sabırsızlıkla bekliyoruz. Kendisine geçmiş olsun dileklerimizi iletir, sahalara dönmesi için hep birlikte geri sayıma başladığımızı belirtmek isteriz.
    `,
  },
  {
    id: 6,
    title: "İsmail Arda Yamaç baba oldu.",
    description: "İsmail'in oğlu Yaman Ali dünyaya geldi..",
    image: isobaba,
    fullText: `
           Milli oyuncumuz İsmail Arda Yamaç ve sevgili eşi Sıla Yamaç'ı en içten dileklerimizle tebrik ederiz. Çiftimizin ilk çocukları, minik Yaman Ali'nin dünyaya gelişi, yalnızca aileleri için değil, aynı zamanda tüm takımımız ve camiamız için büyük bir mutluluk kaynağı oldu. Bu değerli anı paylaşmanın sevincini yaşarken, İsmail ve Sıla çiftine sağlık, huzur ve mutluluk dolu bir hayat diliyoruz.

İsmail Arda Yamaç, futbol kariyeri boyunca takımımıza yaptığı katkılar ve sahadaki efendiliğiyle daima bir örnek oldu. Sahadaki disiplini ve kararlılığı, şimdi yeni bir baba olarak hayatının farklı bir alanında da kendini gösterecek. Eminiz ki, İsmail, nasıl ki sahada bir takım lideriyse, aile hayatında da aynı özveri ve sevgiyle hareket edecektir. Yaman Ali’nin hayatına sağlık, neşe ve mutluluk katacağını, Yamaç ailesinin bu yeni yolculuğunda her günlerinin keyif ve heyecanla dolacağını temenni ediyoruz.

Sıla Yamaç'a da bu süreçte gösterdiği güç ve sabır için büyük takdirlerimizi sunuyoruz. Annelik, en kutsal ve özel rollerden biri olup, Sıla'nın bu rolü büyük bir sevgi ve zarafetle üstleneceğine eminiz. Yaman Ali'nin ilk adımları, ilk kelimeleri ve her anı, aile için unutulmaz anılar oluşturacak.

Bu özel dönemde İsmail ve Sıla çiftine desteklerini esirgemeyen tüm takım arkadaşlarına, taraftarlarımıza ve camiamıza da teşekkür ediyoruz. Yaman Ali'nin büyümesini izlerken, onu futbol sahalarında da görmeyi sabırsızlıkla bekliyoruz. Yeni Yamaç ailesine sağlık, mutluluk ve huzur dolu uzun bir ömür diliyoruz. Yaman Ali'nin hayatlarına getireceği mutluluğun, her geçen gün katlanarak artacağına inanıyoruz.
    `,
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
};

const NewsSection = () => {
  const navigate = useNavigate();

  const handleSliderClick = (id) => {
    navigate(`/news/${id}`);
  };

  const handleCardClick = (id) => {
    navigate(`/news/${id}`);
  };

  return (
    <Grid container spacing={4} sx={{ padding: 4 }}>
      {/* Slider Bölümü */}
      <Grid item xs={12} md={8}>
        <Box sx={{ borderRadius: 2, overflow: "hidden", boxShadow: 3 }}>
          <Slider {...sliderSettings}>
            {sliderNews.map((item) => (
              <Box key={item.id} sx={{ position: "relative" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "auto" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: { xs: 1, sm: 2 }, // Farklı ekran boyutları için padding
                    width: "100%",
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant="h3"
                    fontWeight="500"
                    fontFamily="poppins"
                    sx={{
                      fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Responsive font boyutu
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontWeight="200"
                    sx={{
                      fontSize: { xs: "0.775rem", sm: "1rem" }, // Responsive font boyutu
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Box sx={{ textAlign: "end" }}>
                    <Button
                      size="small"
                      variant="contained"
                      sx={{
                        fontSize: { xs: "0.75rem", sm: ".8rem" }, // Responsive buton font boyutu
                        padding: { xs: "0.2rem 0.5rem", sm: "0.3rem 0.5rem" }, // Responsive padding
                      }}
                      onClick={() => handleSliderClick(item.id)}
                    >
                      Haberin Devamı
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Grid>

      {/* Maç Takvimi Bölümü */}
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            background: "linear-gradient(45deg, #012D72 , #155AB4 100%)",
            padding: 2,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
            Maç Sonuçları ve Takvimi
          </Typography>
          <Box
            sx={{
              marginBottom: 2,
              padding: 1,
              backgroundColor: "#fff",
              borderRadius: 1,
              boxShadow: 2,
            }}
          >
            {/* 1. MAÇ */}
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{ textAlign: "center" }}
            >
              17 Kasım - 20:00
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Poppins",
              }}
            >
              <img
                src={logo}
                alt=""
                width={40}
                style={{ marginRight: "5px" }}
              />
              Komodor 5-4 Red Lightning
              <img src={red} alt="" width={45} />
            </Typography>
            <Typography
              variant="caption"
              display="block"
              sx={{ textAlign: "center" }}
            >
              Club Aydinoglu
            </Typography>
          </Box>

          {/* 2.MAÇ */}

          <Box
            sx={{
              marginBottom: 2,
              padding: 1,
              backgroundColor: "#fff",
              borderRadius: 1,
              boxShadow: 2,
            }}
          >
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{ textAlign: "center" }}
            >
              24 Kasım - 18:00
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Poppins",
              }}
            >
              <img
                src={logo}
                alt=""
                width={40}
                style={{ marginRight: "5px" }}
              />
              Komodor 5-5 Pro Devils
              <img src={prodevils} alt="" width={40} />
            </Typography>
            <Typography
              variant="caption"
              display="block"
              sx={{ textAlign: "center" }}
            >
              Club Aydinoglu
            </Typography>
          </Box>
          {/* 3.MAÇ */}
          <Box
            sx={{
              marginBottom: 2,
              padding: 1,
              backgroundColor: "#fff",
              borderRadius: 1,
              boxShadow: 2,
            }}
          >
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{ textAlign: "center" }}
            >
              1 Aralık - 19:00
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Poppins",
              }}
            >
              <img
                src={logo}
                alt=""
                width={40}
                style={{ marginRight: "5px" }}
              />
              Komodor 4-4 Karabela
              <img src={karabela} alt="" width={50} />
            </Typography>
            <Typography
              variant="caption"
              display="block"
              sx={{ textAlign: "center" }}
            >
              Club Aydinoglu
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* Kart Haberleri Bölümü */}
      <Grid container spacing={4} sx={{ marginTop: 4, marginLeft: 1 }}>
        {cardNews.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  fontFamily="poppins"
                  component="div"
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <Box sx={{ textAlign: "end", padding: 2 }}>
                <Button
                  variant="contained"
                  onClick={() => handleSliderClick(item.id)}
                  sx={{
                    fontSize: { xs: "0.75rem", sm: ".8rem" }, // Responsive buton font boyutu
                    padding: { xs: "0.2rem 0.5rem", sm: "0.3rem 0.5rem" }, // Responsive padding
                  }}
                >
                  Haberin Devamı
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default NewsSection;
