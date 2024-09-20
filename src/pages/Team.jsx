import React, { useState } from "react";
import { Box, Tab, Tabs, Card, CardContent, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { players } from "../Data"; // Oyuncu verilerini import edin
import { createSlug } from "../utils/urlUtils"; // URL kodlama fonksiyonunu import edin
import { motion } from "framer-motion"; // Framer Motion import
import { Helmet } from "react-helmet";

function Team() {
  const [value, setValue] = useState(0); // Başlangıçta "Tüm Kadro" tabı seçili
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue); // Tab değişiminde state güncelle
  };

  const handleProfileClick = (player) => {
    const slug = createSlug(`${player.firstName} ${player.lastName}`);
    navigate(`/kadromuz/${slug}`);
  };

  const filterPlayers = (position) => {
    if (position === "Tüm Kadro") {
      return players;
    }
    return players.filter((player) => player.position === position);
  };

  const tabLabels = ["Tüm Kadro", "Defans", "Ortasaha", "Forvet"];

  // Framer Motion animasyon ayarları
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Kartların sırayla yüklenmesi için gecikme ekliyoruz
        duration: 0.5, // Animasyon süresi
      },
    }),
  };

  return (
    <div>
      <Helmet>
        <title>Komodor FC | Kadromuz</title>
        <meta
          name="description"
          content="Komodor FC'nin oyuncu kadrosu. Yetenekli futbolcularımız ve teknik ekibimiz hakkında detaylı bilgilere ulaşın."
        />
      </Helmet>

      <Box sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange} aria-label="team tabs">
          {tabLabels.map((label, index) => (
            <Tab label={label} key={index} />
          ))}
        </Tabs>
        <Box sx={{ p: 2 }}>
          <Grid container spacing={2}>
            {filterPlayers(tabLabels[value]).map((player, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={player.id}>
                <motion.div
                  custom={index} // Kartların sırasını animasyona geçiyoruz
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <Card>
                    <CardContent>
                      <img
                        src={player.photo}
                        alt={`${player.firstName} ${player.lastName}`}
                        style={{ width: "100%", height: "auto" }}
                      />
                      <p
                        style={{
                          fontFamily: "Poppins",
                          fontSize: "20px",
                          marginBottom: "15px",
                        }}
                      >
                        {player.firstName} {player.lastName}
                      </p>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleProfileClick(player)}
                      >
                        Profil
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Team;
