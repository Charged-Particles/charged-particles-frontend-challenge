import defaultLogo from './images/charged-particles-logo-default-colors.svg';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './root.theme';

function App() {
  return (
    <ThemeProvider theme={{ ...theme }}>
        <header className="App-header">
          <img width="400" src={defaultLogo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="subtitle1">
                Please reach out to the team if you have any questions along the way and refer to the link below for our Developer Docs. Good luck!
              </Typography>
            </Grid>
            <Grid item>
              <Link
                href="https://docs.charged.fi/charged-particles-protocol/developing-on-the-protocol"
                target="_blank"
              >
                Charged Particles Documentation
              </Link>
            </Grid>
          </Grid>
        </main>
    </ThemeProvider>
  );
}

export default App;
