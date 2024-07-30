import { Box, Typography } from "@mui/material";
import { AboutMe } from "components/AboutMe";
import { Projects } from "components/Projects";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
import { withNavigationHandlers } from "react-awesome-slider/dist/navigation";

const NavigationSlider = withNavigationHandlers(AwesomeSlider)

function App() {
  return (
    <Box component="main" height="100vh" sx={{ overflow: 'hidden' }}>
      <NavigationSlider
        className="slider"
        fillParent
        media={[
          {
            slug: "page-one",
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
