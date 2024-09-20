import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { sliderNews, cardNews } from "./NewsSection"; // sliderNews ve cardNews import edildi
import { Box, Paper, Typography, Button } from "@mui/material";
import logo from "../images/logo.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NewDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const allNews = [...sliderNews, ...cardNews]; // Tüm haberler birleştirildi
  const newsItem = allNews.find((news) => news.id === parseInt(id));

  if (!newsItem) {
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
          Haber Bulunamadı. Asparagas haberlere lütfen itibar etmeyiniz
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
    <Paper
      elevation={24}
      sx={{ padding: { xs: 2, sm: 4, md: 6 }, margin: { xs: 1, sm: 2, md: 3 } }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          marginBottom: { xs: 2, sm: 0 },
        }}
      >
        <Button
          onClick={() => navigate("/")}
          variant="contained"
          sx={{
            margin: { xs: 1, sm: 0 },
            fontSize: { xs: "0.75rem", sm: "1rem" },
          }}
          startIcon={<ArrowBackIcon />}
        >
          Anasayfaya Dön
        </Button>
      </Box>
      <Box sx={{ padding: { xs: 1, sm: 2 } }}>
        <Typography
          color="#012D72"
          borderBottom={"2px solid #012D72"}
          textAlign={"center"}
          variant="h4"
          sx={{
            marginTop: 2,
            marginBottom: "10px",
            fontSize: { xs: "1.5rem", sm: "2rem" },
          }}
        >
          {newsItem.title.toLocaleUpperCase()}
        </Typography>
        <Box sx={{ textAlign: "center", marginBottom: { xs: 1, sm: 2 } }}>
          <img
            src={newsItem.image}
            alt={newsItem.description}
            style={{
              width: "90%", // Daha küçük ekranlarda genişliği artır
              maxWidth: "600px", // Maksimum genişlik ayarla
              height: "auto",
              borderRadius: "20px",
            }}
          />
        </Box>
        <Typography
          variant="h4"
          sx={{
            marginTop: 2,
            color: "red",
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
          }}
        >
          {newsItem.description}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            whiteSpace: "pre-line",
            fontSize: { xs: "0.875rem", sm: "1rem" },
          }}
        >
          {newsItem.fullText}
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", marginTop: { xs: 2, sm: 4 } }}>
        <img src={logo} alt="" width={80} style={{ marginBottom: "10px" }} />
        <Typography
          sx={{
            backgroundColor: "#012D72",
            color: "white",
            padding: "8px",
            fontSize: { xs: "0.75rem", sm: "1rem" },
          }}
        >
          <h4 style={{ margin: 0 }}>Komodor FC Medya </h4>
        </Typography>
      </Box>
    </Paper>
  );
};

export default NewDetail;
