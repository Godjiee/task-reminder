import React, { useState } from "react";
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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {

  // useState hooks
  const [open, setOpen] = useState(false); //dialog state

  const [tasks, setTasks] = useState([]); //task state

  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    radioValue: ''
  });

  // const [selectedPriority, setSelectedPriority] = useState("Urgent"); //initialized with a value


  const handleDialog = () => {
    setOpen(!open); // toggle the state of the dialog
  };

  // const handlePriorityChange = (e) => {
  // setSelectedPriority(e.target.value); // handle changes in the selected priority value 
  // };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;


    // handle radios / textfields
    if (type === 'radio') {
      setTaskData((prevData) => ({
        ...prevData,
        radioValue: value
      }));
    } else {
      setTaskData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  
  const handleTaskSubmit = () => {

    setTasks([...tasks, taskData]);
    console.log([...tasks, taskData]);
    setOpen(!open);
  }


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
                type="text"
                name="title"
                value={taskData.title}
                onChange={handleInputChange}
              />
              <TextField
                variant="outlined"
                label="Description"
                placeholder="Describe in further detail your task"
                multiline
                rows={5}
                rowsmax={10}
                name="description"
                value={taskData.description}
                onChange={handleInputChange}
              />
              <FormControl>   
                <FormLabel>Prio</FormLabel>
                <RadioGroup
                  sx={{
                    display: "inline-block",
                    
                  }}
                  // value = {selectedPriority}
                  // onChange = {handlePriorityChange}
                >
                  <FormControlLabel
                    value="Urgent"
                    control={<Radio />}
                    label="Urgent"
                    checked={taskData.radioValue === 'Urgent'}
                    onChange={handleInputChange}
                  />
                  <FormControlLabel
                    value="Trivial"
                    control={<Radio />}
                    label="Trivial"
                    checked={taskData.radioValue === 'Trivial'}
                    onChange={handleInputChange}
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleTaskSubmit();
            }}
            >
              Add
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

      <Box>
      </Box>
    </>
  );
}

export default App;
