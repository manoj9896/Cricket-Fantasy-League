import "./App.css";
import {
  AppBar,
  Button,
  createTheme,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import DisplayMatches from "./components/DisplayMatches";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import TabManager, { TabProps } from "./components/tabManager";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000", // set your desired primary color here
    },
    secondary: {
      main: "#00ff00", // set your desired secondary color here
    },
  },

});

const tabs: TabProps[] = [
  {
    component: <DisplayMatches type="live" />,
    label: "live",
  },
  {
    component: <DisplayMatches type="upcoming" />,
    label: "upcoming",
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <SportsCricketIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Myheroes
            </Typography>
            <Button color="inherit">Invite your friends</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <TabManager tabs={tabs} />
    </ThemeProvider>
  );
}

export default App;
