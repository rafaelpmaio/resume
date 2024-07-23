import { Box } from "@mui/material";
import { AboutMe } from "components/AboutMe";
import portfolio from "assets/portfolio.json";
import { ProjectDialog } from "components/ProjectDialog";

function App() {
  return (
    <Box component="main">
      {/* <AboutMe />
      <Box component="section">
            {portfolio.map(project => <ProjectDialog project={project} />)}
        </Box> */}
    </Box>
  );
}

export default App;
