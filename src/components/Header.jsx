import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import * as React from "react";
import logo from "../images/logo.png";
import "../css/Header.css";
import "@fontsource/poppins";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer"; // Drawer bileşenini ekliyoruz.
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const pages = ["ANASAYFA", "KADROMUZ", "HAKKIMIZDA", "İLETİŞİM"];
const pagesDirect = ["/", "kadromuz", "/hakkimizda", "/iletisim"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false); // Drawer'ın açık olup olmadığını tutan state.

  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open); // Drawer'ı açıp kapamak için kullanıyoruz.
  };

  const navigate = useNavigate();

  const handleNavigate = (index) => {
    navigate(pagesDirect[index]);
    setDrawerOpen(false); // Drawer açıkken bir sayfaya tıklandığında kapansın.
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(45deg, #012D72 , #155AB4 100%)",
        px: { xs: "1px", md: "20px" },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} className="logo" onClick={() => navigate("/")} />

          <div style={{ marginRight: "50px" }}>
            <Typography
              variant="h7"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Poppins",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              KOMODOR FC
            </Typography>
            <Typography
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Poppins",
                fontWeight: 400,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: "7px",
              }}
            >
              RESMİ İNTERNET SİTESİ
            </Typography>
          </div>

          {/* Mobil Menü - Drawer */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)} // Drawer'ı açmak için kullanıyoruz.
              color="inherit"
              sx={{ ml: "-55px" }}
            >
              <MenuIcon />
            </IconButton>

            {/* Drawer Bileşeni */}
            <Drawer
              anchor="left" // Drawer'ın soldan açılacağını belirtiyoruz.
              open={drawerOpen} // Açık olup olmadığını kontrol ediyoruz.
              onClose={toggleDrawer(false)} // Kapandığında drawerOpen state'ini false yapıyoruz.
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
              >
                <List>
                  {pages.map((page, index) => (
                    <ListItem key={page} disablePadding>
                      <ListItemButton onClick={() => handleNavigate(index)}>
                        <ListItemText primary={page} />{" "}
                        {/* Sayfa isimlerini gösteriyoruz. */}
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Box>

          <img src={logo} className="logo-jr" />
          <Typography
            variant="h7"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Poppins",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            KOMODOR FC
          </Typography>

          {/* Büyük Ekran Menü */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={() => handleNavigate(index)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Poppins",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              sx={{ p: 0 }}
              onClick={() =>
                window.open("https://www.instagram.com/komodorfc", "_blank")
              }
            >
              <InstagramIcon
                sx={{ color: "white", fontSize: "25px", mr: "12px" }}
              />
            </IconButton>
            <IconButton
              sx={{ p: 0 }}
              onClick={() =>
                window.open("https://www.youtube.com/@Komodor2015", "_blank")
              }
            >
              <YouTubeIcon sx={{ color: "white", fontSize: "25px" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
