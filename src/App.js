import './App.css';
import "@fontsource/roboto";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LocationSearch from './LocationSearch';

function App() {
  return (
    <Container maxWidth="sm">
      <Grid container>
        <Grid item xs={12}>
          <LocationSearch />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;