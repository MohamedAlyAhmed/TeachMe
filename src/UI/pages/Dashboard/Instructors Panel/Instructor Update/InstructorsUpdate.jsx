import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { BASE_URL, DataContext } from "../../../../../DataContext";
import "./InstructorsUpdate.css";
import axios from "axios";
import InstructorCard from "../../../../components/InstructorCard/InstructorCard";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function InstructorsUpdate({ instructor }) {
  const { reGetInstructors } = useContext(DataContext);
  // For Update instructor
  const [updatedName, setUpdatedName] = useState(instructor.name);
  const [updatedDescription, setUpdatedDescription] = useState(
    instructor.description
  );
  const [updatedImg, setUpdatedImg] = useState(instructor.image);
  const [updatedTitle, setUpdatedTitle] = useState(instructor.title);
  const [updatedLink, setUpdatedLink] = useState(instructor.permanentLink);

  // For Preview instructor
  const updatedPreview = {
    name: updatedName,
    description: updatedDescription,
    image: updatedImg,
    title: updatedTitle,
    permanentLink: updatedLink,
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateInstructor = (id) => {
    axios
      .put(`${BASE_URL}/instructors/${id}`, {
        name: updatedName,
        description: updatedDescription,
        image: updatedImg,
        title: updatedTitle,
        permanentLink: updatedLink,
      })
      .then((response) => {
        console.log(response);
        toast.success('Instructor Updated Successefully', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        handleClose();
        reGetInstructors();
      })
      .catch((error) => {
        console.log(error);
        toast.error('Instructor Updated Failed', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      });

  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleClickOpen}>
        Update
      </button>
      <Dialog open={open} onClose={handleClose} className="m-5">
        <DialogTitle className="text-center">{instructor.name}</DialogTitle>
        <DialogContent>
          <DialogContentText className="d-flex justify-content-center align-items-center flex-column">
            <InstructorCard instructor={updatedPreview} />
            Link : {updatedLink}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Instructor Name"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={instructor.name}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="Description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={instructor.description}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="ImgURL"
            label="Img URL"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={instructor.image}
            onChange={(e) => setUpdatedImg(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={instructor.title}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="PermanentLink"
            label="Permanent Link"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={instructor.permanentLink}
            onChange={(e) => setUpdatedLink(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => updateInstructor(instructor.id)}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </div>
  );
}
