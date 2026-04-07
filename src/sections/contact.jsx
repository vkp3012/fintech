import { useState } from "react";
import {
  Box, Container, Grid, Typography, Button, Stack,
  Chip, TextField, Divider,
} from "@mui/material";
import {
  Send, CheckCircle, Email, Phone, WhatsApp, LocationOn,
} from "@mui/icons-material";

// ── Contact details ──────────────────────────────────────────────────────────
const CONTACT_INFO = [
  { Icon: Email,     label: "Email Us",  val: "ckaarisis@gmail.com", sub: "We reply within 24 hours",  color: "#4D7BF3" },
  { Icon: Phone,     label: "Call Us",   val: "+91 6376980718",      sub: "Mon – Sat, 9 AM – 7 PM",    color: "#22C55E" },
  { Icon: WhatsApp,  label: "WhatsApp",  val: "+91 6376980718",      sub: "Quick chat anytime",         color: "#25D366" },
  { Icon: LocationOn,label: "Office",    val: "India",               sub: "Virtual & On-site visits",  color: "#F47B20" },
];

// ── Shared TextField focus styles ────────────────────────────────────────────
const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    bgcolor: "#F7F9FC",
    "&:hover fieldset":       { borderColor: "#1A3C8F" },
    "&.Mui-focused fieldset": { borderColor: "#1A3C8F", borderWidth: "2px" },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "#1A3C8F" },
};

// ── Sub-box shared card style ────────────────────────────────────────────────
const subBox = {
  borderRadius: "20px",
  overflow: "hidden",
  height: "100%",
};

export default function Contact() {
  const [form, setForm]     = useState({ name: "", email: "", phone: "", service: "", msg: "" });
  const [sent, setSent]     = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name  = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    return e;
  };

  const handleSend = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSent(true);
  };

  const handleReset = () => {
    setSent(false);
    setForm({ name: "", email: "", phone: "", service: "", msg: "" });
    setErrors({});
  };

  return (
    <Box id="contact" sx={{ py: { xs: 6, md: 10 }, bgcolor: "#F0F4FF" }}>
      <Container maxWidth="lg" display="flex" flexDirection="column" alignItems="center" gap={4}> 

        {/* ── Section heading ── */}
        <Box textAlign="center" mb={2}>
          <Chip
            label="Get In Touch"
            sx={{
              bgcolor: "#EEF2FF", color: "#1A3C8F",
              mb: 2, fontWeight: 600, fontSize: "0.75rem",
              border: "1px solid rgba(26,60,143,0.15)",
            }}
          />
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, color: "#0D1B3E", mb: 1.5 }}
          >
            Let's Grow Your Business Financially
          </Typography>
          <Typography sx={{ color: "#5A6A85", maxWidth: 520, mx: "auto", fontSize: "0.95rem", lineHeight: 1.8 }}>
            Ready to transform your finance operations? Let's discuss how Aqua Aarisis
            can become your trusted finance partner.
          </Typography>
        </Box>

        {/* ══════════════════════════════════════════════════════════════
            OUTER WRAPPER — one container box holding TWO sub-boxes
        ══════════════════════════════════════════════════════════════ */}
        <Box>
          <Grid display="flex" padding={2}>

            {/* ══════════════════════════════
                SUB-BOX 1 — Contact info (left)
            ══════════════════════════════ */}
            <Grid item xs={10} md={3} padding={2}>
              <Box sx={{
                ...subBox,
                background: "linear-gradient(150deg, #0D1B3E 0%, #1A3C8F 60%, #2D5BE3 100%)",
                p: { xs: 3.5, md: 4.5 },
                display: "flex",
                flexDirection: "column",
                gap: 3.5,
                position: "relative",
                minHeight: { xs: "auto", md: 500 },
              }}>

                {/* Decorative rings — bottom-right */}
                {[220, 160, 100].map((s, i) => (
                  <Box key={i} aria-hidden="true" sx={{
                    position: "absolute",
                    bottom: -(s / 2.2), right: -(s / 2.2),
                    width: s, height: s, borderRadius: "50%",
                    border: "1.5px solid rgba(255,255,255,0.07)",
                    pointerEvents: "none",
                  }} />
                ))}

                {/* Orange accent dot — top-left */}
                <Box aria-hidden="true" sx={{
                  position: "absolute", top: 24, right: 24,
                  width: 48, height: 40, borderRadius: "50%",
                  background: "rgba(244,123,32,0.18)",
                  border: "1px solid rgba(244,123,32,0.3)",
                }} />

                {/* Heading */}
                <Box>
                  <Typography sx={{
                    fontFamily: '"Syne",sans-serif', fontWeight: 700,
                    fontSize: { xs: "1.35rem", md: "1.6rem" },
                    color: "#fff", lineHeight: 1.3, mb: 1,
                  }}>
                    Contact Information
                  </Typography>
                  <Typography sx={{
                    color: "rgba(255,255,255,0.52)",
                    fontSize: "0.84rem", lineHeight: 1.8,
                  }}>
                    Fill out the form and our team will get back to you within 24 hours.
                  </Typography>
                </Box>

                {/* Divider */}
                <Box sx={{ height: "1px", bgcolor: "rgba(255,255,255,0.1)" }} />

                {/* Contact rows */}
                <Stack spacing={3} flex={1}>
                  {CONTACT_INFO.map(({ Icon, label, val, sub, color }) => (
                    <Stack key={label} direction="row" spacing={2} alignItems="center">
                      {/* Icon bubble */}
                      <Box sx={{
                        width: 44, height: 40, borderRadius: "12px",
                        bgcolor: `${color}22`,
                        border: `1px solid ${color}44`,
                        color: color,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <Icon sx={{ fontSize: 20 }} />
                      </Box>
                      {/* Text */}
                      <Box>
                        <Typography sx={{
                          fontSize: "0.6rem", color: "rgba(255,255,255,0.4)",
                          letterSpacing: "0.1em", textTransform: "uppercase", mb: 0.2,
                        }}>
                          {label}
                        </Typography>
                        <Typography sx={{
                          fontSize: "0.9rem", fontWeight: 600, color: "#fff", lineHeight: 1.3,
                        }}>
                          {val}
                        </Typography>
                        <Typography sx={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.38)" }}>
                          {sub}
                        </Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>

                {/* Bottom: social dots */}
                <Stack direction="row" spacing={1} mt="auto">
                  {["F", "T", "L", "W"].map((l, i) => (
                    <Box
                      key={l}
                      aria-label={["Facebook","Twitter","LinkedIn","WhatsApp"][i]}
                      role="button"
                      tabIndex={0}
                      sx={{
                        width: 34, height: 30, borderRadius: "50%",
                        bgcolor: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        cursor: "pointer", transition: "all 0.2s",
                        "&:hover": { bgcolor: "#F47B20", borderColor: "#F47B20" },
                      }}
                    >
                      <Typography sx={{ color: "#fff", fontSize: "0.65rem", fontWeight: 700 }}>
                        {l}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* ══════════════════════════════
                SUB-BOX 2 — Form (right)
            ══════════════════════════════ */}
            <Grid item xs={10} md={5} padding={2}>
              <Box sx={{
                ...subBox,
                bgcolor: "#fff",
                border: "1px solid rgba(26,60,143,0.07)",
                boxShadow: "0 4px 24px rgba(26,60,143,0.06)",
                p: { xs: 3.5, md: 4.5 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}>

                {/* ── SUCCESS state ── */}
                {sent ? (
                  <Box
                    textAlign="center"
                    sx={{ py: 5, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}
                  >
                    <Box sx={{
                      width: 80, height: 80, borderRadius: "50%",
                      bgcolor: "#ECFDF5", display: "flex",
                      alignItems: "center", justifyContent: "center", mb: 1,
                    }}>
                      <CheckCircle sx={{ fontSize: 44, color: "#22C55E" }} />
                    </Box>
                    <Typography sx={{
                      fontFamily: '"Syne",sans-serif', fontWeight: 700,
                      fontSize: "1.6rem", color: "#0D1B3E",
                    }}>
                      Message Sent!
                    </Typography>
                    <Typography sx={{
                      color: "#5A6A85", fontSize: "0.92rem", maxWidth: 300, lineHeight: 1.8,
                    }}>
                      Thank you! Our finance team will contact you within 24 hours.
                    </Typography>
                    <Button
                      variant="outlined"
                      onClick={handleReset}
                      sx={{
                        mt: 1, borderColor: "#1A3C8F", color: "#1A3C8F",
                        borderRadius: "10px",
                        "&:hover": { bgcolor: "#EEF2FF", borderColor: "#1A3C8F" },
                      }}
                    >
                      Send Another Message
                    </Button>
                  </Box>

                ) : (
                  /* ── FORM state ── */
                  <Stack spacing={2.5}>

                    {/* Title */}
                    <Box>
                      <Typography sx={{
                        fontFamily: '"Syne",sans-serif', fontWeight: 700,
                        fontSize: "1.3rem", color: "#0D1B3E", mb: 0.3,
                      }}>
                        Send Us a Message
                      </Typography>
                      <Typography sx={{ fontSize: "0.8rem", color: "#5A6A85" }}>
                        Fields marked <span style={{ color: "#EF4444" }}>*</span> are required
                      </Typography>
                    </Box>

                    {/* Row 1: Name + Email */}
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth required label="Full Name *" size="small"
                          value={form.name} onChange={handleChange("name")}
                          error={!!errors.name} helperText={errors.name}
                          onKeyDown={(e) => e.key === "Enter" && handleSend()}
                          sx={fieldSx}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth required label="Email Address *" size="small"
                          value={form.email} onChange={handleChange("email")}
                          error={!!errors.email} helperText={errors.email}
                          onKeyDown={(e) => e.key === "Enter" && handleSend()}
                          sx={fieldSx}
                        />
                      </Grid>
                    </Grid>

                    {/* Row 2: Phone + Service */}
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth label="Phone Number" size="small"
                          value={form.phone} onChange={handleChange("phone")}
                          onKeyDown={(e) => e.key === "Enter" && handleSend()}
                          sx={fieldSx}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth select label="Service Interested In" size="small"
                          value={form.service} onChange={handleChange("service")}
                          SelectProps={{ native: true }}
                          sx={fieldSx}
                        >
                          <option value="">Select a service</option>
                          <option value="accounting">Virtual Accounting & Compliance</option>
                          <option value="cfo">Virtual CFO & CEO</option>
                          <option value="mis">MIS Reporting & Insights</option>
                          <option value="planning">Strategic Financial Planning</option>
                          <option value="audit">Internal Audit & Cost Control</option>
                          <option value="investor">Financial Modeling & Investor Readiness</option>
                        </TextField>
                      </Grid>
                    </Grid>

                    {/* Message */}
                    <TextField
                      fullWidth label="How can we help you?" multiline rows={4}
                      value={form.msg} onChange={handleChange("msg")}
                      sx={fieldSx}
                    />

                    <Divider sx={{ borderColor: "rgba(0,0,0,0.05)" }} />

                    {/* Submit row */}
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                      alignItems={{ sm: "center" }}
                      justifyContent="space-between"
                    >
                      <Button
                        variant="contained"
                        size="large"
                        endIcon={<Send />}
                        onClick={handleSend}
                        aria-label="Send message"
                        sx={{
                          bgcolor: "#1A3C8F",
                          "&:hover": { bgcolor: "#142E70" },
                          py: 1.5, px: 4,
                          borderRadius: "12px",
                          boxShadow: "0 6px 20px rgba(26,60,143,0.3)",
                          fontSize: "0.92rem",
                        }}
                      >
                        Send Message
                      </Button>
                      <Typography sx={{ fontSize: "0.72rem", color: "#5A6A85", lineHeight: 1.7 }}>
                        🔒 Your information is safe.<br />We never share your data.
                      </Typography>
                    </Stack>
                  </Stack>
                )}
              </Box>
            </Grid>

          </Grid>
        </Box>
        {/* ── end outer wrapper ── */}

      </Container>
    </Box>
  );
}