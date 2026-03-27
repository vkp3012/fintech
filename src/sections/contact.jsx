import { useState } from "react";
import {
  Box, Container, Grid, Typography, Button, Stack, Chip,
  TextField,
} from "@mui/material";
import { Send, CheckCircle, Email, Phone, WhatsApp } from "@mui/icons-material";

const CONTACT_INFO = [
  { icon: <Email sx={{ fontSize: 18 }} />,    label: "Email",     val: "ckaarisis@gmail.com",  color: "#1A3C8F" },
  { icon: <Phone sx={{ fontSize: 18 }} />,    label: "Phone",     val: "+91 6376980718",       color: "#22C55E" },
  { icon: <WhatsApp sx={{ fontSize: 18 }} />, label: "WhatsApp",  val: "+91 6376980718",       color: "#25D366" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", msg: "" });
  const [sent, setSent]  = useState(false);

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  const handleSend   = () => { if (form.name && form.email) setSent(true); };

  return (
    <Box id="contact" sx={{ py: { xs: 6, md: 10 }, bgcolor: "#F7F9FC" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>

          {/* ── Left: Info ── */}
          <Grid item xs={12} md={5}>
            <Stack spacing={2.5}>
              <Chip
                label="Get In Touch"
                sx={{ bgcolor: "#EEF2FF", color: "#1A3C8F", width: "fit-content", fontWeight: 600, fontSize: "0.75rem" }}
              />
              <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" }, color: "#0D1B3E" }}>
                Let's Grow Your Business Financially
              </Typography>
              <Typography sx={{ color: "#5A6A85", lineHeight: 1.8, fontSize: "0.92rem" }}>
                Ready to transform your finance operations? Let's discuss how Aqua Aarisis can become
                your trusted finance partner.
              </Typography>

              <Stack spacing={2} mt={1}>
                {CONTACT_INFO.map((c) => (
                  <Stack key={c.label} direction="row" spacing={2} alignItems="center">
                    <Box sx={{
                      width: 38, height: 38, borderRadius: "10px",
                      bgcolor: c.color + "15", color: c.color,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {c.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: "0.68rem", color: "#5A6A85" }}>{c.label}</Typography>
                      <Typography sx={{ fontSize: "0.88rem", fontWeight: 600, color: "#0D1B3E" }}>{c.val}</Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* ── Right: Form ── */}
          <Grid item xs={12} md={7}>
            <Box sx={{
              bgcolor: "#fff", borderRadius: 3,
              p: { xs: 2.5, md: 4 },
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
            }}>
              {sent ? (
                <Box textAlign="center" py={4}>
                  <CheckCircle sx={{ fontSize: 56, color: "#22C55E", mb: 2 }} />
                  <Typography variant="h5" sx={{ color: "#0D1B3E", mb: 1 }}>Message Sent!</Typography>
                  <Typography sx={{ color: "#5A6A85", fontSize: "0.9rem" }}>
                    We'll get back to you within 24 hours.
                  </Typography>
                </Box>
              ) : (
                <Stack spacing={2.5}>
                  <Typography variant="h5" sx={{ fontSize: "1.2rem", color: "#0D1B3E" }}>
                    Send Us a Message
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Full Name" size="small" value={form.name} onChange={handleChange("name")} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Email Address" size="small" value={form.email} onChange={handleChange("email")} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Phone Number" size="small" value={form.phone} onChange={handleChange("phone")} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="How can we help?" multiline rows={4} value={form.msg} onChange={handleChange("msg")} />
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained" size="large" endIcon={<Send />}
                    onClick={handleSend}
                    sx={{
                      bgcolor: "#1A3C8F", "&:hover": { bgcolor: "#142E70" },
                      py: 1.5, boxShadow: "0 6px 20px rgba(26,60,143,0.3)",
                    }}
                  >
                    Send Message
                  </Button>
                </Stack>
              )}
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}