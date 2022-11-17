import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { BASE_URL, DataContext } from "../../../../../DataContext";
import CategoryCard from "../../../../components/CategoryCard/CategoryCard";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./CategoryUpdate.css";
import { useContext } from "react";

export default function CategoryUpdate({ category }) {
  const { reGetCategories } = useContext(DataContext);
  // For Update Category
  const [updatedName, setUpdatedName] = useState(category.name);
  const [updatedImg, setUpdatedImg] = useState(category.image);
  const [updatedLink, setUpdatedLink] = useState(category.permanentLink);
  // For Preview Category
  const updatedPreview = {
    name: updatedName,
    image: updatedImg,
    permanentLink: updatedLink,
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateCategory = (id) => {
    axios
      .put(`${BASE_URL}/CourseCategories/${id}`, {
        name: updatedName,
        image: updatedImg,
        permanentLink: updatedLink,
      })
      .then((response) => {
        console.log(response);
        toast.success('Category Updated Successefully', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        handleClose();
        reGetCategories();
      })
      .catch((error) => {
        console.log(error);
        toast.error('Category Updated Failed', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      });

  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleClickOpen}>
        Update
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="text-center">{category.name}</DialogTitle>
        <DialogContent>
          <DialogContentText className="d-flex justify-content-center align-items-center flex-column">
            <CategoryCard category={updatedPreview} />
            Link : {updatedLink}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={category.name}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="ImgURL"
            label="Img URL"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={category.image}
            onChange={(e) => setUpdatedImg(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="PermanentLink"
            label="Permanent Link"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={category.permanentLink}
            onChange={(e) => setUpdatedLink(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => updateCategory(category.id)}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </div>
  );
}
