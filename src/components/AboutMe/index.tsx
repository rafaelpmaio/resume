import { Box, Stack, Typography } from "@mui/material"

export const AboutMe = () => {
    return (
        <Box
            component="section"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
        >
            <Typography variant="h1" width="130px" padding={1} sx={{ fontSize: "20px", }}> ABOUT ME </Typography>
            <Stack direction="row" gap={5} >
                <img
                    src="https://avatars.githubusercontent.com/u/120125116?v=4"
                    alt="foto perfil"
                    width="200px"
                />
                <Stack width={800}>
                    <Typography variant="body1">Olá! Meu nome é Rafael. Eu sou um Desenvolvedor Front-End</Typography>
                    <Typography variant="body1">
                        Em 2022, decidi fazer uma transição de carreira impulsionado pelo crescente interesse em tecnologia.
                    </Typography>
                    <Typography variant="body1">
                        Desde então, tenho me dedicado ao estudo e desenvolvimento de projetos pessoais usando React, JavaScript/TypeScript e Node.js. Desenvolvi interfaces responsivas com React, focadas em UX, e implementei integrações com servidores criados em Node.js para consumir APIs RESTful.
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    )
}