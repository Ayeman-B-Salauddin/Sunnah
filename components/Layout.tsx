import {
  AppBar,
  createTheme,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";

type Props = {
  children: JSX.Element;
};
export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#5c83ad",
    },
  },
});

export default function Layout({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="relative">
        <Toolbar sx={{ flexGrow: 1, justifyContent: "center" }}>
          <Typography variant="h4" color="inherit" noWrap>
            ٱلْحَمْدُ لِلّٰهِ
          </Typography>
        </Toolbar>
      </AppBar>

      <div className="page-content">{children}</div>
    </ThemeProvider>
  );
}
