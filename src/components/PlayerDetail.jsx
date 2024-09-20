// pages/PlayerDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { players } from "../Data"; // Oyuncu verilerini import edin
import { createSlug } from "../utils/urlUtils"; // URL kodlama fonksiyonunu import edin
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  IconButton,
  Paper,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Kart ve içerik bileşenlerini daha responsive hale getirdik
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "row", // Masaüstü cihazlar için yatay düzen
  width: "80%", // Kart genişliği
  margin: "auto",
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  overflow: "hidden", // Kart içindeki taşmaları engelle
  [theme.breakpoints.down("md")]: {
    flexDirection: "column", // Mobil cihazlar için dikey düzen
    width: "100%", // Kart genişliği mobilde tam genişlik
  },
}));

const Content = styled(CardContent)(({ theme }) => ({
  flex: "1 0 auto",
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
  maxWidth: "100%", // İçerik genişliğini sınırla
  overflowWrap: "break-word", // Uzun metinlerin taşmasını engelle
  wordWrap: "break-word", // Metinlerin taşmasını engelle
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: 250,
  height: 250, // Resim kare olacak şekilde ayarlandı
  objectFit: "cover", // Resmin taşma yapmaması için
  [theme.breakpoints.down("md")]: {
    width: "100%", // Mobil cihazlarda resim genişliği tam genişlik
    height: "auto", // Mobilde boyutunu serbest bırak
  },
}));

function PlayerDetail() {
  const { slug } = useParams();
  const navigate = useNavigate(); // useNavigate hook'u ile yönlendirme işlevi

  // URL'den alınan slug ile oyuncuyu bul
  const player = players.find(
    (p) => createSlug(`${p.firstName} ${p.lastName}`) === slug
  );

  if (!player) {
    return (
      <div>
        <Typography
          variant="h4"
          sx={{
            color: "#012D72",
            fontWeight: "bold",
            marginTop: 2,
            textAlign: "center",
          }}
        >
          Oyuncu Bulunamadı. Mbappe'yi Real'e kiraladık..
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginY: "20px" }}
        >
          <Button
            sx={{ mt: "20px" }}
            variant="outlined"
            onClick={() => navigate("/")}
          >
            Anasayfaya Dön
          </Button>
        </Box>
      </div>
    );
  }

  return (
    <>
      <Paper elevation={14} sx={{ padding: "40px" }}>
        <Button
          sx={{ mt: "20px" }}
          variant="outlined"
          onClick={() => navigate("/kadromuz")} // Kadro sayfasına yönlendirme
          startIcon={<ArrowBackIcon />}
        >
          Kadroya Dön
        </Button>
        <StyledCard>
          <StyledCardMedia
            component="img"
            image={player.photo}
            alt={`${player.firstName} {player.lastName}`}
          />
          <Content>
            <Typography
              variant="h4"
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {player.firstName.toUpperCase()} {player.lastName.toUpperCase()}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Pozisyon: {player.position}
            </Typography>
            <Typography variant="body1">
              Doğum Tarihi: {player.birthdate}
            </Typography>
            <Typography variant="body1">
              Forma Numarası: {player.shirtNum}
            </Typography>
            <Typography variant="body1">Goller: {player.goal}</Typography>
            <Typography variant="body1">Asistler: {player.assist}</Typography>
            <Typography variant="body1">
              Kırmızı Kartlar: {player.redCard}
            </Typography>
            <Typography variant="body1">
              Sarı Kartlar: {player.yellowCard}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                whiteSpace: "normal", // Metin satırına sığmazsa otomatik satır başı yapsın
                overflowWrap: "break-word", // Uzun kelimeler taşmasın
                maxWidth: "100%", // İçeriğin genişliği tamamen kullanılabilir
                display: "block",
                paddingRight: "20%",
              }}
            >
              <br />
              Hakkında: {player.desc}
              <br />
              <br />
            </Typography>
            <a href={player.insta} target="_blank" rel="noopener noreferrer">
              <Button
                variant="contained"
                color="info"
                startIcon={<InstagramIcon />}
              >
                Instagram
              </Button>
            </a>
          </Content>
        </StyledCard>
      </Paper>
    </>
  );
}

export default PlayerDetail;
