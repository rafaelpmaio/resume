import { Box, Grid, Typography } from "@mui/material"
import portfolioArr from "assets/portfolio.json";
import { ProjectDialog } from "components/ProjectDialog";

export const Projects = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            paddingTop={10}
            height="100vh"
            gap={10}
        >
            <Box component="header">
                <Typography
                    variant="h3"
                    color="#cacaca"
                    fontWeight={700}
                    gutterBottom
                    sx={{
                        textShadow: " 2px 2px 0 rgba(0, 0, 0, 0.5)"
                    }}
                >
                    Projetos
                </Typography>
                <Typography variant="body1" color="#cacaca">
                    Projetos
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {portfolioArr.map(project => <ProjectDialog project={project} />)}
            </Grid>
        </Box>
    )
}