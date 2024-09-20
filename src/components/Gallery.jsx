import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
import game1 from "../images/haftaninmaci/game1.jpg";
import game2 from "../images/haftaninmaci/game2.jpg";
import game3 from "../images/haftaninmaci/game3.jpg";
import game4 from "../images/haftaninmaci/game4.jpg";
import game5 from "../images/haftaninmaci/game5.jpg";
import game6 from "../images/haftaninmaci/game6.jpg";
import game7 from "../images/haftaninmaci/game7.jpg";
import game8 from "../images/haftaninmaci/game8.jpg";
import game9 from "../images/haftaninmaci/game9.jpg";
import game10 from "../images/haftaninmaci/game10.jpg";
import game11 from "../images/haftaninmaci/game11.jpg";
import game12 from "../images/haftaninmaci/game12.jpg";

// 12 adet resim için örnek veri
const images = [
  game1,
  game2,
  game3,
  game4,
  game5,
  game6,
  game7,
  game8,
  game9,
  game10,
  game11,
  game12,
];

// Framer Motion animasyon ayarları
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Gallery = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography
        variant="h4"
        sx={{
          color: "#012D72",
          fontWeight: "bold",
          marginBottom: 3,
          textAlign: "center",
        }}
      >
        Son Karşılaşmamızdan Görüntüler
      </Typography>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            component={motion.div}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2 }} // Sıralı yüklenme
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }} // Hover scale efekti
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                overflow: "hidden",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <img
                src={image}
                alt={`gallery-image-${index}`}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;