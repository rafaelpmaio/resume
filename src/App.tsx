import { Box, Typography } from "@mui/material";
import { AboutMe } from "components/AboutMe";
import portfolio from "assets/portfolio.json";
import { ProjectDialog } from "components/ProjectDialog";

function App() {
  return (
    <Box component="main">
      <AboutMe />
      <Box
        component="section"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
      >
        <Typography variant="h1" width="130px" padding={1} sx={{ fontSize: "20px", }}> PROJECTS </Typography>
        <Box>
          {portfolio.map(project => <ProjectDialog project={project} />)}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
