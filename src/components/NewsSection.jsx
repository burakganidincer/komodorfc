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
import dortyuzon from "../images/dortyuzon.png";
import haber1 from "../images/newshafta1.jpg";
import minifutbol from "../images/minifutbol.jpg";
import caner410 from "../images/canerdortyuzon.jpg";
import isobaba from "../images/isobaba1.png";
import alimertdogan from "../images/alimertdogan.png";
import edipahmet from "../images/edipahmet.jpg";
import nice from "../images/takimlar/nice.png";
import genclergucu from "../images/takimlar/genclergucu.png";
import lordofcity from "../images/takimlar/lordofcity.png";

// Gelecek maçlar
const matches = [
  {
    id: 1,
    date: "22 EKİM",
    time: "20:00",
    home: "Komodor FC",
    away: "Dörtyüzon",
    stadium: "Club Aydınoğlu",
  },
  {
    id: 2,
    date: "22 EKİM",
    time: "21:00",
    home: "Komodor FC",
    away: "Şut At Jazz",
    stadium: "Club Aydınoğlu",
  },
];

// Slider Haberler
export const sliderNews = [
  {
    id: 1,
    title: "MS: Komodor FC 6 - 3 Gençlergücü",
    description: "Takımımız yoluna kayıpsız devam ediyor.",
    image: haber1,
    fullText: `
      Komodor FC, Gençlergücü karşısında muazzam bir performans sergileyerek 6-3 galip geldi. Maçın başlangıcı oldukça etkileyiciydi; takımımızın atakları, rakip defansı zor durumda bıraktı ve erken dakikalarda öne geçmeyi başardık. İlk yarının ortalarına doğru, Gençlergücü'nün sert direnişiyle karşılaştık. Rakip takım, aradaki farkı kapatmak için sıkı bir mücadele verdi ve maçın dengesi bir süre için değişti. Ancak, takımımızın stratejik hamleleri ve oyuncularımızın üstün yetenekleri, oyunun kontrolünü tekrar ele geçirmemizi sağladı.

      Maçın ikinci yarısında ise önemli bir gelişme yaşandı: Doğaner Köse, tartışmalı bir pozisyonda kırmızı kart gördü ve takımımız 10 kişi kaldı. Bu zorlu durum karşısında, takımımızın mücadele ruhu ve organizasyonu daha da ön plana çıktı. Eksik oyuncuya rağmen, rakibin ataklarını başarılı bir şekilde savunduk ve kendi fırsatlarımızı değerlendirdik.

      Sonuç olarak, maçın sonlarına doğru farkı daha da açarak etkileyici bir galibiyet elde ettik. Rakibin çabalarına rağmen, gollerimiz gelmeye devam etti ve sahadan rahat bir galibiyetle ayrıldık. Bu zafer, takımımızın moralini yüksek tuttuğu ve ligdeki iddiamızı sürdürdüğümüz bir maç oldu. Gençlergücü karşısındaki bu etkileyici galibiyet, sezon boyunca ne kadar güçlü bir ekip olduğumuzu bir kez daha gözler önüne serdi. Takımımıza gösterdikleri üstün performanstan dolayı teşekkür eder, taraftarlarımızı bir sonraki maçımızda da yanımızda görmekten mutluluk duyarız.
    `,
  },
  {
    id: 2,
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
  {
    id: 3,
    title: "Edip Ahmet sahada..",
    description: "Edip Ahmet siftahı yaptı..",
    image: edipahmet,
    fullText: `
     Edip Ahmet, takımımızın ilk maçında etkileyici bir performans sergileyerek büyük bir etki yarattı. Yeni transferimiz, maçın başından itibaren sahada adeta şov yaptı. Özellikle attığı uzun toplarla dikkat çekti ve orta saha oyuncusu olarak ne kadar yetenekli olduğunu gözler önüne serdi.

      Edip Ahmet’in oyun tarzı, takımımıza önemli bir dinamizm kattı. Uzun pasları ve oyun görüşü, hücum hattımızı destekleyerek rakip savunmayı zor durumda bıraktı. Maç boyunca gösterdiği yüksek tempo ve etkili oyunuyla, takım arkadaşlarıyla uyum içinde çalıştı ve kısa sürede takıma adaptasyon sağladı. Bu performansıyla, hem taraftarlarımızın hem de teknik ekibin beğenisini kazandı. Edip Ahmet’in sahadaki varlığı, takımın genel oyun anlayışını da olumlu yönde etkiledi. İlk maçında gösterdiği bu üstün performans, gelecekteki maçlar için umut verici bir başlangıç oldu.

      Takımımız, Edip Ahmet’in katkılarıyla daha da güçlendi. Bu tür etkileyici performanslar, sezon boyunca başarıya ulaşma hedefimizi destekleyecek ve futbolseverleri heyecanlandıracak. Edip Ahmet’e hoş geldin diyor, başarılarının devamını diliyoruz.
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
    title: "Caner ÇAĞLAYAN Dörtyüzon'da",
    description:
      "Tecrübeli oyuncumuz Caner için Dörtyüzon Kulübü ile görüşmelere başlandı.",
    image: caner410,
    fullText: `
          Geçtiğimiz sezon takımımızda kiralık olarak oynayan tecrübeli oyuncumuz Caner Çağlayan, eski kulübü Dörtyüzon’a geri döndü. Caner, takımımıza kattığı değerli deneyim ve etkili performansıyla büyük katkı sağladı.

      Onun sahadaki liderliği ve oyun zekâsı, hem takım arkadaşları hem de taraftarlar tarafından takdir edildi. Artık, Dörtyüzon'un forması altında mücadele edecek olan Caner’e yeni kulübünde başarılar diliyoruz.

      Caner’in eski takımına dönerken, kariyerinde yeni bir sayfa açması ve Dörtyüzon’a önemli katkılarda bulunması bekleniyor. Taraftarlarımız, Caner’in sahadaki yeteneklerini izlemeye devam edecek ve eski futbolcumuzun yeni takımında da başarılı olmasını umuyor.
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
              14 EKİM - 19:00
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
              Komodor 6-3 Gençlergücü
              <img src={genclergucu} alt="" width={45} />
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
              22 EKİM - 20:00
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
              Komodor vs Nice
              <img src={nice} alt="" width={40} />
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
              29 EKİM - 21:00
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
              Komodor vs Lord Of City
              <img src={lordofcity} alt="" width={50} />
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
