import { Box, Typography } from "@mui/material";
import { AboutMe } from "components/AboutMe";
import { Projects } from "components/Projects";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
import {
  Provider,
  Link,
  withNavigationContext,
  withNavigationHandlers
} from "react-awesome-slider/dist/navigation";

const NavigationSlider = withNavigationHandlers(AwesomeSlider)

function App() {
  return (
    <Box component="main" >
      <NavigationSlider
        className="awesome-slider"
        media={[
          {
            slug: "page-one",
            className: "page-one",
            children: <AboutMe />
          },
          {
            slug: "page-two",
            className: "page-two",
            children: <Projects />
          }
        ]}
      />
    </Box>
  );
}

export default App;
