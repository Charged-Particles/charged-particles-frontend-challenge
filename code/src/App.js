import './App.css';
import defaultLogo from './images/charged-particles-logo-default-colors.svg';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img width="400" src={defaultLogo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Typography variant="subtitle1">
          Please reach out to the team if you have any questions along the way and refer to the link below for our Developer Docs. Good luck!
        </Typography>
        <Link
          href="https://docs.charged.fi/charged-particles-protocol/developing-on-the-protocol"
          target="_blank"
        >
          Charged Particles Documentation
        </Link>
      </main>
    </div>
  );
}

export default App;
