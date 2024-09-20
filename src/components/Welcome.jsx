import { Box, Typography, Button } from "@mui/material";
import React from "react";
import sampiyon from "../images/sampiyon.mov";
import { useNavigate } from "react-router-dom";
import GroupsIcon from "@mui/icons-material/Groups";
import InfoIcon from "@mui/icons-material/Info";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "relative",
        height: "50vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        zIndex: 1,
      }}
    >
      <video
        src={sampiyon}
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          p: 3,
          maxWidth: "800px",
          width: "100%",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0.578)",

              fontSize: { xs: "24px", sm: "32px", md: "40px" },
              fontWeight: "bold",
              borderRadius: "10px",
            }}
          >
            Türkiye'de Bir İlk..
          </Typography>
          <Typography
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.578)",
              mt: 2,
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              borderRadius: "10px",
            }}
          >
            Komodor FC Halısaha Futbol Takımı Resmi İnternet Sitesine Hoş
            Geldiniz!
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              color="info"
              sx={{ mr: 2 }}
              onClick={() => navigate("/kadromuz")}
              endIcon={<GroupsIcon />}
            >
              Kadromuz
            </Button>
            <Button
              onClick={() => navigate("/hakkimizda")}
              color="info"
              variant="contained"
              startIcon={<InfoIcon />}
            >
              Hakkımızda
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
