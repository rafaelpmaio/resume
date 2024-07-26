import { Box } from "@mui/material";
import { AboutMe } from "components/AboutMe";
import { Projects } from "components/Projects";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';

function App() {
  return (
    <Box component="main" >
      <AwesomeSlider
        bullets={false}
        fillParent
        infinite={false}
      >
        <section>
          <AboutMe />
        </section>
        <section>
          <Projects />
        </section>
      </AwesomeSlider>
    </Box>
  );
}

export default App;
