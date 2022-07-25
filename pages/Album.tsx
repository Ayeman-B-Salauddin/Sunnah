import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import books from "../public/books.png";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#3f3f3f",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export default function Album() {
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
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://upload.wikimedia.org/wikipedia/commons/8/86/Makkah_%28Mecca%29_%283%29.jpg"
                    alt="random"
                  /> */}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
