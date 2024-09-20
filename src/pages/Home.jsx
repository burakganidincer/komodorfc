import React from "react";
import { Helmet } from "react-helmet";
import NewsSection from "../components/NewsSection";
import { Paper } from "@mui/material";
import Hikayemiz from "../components/Hikayemiz";
import Welcome from "../components/Welcome";
import Contact from "./Contact";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Komodor FC | Anasayfa</title>
        <meta
          name="description"
          content="Komodor FC'nin resmi web sitesi. Takımımız hakkında bilgilere, haberler ve maç sonuçlarına ulaşın."
        />
      </Helmet>
      <Paper elevation={14} sx={{ py: "10px" }}>
        <Welcome />
        <NewsSection />
        <Hikayemiz />
        <Gallery />
        <Contact />
      </Paper>
    </div>
  );
};

export default Home;
