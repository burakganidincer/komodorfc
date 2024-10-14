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
import caner410 from "../images/canerdortyuzon.png";
import isobaba from "../images/isobaba1.png";
import alimertdogan from "../images/alimertdogan.png";
import modernfootball from "../images/takimlar/modernfootball.png";
import kartalcity from "../images/takimlar/kartalcity.png";
import sutatjazz from "../images/takimlar/sutatjazz.png";

import hako from "../images/haftaninmaci/haftaninmaci1.jpeg";

// Slider Haberler
export const sliderNews = [
  {
    id: 1,
    title: "MS: Komodor FC 5 - 1 KartalCity",
    description: "Şanlı Komodor Oyuncularımızı Tek Tek Tebrik Ediyoruz.",
    image: haber1,
    fullText: `
     Geçtiğimiz hafta Beykoz maçının ardından Disiplin Kurulu’nun 6 oyuncumuza verdiği ağır cezalara rağmen, Komodor FC sahada gücünü ve kararlılığını bir kez daha gösterdi. Takımımız, KartalCity gibi ligin önemli ekiplerinden birine karşı oynadığı maçta 5-1’lik net bir galibiyet elde etti. Bu zafer, zirveye olan yürüyüşümüzde ne kadar kararlı olduğumuzu gösterirken, futbolcularımızın da morallerini yüksek tutmayı başardık.

Maçın başından itibaren etkili olan takımımız oyun başında 1-0 geri düştü, Erberk’in 12. dakikada attığı harika golle skoru 1-1'e getirdi. Takımın hücum hattında sürekli tehdit oluşturan Erberk, takımımızın en önemli oyuncularından biri olarak parladı. İlk yarının sonlarına doğru İsmail Ardanın’in etkili oyunuyla bulduğumuz ikinci gol, soyunma odasına 2-1’lık üstünlükle girmemizi sağladı.

İkinci yarıda da oyunun kontrolünü bırakmayan Komodor FC, Erberk’in bir kez daha sahneye çıkmasıyla skoru 3-1’a taşıdı. Maçın son bölümlerine doğru Caner’in attığı iki golle farkı daha da açtık ve maçı 5-1’lik skorla kazandık.

Erberk ve Caner’in etkili performansları, maçın kaderini belirlerken, takımımız Disiplin Kurulu’nun haksız cezalarına futbol sahasında en güzel yanıtı verdi. Komodor FC olarak üzerimize oynanan oyunların farkındayız ve her zaman futbolumuzla cevap vermeye devam edeceğiz. Ligimizin değerli ekiplerinden KartalCity'nin oyununa saygı duyuyor ve onları bu güzel mücadele için tebrik ediyoruz kalan maçlarında başarılar diliyoruz.

Bu zafer, zirvedeki yerimizi sağlamlaştırdı ve şampiyonluk yolunda kararlılığımızı bir kez daha kanıtladı.







    `,
  },
  {
    id: 2,
    title: "Komodor FC'nin İsviçre Çakısı: Erberk Coşkun Yine Fark Yarattı",
    description: "Forvet pozisyonunda oynayan Erberk göz kamaştırdı.",
    image: hako,
    fullText: `
    Komodor FC’nin çok yönlü oyuncusu Erberk Coşkun, bu hafta ligin en güçlü ekiplerinden birine karşı sergilediği müthiş performansla adeta parladı. Cezalı oyuncularımızın yokluğunda forvet mevkisinde oynayan Erberk, 2 gol ve 1 asistle maçın yıldızı oldu. Sahadaki her pozisyonda kendine yer bulabilen ve takımına büyük katkı sağlayan Erberk’e artık taraftarlar “İsviçre Çakısı” diyor. Nitekim, onu takımın her alanında kullanabiliyoruz!

Forvet pozisyonunda oynamasına rağmen hücumdaki dinamizmi ve oyuna katkısıyla sanki yıllardır bu mevkide oynuyormuş gibi bir performans sergileyen Erberk, takımımızı sırtlamaya devam ediyor. Hem attığı gollerle hem de yaptığı asistle sahadaki çok yönlülüğünü bir kez daha gösterdi. Kritik anlarda sorumluluk alarak rakip savunmayı zor duruma sokan yıldız oyuncu, sahadaki liderliğiyle de göz doldurdu.

Bu hafta oynadığımız zorlu maçta rakip savunmayı defalarca zorlayan ve bitiriciliğiyle fark yaratan Erberk, özellikle ikinci golünde yaptığı muhteşem vuruşla taraftarları coşturdu. Takım arkadaşlarına da asist yaparak, skora hem bireysel hem de kolektif katkı sağladı.

Erberk Coşkun’un çok yönlü oyunu, Komodor FC’nin bu sezonki başarı hikayesinde büyük bir rol oynuyor. Cezalı oyuncularımızın eksikliğini hissettirmeden her mevkide en iyi performansı göstermesi, takımımızın gücünü ve derinliğini ortaya koyuyor. İsviçre çakısı lakabını sonuna kadar hak eden Erberk, sahadaki enerjisi ve etkili oyunuyla takımın vazgeçilmezlerinden biri haline geldi.

Komodor FC olarak, Erberk Coşkun’un bu formunu sürdürerek takımımıza daha nice galibiyetler kazandıracağından hiç şüphemiz yok!
    `,
  },
  {
    id: 3,
    title: "Disiplin Kurulunun kararlarına istinaden..",
    description: "Sözün bittiği yerdeyiz..",
    image: caner410,
    fullText: `
     Beykoz maçında yaşanan olaylar sonucunda futbolcularımıza ve kulübümüze verilen cezaların hakkaniyetten uzak ve Komodor FC’yi mağdur eden bir nitelikte olduğunu düşünüyoruz. 

Verilen cezalar, olayın gerçek yüzünü yansıtmamakta ve yalnızca Komodor FC oyuncularını hedef almaktadır. Rakip takımın yalnızca 1 oyuncusuna ceza verilmesi, oysa bizim takımımızdan 6 futbolcunun ağır şekilde cezalandırılması, alınan kararların haksız ve orantısız olduğunu göstermektedir. Takımımızın disiplinli bir şekilde hareket ettiği ve sadece olayları yatıştırmak amacıyla müdahale ettiği apaçık ortadadır.

Komodor FC olarak, bu cezaların sadece takımımızı cezalandırmak için verilmiş olduğu düşüncesindeyiz. Eğer bu olaylar sırasında kavgaya katılma niyetimiz olsaydı, çok daha büyük olaylar çıkabileceği aşikardır. Ancak bizler, olayları yatıştırmak için elimizden geleni yaparken bu kadar ağır cezalarla karşılaşmak, hem takımımıza hem de oyuncularımıza haksızlık oluşturmaktadır.

Bizden 6 kişi, rakip takımdan ise sadece 1 kişi kırmızı kart görmüştür. Komodor FC kendi arasında mı kavga etti ki bu kadar ceza aldı? Disiplin Kurulunun ve BAZI ANADOLU LİGİ takımlarının hesaba katmadığı bir gerçek vardır. Biz Komodor FC olarak sahaya çıktığımız her maçın favorisi biz olduğumuzu bilmenizi isteriz. Alınan kararlara rağmen sadece futbolumuza odaklanacağımızın bilinmesini isteriz.
Saygılarımızla.
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
              13 Ekim - 19:00
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
              Komodor 5-1 KartalCity
              <img src={kartalcity} alt="" width={45} />
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
              20 Ekim - 21:00
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
              Komodor vs Modern Football
              <img src={modernfootball} alt="" width={40} />
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
              26 Ekim - 21:00
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
              Komodor vs Sut At Jazz
              <img src={sutatjazz} alt="" width={50} />
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
