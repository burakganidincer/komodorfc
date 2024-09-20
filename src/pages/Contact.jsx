import React from "react";
import { Box, Typography, TextField, Button, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const notifySuccess = () => {
    toast.success("Mesajınız başarıyla gönderildi", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const notifyError = () => {
    toast.error("Mesaj gönderilemedi!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        () => {
          notifySuccess();
        },
        (error) => {
          notifyError();
        }
      );
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: 2, sm: 4, md: 6 },
        backgroundColor: "#fff",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box sx={{ textAlign: "center", marginBottom: 4 }}>
          <Typography
            variant="h4"
            sx={{
              color: "#012D72",
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            İletişim Bilgileri
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 4 }}>
            Her türlü soru, görüş, öneri, sponsorluk anlaşmaları veya
            transferler hakkında bilgi almak için lütfen aşağıdaki form
            üzerinden ya da iletişim e-posta adresimiz üzerinden bizimle
            iletişime geçin.
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            İletişim E-posta:{" "}
            <a href="mailto:komodor2015@gmail.com">komodor2015@gmail.com</a>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: "100%",
              maxWidth: 600,
              padding: 3,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                marginBottom: 3,
                textAlign: "center",
                color: "#012D72",
                fontWeight: "bold",
              }}
            >
              Bize Ulaşın
            </Typography>
            <Box
              component="form"
              ref={form}
              sx={{ mt: 1 }}
              onSubmit={sendEmail}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="İsim"
                    variant="outlined"
                    name="user_name"
                    required
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Soyisim"
                    variant="outlined"
                    name="user_surname"
                    required
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="E-mail"
                    variant="outlined"
                    type="email"
                    name="user_email"
                    required
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Telefon"
                    variant="outlined"
                    type="tel"
                    name="phone"
                    required
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Mesaj"
                    name="message"
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                    sx={{ mb: 2 }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Gönder
              </Button>
            </Box>
          </Paper>
        </Box>
      </motion.div>
      <ToastContainer />
    </Box>
  );
};

export default Contact;
