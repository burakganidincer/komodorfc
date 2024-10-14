import React from "react";
import { Box, Typography } from "@mui/material";
import "../css/LiveScore.css"; // Stilleri ayrı bir CSS dosyasına alıyoruz

const LiveScore = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#012D72",
        color: "#fff",
        padding: "10px 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
      }}
    >
      <Typography
        variant="h8"
        sx={{
          display: "inline-block",
          animation: "scroll 45s linear infinite",
          fontFamily: "Poppins",
          fontWeight: 300,
          letterSpacing: ".1rem",
        }}
      >
        HABERLER : Kulübümüze oynanan oyunların farkındayız. Doğru zaman
        geldiğinde gereken tüm açıklamaları yapacağız &nbsp; | MS: Komodor FC 5
        - 1 Kartal City&nbsp; | &nbsp; Disiplin Kurulundan takımıza ceza
        yağmuru! 6 Futbolcumuz cezalı..&nbsp; | &nbsp;Samet Aktan düz koşulara
        başladı..&nbsp; | &nbsp;
      </Typography>
    </Box>
  );
};

export default LiveScore;
