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
import haber1 from "../images/haftaninmaci/haber1.jpeg";
import minifutbol from "../images/minifutbol.jpg";
import caner410 from "../images/canerdortyuzon.jpg";
import isobaba from "../images/isobaba1.png";
import alimertdogan from "../images/alimertdogan.png";
import edipahmet from "../images/edipahmet.jpg";
import kartalcity from "../images/takimlar/kartalcity.png";
import lordofcity from "../images/takimlar/lordofcity.png";
import beykoz from "../images/takimlar/beykoz.png";
import hako from "../images/newshakan.jpg";

// Slider Haberler
export const sliderNews = [
  {
    id: 1,
    title: "MS: Komodor FC 6 - 4 Lord Of City",
    description: "Takımımız yoluna kayıpsız devam ediyor",
    image: haber1,
    fullText: `
     Bu hafta sahamızda Lord Of City ile oynadığımız kritik maçtan 6-4’lük galibiyetle ayrılarak zirvedeki yerimizi sağlamlaştırdık. Takımımız, yine muhteşem bir performans sergileyerek taraftarlarımızı coşturdu ve şampiyonluk yolunda emin adımlarla ilerlemeye devam etti. Özellikle hücum hattındaki oyuncularımızın üstün performansı, bu zorlu mücadelede fark yarattı.

Maça hızlı başlayan takımımız, ilk dakikalardan itibaren kontrolü eline aldı. Daha 10. dakikada Yiğit Duman, müthiş bir şutla takımımızı 1-0 öne geçirdi. Hem gol atan hem de oyun kurucu rolünü üstlenen Yiğit, oyunun kaderini belirleyen isimlerden biri oldu. Dakikalar ilerledikçe baskıyı artıran Komodor FC, Deniz Eren’in etkili asistleriyle pozisyonlar bulmaya başladı. Deniz'in akıl dolu paslarıyla Hakan, 2 kez üst üste sahneye çıkarak skoru 3-0 yaptı.

Lord Of City, oyuna yeniden tutunmaya çalışsa da savunmamız ve kalecimiz Mehmet'in kritik müdahaleleri rakibin direncini kırdı. İlk yarı sonunda İsmail Arda Yamaç’ın şık golüyle farkı iyice açarak devreye 4-1 önde girdik.

İkinci yarıda Lord Of City’den beklenen ataklar gelse de takımımız sakin ve disiplinli oyunuyla maçı kontrol etmeyi başardı. Aytunç, hem attığı golle hem de yaptığı asistle farkı açan isimlerden biri oldu. Oyun disiplininden hiç kopmayan Komodor FC, Hakan’ın üçüncü golüyle skoru 6-2’ye taşıdı. Rakip takım son dakikalarda 2 gol bulsa da bu, maçın sonucunu değiştirmedi.

Son düdükle birlikte sahadan 6-4’lük net bir galibiyetle ayrılan takımımız, hem liderliğini pekiştirdi hem de taraftarlarına bir kez daha keyifli bir maç izlettirdi. Yiğit’in 1 gol ve 1 asisti, Deniz Eren’in 2 asistlik katkısı, Hakan’ın 3 gol ve 2 asistiyle müthiş performanslar sergilendi. Takımımızın bu uyumlu ve kararlı futbolu, şampiyonluğa ne kadar yakın olduğumuzu bir kez daha gösterdi.

Bu zafer, Komodor FC’nin sahadaki üstünlüğünü bir kez daha kanıtladı ve moral motivasyonumuzu zirveye taşıdı. Şampiyonluk yolunda hız kesmeden ilerlemeye devam ediyoruz!
    `,
  },
  {
    id: 2,
    title: "Hakan Yıldırım'dan şov!",
    description: "Hakan Yıldırım, Yükselen Performansıyla Göz Dolduruyor!",
    image: hako,
    fullText: `
     Komodor FC'nin yetenekli ortasahası Hakan Yıldırım, son haftalardaki müthiş performansıyla taraftarların ve futbol otoritelerinin dikkatini çekiyor. Üst üste sergilediği etkileyici futbol ve attığı gollerle takımını sırtlayan Hakan, adeta formunun zirvesine ulaştı.

Son 3 maçta 7 gol ve 4 asistlik inanılmaz bir istatistiğe imza atan Hakan, hücum hattında sergilediği oyunla fark yaratmaya devam ediyor. Hem gol yollarındaki bitiriciliği hem de arkadaşlarına yaptığı asistlerle takımına büyük katkı sağlayan yıldız oyuncu, Komodor FC'nin liderlik mücadelesinde kilit rol oynuyor.

Hakan'ın bu yükselen performansı, takımın genel başarısına da büyük katkıda bulundu. Hücum hattındaki etkinliğiyle rakip savunmaları zor durumda bırakan Hakan, sahadaki liderliğiyle de takım arkadaşlarını motive ediyor. Özellikle son haftalarda maçın kaderini değiştiren kritik anlarda sahneye çıkması, onu takımın en önemli oyuncularından biri haline getirdi.

Komodor FC'nin zirve yolculuğunda Hakan Yıldırım'ın bu performansını devam ettirmesi, hem takımın hem de taraftarların en büyük beklentisi. Sahadaki hırsı, mücadeleci yapısı ve skora katkısıyla Hakan, şimdiden sezonun en çok konuşulan oyuncuları arasında yerini aldı.

Hakan Yıldırım’ın bu müthiş form grafiğiyle takımımıza daha nice zaferler kazandıracağından eminiz!
    `,
  },
  {
    id: 3,
    title: "Caner ÇAĞLAYAN Komodor FC'de..",
    description: "Caner Çağlayan Komodor FC'ye Geri Döndü!",
    image: caner410,
    fullText: `
    Geçtiğimiz sezon takımımızda kiralık olarak oynayan ve ardından eski kulübü Dörtyüzon'a geri dönen tecrübeli oyuncumuz Caner Çağlayan, yeniden Komodor FC'ye katıldı. Dörtyüzon'un lige katılmayacağını açıklaması üzerine, Caner eski yuvasına dönme kararı aldı.

Caner, önceki dönemlerde takımımıza kattığı deneyim ve etkili performansıyla büyük katkı sağlamıştı. Sahadaki liderliği ve oyun zekâsı, hem takım arkadaşları hem de taraftarlar tarafından büyük takdir topladı. Taraftarlarımız, Caner'in Komodor FC forması altında sahadaki yeteneklerini yeniden izleme fırsatı bulacak.

Takımımıza tekrar katılacak olan Caner'e, bu yeni dönemde de başarılar diliyoruz. Komodor FC ailesi olarak, Caner’in sahada bize kattığı değeri yeniden görmekten mutluluk duyacağız.
    `,
  },
];

// Kart Haberler
export const cardNews = [
  {
    id: 4,
    title: "Takımımız Türkiye Şampiyonasında!",
    description:
      "Komodor FC 1-3 Kasım tarihleri arasında Antalya'da sahne alacak.",
    image: minifutbol,
    fullText: `
    Komodor FC, uzun süredir hedeflediği Türkiye Şampiyonası'nda mücadele etmeye hazırlanıyor. 1-3 Kasım tarihleri arasında Antalya'da düzenlenecek olan turnuvada, takımımız ülkenin dört bir yanından gelen güçlü rakiplerle karşılaşacak. Turnuvaya katılacak olan Komodor FC'nin oyuncuları, haftalardır yoğun bir antrenman programı uygulayarak turnuva hazırlıklarını tamamladı. Başarılı bir sezon geçiren ve performansıyla göz dolduran takımımız, bu turnuvada da şampiyonluk hedefliyor.

      Teknik direktörümüzün açıklamasına göre, takım hem fiziksel hem de mental olarak zorlu mücadelelere hazır durumda. "Antalya'da sahada elimizden gelenin en iyisini yapacağız. Taraftarlarımızın desteğiyle Türkiye'nin en iyi takımları arasında yerimizi alacağımıza inanıyoruz." dedi.

      Rakiplerimiz arasında ülkenin köklü ve güçlü takımları bulunuyor olsa da, Komodor FC bu turnuvada da adından söz ettirmeye kararlı. Türkiye Şampiyonası'nda takımımızı desteklemek isteyen tüm taraftarlarımızı, Antalya'daki müsabakalara bekliyoruz. Turnuvanın ilk maçı 1 Kasım'da oynanacak. Şampiyonluğa uzanan bu yolda, tüm takımımıza başarılar diliyoruz!
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
              29 Eylül - 19:00
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
              Komodor 6-4 Lord Of City
              <img src={lordofcity} alt="" width={45} />
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
              4 Ekim - 21:00
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
              Komodor vs Beykoz 1908
              <img src={beykoz} alt="" width={40} />
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
              10 Ekim - 21:00
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
              Komodor vs Kartalcity
              <img src={kartalcity} alt="" width={50} />
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
