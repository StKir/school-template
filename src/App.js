import "./App.css";
import { Grid } from "./components/Grid/Grid";
import ButtonAppBar from "./components/AppBar/AppBar";
import MediaCard from "./components/Card/Card";

function App() {
  return (
    <>
      <ButtonAppBar />
      <div className="App">
        <Grid>
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </Grid>
      </div>
    </>
  );
}

export default App;
