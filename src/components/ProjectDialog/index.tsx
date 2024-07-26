import {
    Button,
    Card,
    CardActions,
    CardContent,
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
            <Card sx={{
            }}>
                <CardContent onClick={() => setOpen(true)} >
                    <Typography gutterBottom variant="h5">{project.title}</Typography>
                    badges
                </CardContent>
                <CardActions>
                    <Button>Demo</Button>
                    <Button>Github</Button>
                </CardActions>
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

