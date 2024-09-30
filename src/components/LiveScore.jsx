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
        HABERLER : Caner ÇAĞLAYAN Komodor FC'de, Tecrübeli oyuncunun transferi
        için Dörtyüzon Kulübü ile tekrar görüşmelere başlandı. &nbsp; | MS:
        Komodor FC 6 - 4 Lord Of City&nbsp; | &nbsp; Geçtiğimiz sezonun gol
        kralı olan oyuncumuz Ali Mert DOĞAN'ın ayağından geçirdiği ameliyat
        başarıyla sonuçlandı. Tecrübeli golcü 1 ay sahalardan uzak
        kalacak.&nbsp; | &nbsp;Samet Aktan antrenmanda sakatlandı. Başarılı
        solbek oyuncumuzun köprücük kemiğinde kırık tespit edildi.&nbsp; |
        &nbsp;
      </Typography>
    </Box>
  );
};

export default LiveScore;
