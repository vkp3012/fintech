import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

import theme from "./theme/theme";

// Layout components
import Header       from "./component/Header";
import Footer       from "./component/footer";
import AIChatButton from "./component/chat";
import ScrollTop    from "./component/scrolltop";

// Page sections
import Hero      from "./sections/hero";
import Services  from "./sections/service";
import Dashboard from "./sections/deskboard";
import About     from "./sections/about";
import Pricing   from "./sections/pricing";
import Contact   from "./sections/contact";

/**
 * Smooth-scroll helper.
 * Maps section names to element IDs.
 */
function scrollTo(section) {
  const el = document.getElementById(section);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
        {/* ── Layout ── */}
        <Header onSectionClick={scrollTo} />

        {/* ── Sections ── */}
        <main>
          <Hero      onSectionClick={scrollTo} />
          <Services  />
          <Dashboard />
          <About     />
          <Pricing   onSectionClick={scrollTo} />
          <Contact   />
        </main>

        <Footer onSectionClick={scrollTo} />

        {/* ── Floating UI ── */}
        <AIChatButton />
        <ScrollTop />
      </Box>
    </ThemeProvider>
  );
}