import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Stack,
    Typography
} from "@mui/material"
import { GrowHorizontalDiv, PopUpDiv } from "animations"
import IProject from "interfaces/IProject"
import { useState } from "react"
import styled from "styled-components"
import image from 'assets/images/CojYiivGDp.jpg'

const Image = styled.img`
    height: 400px;
    width: 500px;
    background-color: gray;
    object-fit: cover;
    border-radius: 5px;

`

export const ProjectDialog = ({ project }: { project: IProject }) => {
    const [open, setOpen] = useState(false)

    return (
        <Grid item xs={12} sm={4}>
            <Card
                onClick={() => setOpen(true)}
                sx={{ backgroundColor: "transparent" }}
            >
                <CardMedia component="img" src={image}/>
                <CardContent  >
                    <Typography
                        variant="h5"
                        fontWeight={700}
                        color="white"
                        textTransform="uppercase"
                        gutterBottom
                    >
                        {project.title}
                    </Typography>
                    <Box >
                        {project.tools.map(tool => 
                        <Chip label={tool} variant="outlined" size="small" sx={{color:"#cacaca"}}/>)}
                    </Box>
                </CardContent>
            </Card>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                TransitionComponent={GrowHorizontalDiv}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
                fullWidth
                maxWidth="md"
            >
                <DialogContent>
                    <Stack direction="row" gap={2}>
                        <PopUpDiv>
                            <Image
                            // src={project.image}
                            />
                        </PopUpDiv>
                        <Stack>
                            <DialogTitle id="dialog-title">
                                {project.title}
                            </DialogTitle>
                            <DialogContentText id="dialog-description">
                                {project.description}
                            </DialogContentText>
                        </Stack>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => setOpen(false)}>teste</Button>
                </DialogActions>
            </Dialog>
        </Grid >
    )
}

