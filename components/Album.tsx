// @ts-nocheck

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { ThemeProvider } from "@mui/material/styles";
import { TopicCard } from "./TopicCard";
import { Grid } from "@mui/material";
import { theme } from "./Layout";

export default function Album({ topics }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Ahlus Sunnah
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Messenger of Allah (ﷺ) said: <br /> “Islam began as something
              strange and will go back to being strange, so glad tidings to the
              strangers.”
            </Typography>
            <Link
              sx={{ flexGrow: 1, ml: "39%", color: "#7d7d7d" }}
              target="_blank"
              href="https://sunnah.com/ibnmajah:3986"
              underline="none"
            >
              {"Ibn Majah 3986"}
            </Link>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                target="_blank"
                href="https://islamqa.info/en"
                variant="contained"
              >
                IslamQA
              </Button>
              <Button
                target="_blank"
                href="https://www.youtube.com/user/assimalhakeem/videos"
                variant="outlined"
              >
                Zad
              </Button>

              <Button
                target="_blank"
                href="https://www.youtube.com/c/MasjidRibat/videos"
                variant="outlined"
              >
                MasjidRibat
              </Button>
              <Button
                target="_blank"
                href="https://www.youtube.com/c/AMAUofficial/videos"
                variant="outlined"
              >
                AMAU
              </Button>
            </Stack>
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {topics.map((topic) => (
              <TopicCard key={topic.sys.id} topic={topic} />
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
