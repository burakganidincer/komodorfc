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
        HABERLER : Takımımız Yarı-Final maçı için hazırlıklarına devam ediyor.
        &nbsp; | MS: Komodor FC 4 - 4 Karabela FC&nbsp; | &nbsp; Takımımız son
        haftalarda yükselen grafiğiyle dikkatleri üzerine çekiyor. &nbsp; |
        &nbsp;Genç kaleci Muaz Babur Komodor FC'de..&nbsp; | &nbsp; Takımımız
        Play-Off'lara yarı finalden dahil olacak.
      </Typography>
    </Box>
  );
};

export default LiveScore;
