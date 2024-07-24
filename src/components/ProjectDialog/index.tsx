import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    Popover,
    Typography
} from "@mui/material"
import IProject from "interfaces/IProject"
import { useState } from "react"
import styled from "styled-components"

const Image = styled.img`
    width: 500px;
    transition: transform 0.3s ease-in-out;

    &:hover{
        transform: rotate(5deg);
    }
`

export const ProjectDialog = ({ project }: { project: IProject }) => {
    // const [open, setOpen] = useState(false)

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Box >
            {/* <Image src={project.image} alt="" onClick={() => setOpen(true)} /> */}
            <Card sx={{
                width: "500px"
            }}>
                {/* <CardMedia component="img" src={project.image} /> */}
                <CardContent onClick={handleClick} >
                    <Typography gutterBottom variant="h5">{project.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{project.about}</Typography>
                </CardContent>
                <CardActions>
                    <Button>Demo</Button>
                    <Button>Github</Button>
                </CardActions>
            </Card>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            ></Popover>

            {/* <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
            >
                <DialogTitle id="dialog-title">
                    {project.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="dialog-description">
                        {project.description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus>teste</Button>
                </DialogActions>
            </Dialog> */}
        </Box>
    )
}