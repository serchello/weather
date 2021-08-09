import './App.css';
import "@fontsource/roboto";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar';

function App() {

  return (
    <Container maxWidth="sm">
      <Grid container>
        <Grid item xs={12}>
          <NavBar />
          {/* <BeerList /> */}
          
        </Grid>
      </Grid>
      
    </Container>
  );

  }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>

//   );
// }

export default App;
