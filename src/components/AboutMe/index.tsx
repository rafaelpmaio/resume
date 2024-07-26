import { Box, Stack, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import { TypingAnimationDiv } from "animations";




export const AboutMe = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            textAlign="center"
        >
            <Stack direction="column" maxWidth={800}>
                <Typography
                    variant="h4"
                    color="#cacaca"
                    fontWeight={700}
                    gutterBottom
                    sx={{
                        textShadow:" 2px 2px 0 rgba(0, 0, 0, 0.5)"
                    }}
                >
                    Olá, Meu nome é Rafael de Paiva.
                </Typography>
                <Typography variant="body1" color="#cacaca" gutterBottom>
                    Sou um desenvolvedor Front-End, utilizo React, JavaScript/TypeScript e Node.js.
                    Desenvolvi interfaces responsivas com React, focadas em UX, e implementei integrações com servidores criados em Node.js para consumir APIs RESTful
                </Typography>
            </Stack>
        </Box>
    )
}