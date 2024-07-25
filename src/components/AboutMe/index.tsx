import { Box, Fade, IconButton, Stack, Typography } from "@mui/material"
import styled from "styled-components"
import GitHubIcon from '@mui/icons-material/GitHub';

const Image = styled.img`
border-radius: 100%;
width:200px;
`
{/* <Image
src="https://avatars.githubusercontent.com/u/120125116?v=4"
alt="foto perfil"
/> */}

export const AboutMe = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            textAlign="center"
        >
            <Stack direction="column" width={800}>
                {/* <Fade in={true} timeout={300}> */}
                    <Typography
                        variant="h4"
                        color="white"
                        gutterBottom
                    >
                        Olá, Meu nome é Rafael de Paiva.
                    </Typography>
                {/* </Fade> */}
                    <Typography variant="body1" color="#eeeeee" gutterBottom>
                        Em 2022, decidi fazer uma transição de carreira impulsionado pelo crescente interesse em tecnologia.
                    </Typography>
                    <Typography variant="body1" color="#eeeeee">
                        Desde então, tenho me dedicado ao estudo e desenvolvimento de projetos pessoais usando React, JavaScript/TypeScript e Node.js. Desenvolvi interfaces responsivas com React, focadas em UX, e implementei integrações com servidores criados em Node.js para consumir APIs RESTful.
                    </Typography>
            </Stack>
        </Box>
    )
}