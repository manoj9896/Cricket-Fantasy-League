import "./App.css";
import {
  AppBar,
  Button,
  createTheme,
  CssBaseline,
  Tab,
  Tabs,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import DisplayMatches from "./components/DisplayMatches";
import { MatchOccurrence } from "./types";
import TabManager, { TabProps } from "./components/tabManager";
const theme = createTheme();

const navItems: MatchOccurrence[] = ["live", "upcoming"];
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
      <AppBar component="nav" position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Indian Premier League 2023
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff", textDecoration: "none" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <TabManager tabs={tabs} />
    </ThemeProvider>
  );
}

export default App;
