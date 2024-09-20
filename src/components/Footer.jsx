import { CurrencyBitcoin } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      position="static"
      height={"150px"}
      color={"white"}
      fontFamily={"Poppins"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      textAlign={"center"}
      gap={"20px"}
      sx={{
        background: "linear-gradient(45deg, #012D72 , #155AB4 100%)",
        px: { xs: "10px", md: "20px" },
      }}
    >
      <Box display={"flex"} gap={"10px"}>
        <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
          Anasayfa
        </Link>
        <Link
          to={"/kadromuz"}
          style={{ color: "white", textDecoration: "none" }}
        >
          Kadromuz
        </Link>
        <Link
          to={"/hakkimizda"}
          style={{ color: "white", textDecoration: "none" }}
        >
          Hakkımızda
        </Link>
        <Link
          to={"/contact"}
          style={{ color: "white", textDecoration: "none" }}
        >
          İletişim
        </Link>
      </Box>
      <Typography fontFamily={"inherit"} color="gray">
        Copyright &copy; Komodor FC Medya 2024 | Tüm Hakları Saklıdır.
      </Typography>
    </Box>
  );
};

export default Footer;
