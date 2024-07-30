import { Box, Divider, Grid, Typography } from "@mui/material"
import portfolioArr from "assets/portfolio.json";
import { ProjectDialog } from "components/ProjectDialog";

export const Projects = () => {
    return (
        <Box
            component="section"
            sx={{
                height: '100vh',
            }}
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
                    Portfolio
                </Typography>
                <Divider sx={{
                    borderColor: "white",
                    marginY: 2,
                    opacity: .25

                }} />
            </Box>
            <Grid container spacing={2} direction="column">
                {portfolioArr.map(project => <ProjectDialog project={project} />)}
            </Grid>
        </Box>

    )
}