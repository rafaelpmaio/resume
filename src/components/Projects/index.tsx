import { Box, Divider, Grid, Typography } from "@mui/material"
import portfolioArr from "assets/portfolio.json";
import { ProjectDialog } from "components/ProjectDialog";

export const Projects = () => {
    return (
        <Box
            component="section"
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop={10}

        >
            <Box width="70%" display="flex" flexDirection="column" gap={4}>
                <Box component="header">
                    <Typography
                        variant="h3"
                        color="white"
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
                        opacity: .25,
                        width: "50%"
                    }} />
                </Box>
                <Grid container spacing={2} direction="column" height="100%" >
                    {portfolioArr.map((project, index) => <ProjectDialog project={project} key={project.title} index={index} />)}
                </Grid>
            </Box>
        </Box>

    )
}