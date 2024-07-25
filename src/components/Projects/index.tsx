import { Box, Grid, Typography } from "@mui/material"
import portfolioArr from "assets/portfolio.json";
import { ProjectDialog } from "components/ProjectDialog";

export const Projects = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            // alignItems="center"
            gap={2}
        >
            <Typography variant="h3" color="white">
                Projects
            </Typography>
            <Grid container spacing={2}>
                {portfolioArr.map(project => <ProjectDialog project={project} />)}
            </Grid>
        </Box>
    )
}