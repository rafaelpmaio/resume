import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import IProject from "interfaces/IProject"
import { useState } from "react"

export const ProjectDialog = ({ project }: { project: IProject }) => {
    const [open, setOpen] = useState(false)
    return (
        <Box >
            <img src={project.image} alt="" onClick={() => setOpen(true)} />
            <Dialog
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
            </Dialog>
        </Box>
    )
}