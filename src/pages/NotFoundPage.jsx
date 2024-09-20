import { Box, Button, Typography } from "@mui/material";
import { text } from "framer-motion/client";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

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
        Sayfa Bulunamadı.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", marginY: "20px" }}>
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
};

export default NotFoundPage;
