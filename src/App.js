import {
    Typography,
    Button,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions, 
    TextField,
    FormControl,
    RadioGroup,
    Radio,
    FormLabel,
    Stack,
    FormControlLabel,
    IconButton,

}
from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";



function App() {
    const [open, openchange] = useState(false);

    const handleDialog = () => {
        if (open == true) {
            return openchange(false);
        }
        return openchange(true);
    };

    return (
        <>
            <Typography
                variant="h1"
                sx={{
                    margin: "5rem",
                    fontWeight: "500",
                    fontSize: "5em",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                Clean Mind
            </Typography>
            <Typography
                variant="h1"
                sx={{
                    fontWeight: "400",
                    fontSize: "3em",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                Don't overthink, stay productive
                
            </Typography>
            <Box
                sx={{
                    margin: "3rem",
                    textAlign: "center",
                }}
            >
                <Button 
                    onClick={handleDialog} 
                    variant="outlined"
                    size="large"
                >
                        add a new task
                </Button>
                <Dialog 
                    open={open} 
                    onClose={handleDialog} 
                    fullWidth
                >
                    <DialogTitle>
                        ADD A NEW TASK 
                        <IconButton
                        onClick={handleDialog}
                        sx={{
                            float: "right",
                        }}
                        >
                            <CloseIcon></CloseIcon>
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <Stack spacing={2} margin={2}>
                            <TextField 
                             variant="outlined" 
                             label="Title"
                             placeholder="Be specific and concise"

                             />
                            <TextField 
                             variant="outlined" 
                             label="Description"
                             placeholder="Describe in further detail your task"
                             multiline
                             rows={5}
                             rowsMax={10}
                             />
                            <FormControl>
                                <FormLabel>Prio</FormLabel>
                                <RadioGroup
                                sx={{
                                    display: "inline-block",
                                }}>
                                    <FormControlLabel value="Urgent" control={<Radio />} label="Urgent" />
                                    <FormControlLabel value="Trivial" control={<Radio />} label="Trivial" />
                               </RadioGroup>
                            </FormControl>
                        </Stack>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={handleDialog}
                            variant="contained"
                            color="primary"
                        >
                            Submit
                        </Button>
                                
                        <Button
                            onClick={handleDialog}
                            variant="contained"
                            color="error"
                        >
                            Close
                        </Button>

                    </DialogActions>
                </Dialog>
            </Box>
        </>
    );
}

export default App;
