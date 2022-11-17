import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { BASE_URL } from "../../../../../DataContext";
import CourseCard from "../../../../components/CourseCard/CourseCard";
import axios from "axios";
import "./CoursesUpdate.css";
import { useContext } from "react";
import { DataContext } from "../../../../../DataContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function CoursesUpdate({ course }) {
  const { reGetCourses } = useContext(DataContext);

  // For Update course
  const [updtedName, setUpdtedName] = useState(course.name);
  const [updtedPermanentLink, setUpdtedPermanentLink] = useState(
    course.permanentLink
  );
  const [updtedCategory, setcUpdtedCategory] = useState(course.category);
  const [updtedLevel, setUpdtedLevel] = useState(course.level);
  const [updtedCourseLanguage, setUpdtedCourseLanguage] = useState(course.courseLanguage);

  const [updtedDescription, setUpdtedDescription] = useState(
    course.description
  );
  const [updtedMentors, setUpdtedMentors] = useState(course.mentors[0]);
  const [updtedDuration, setUpdtedDuration] = useState(course.duration);
  const [updtedNumberOfLessons, setUpdtedNumberOfLessons] = useState(course.numberOfLessons);
  const [updtedImage, setUpdtedImage] = useState(
    course.image);
  const [updateReleasedAt, setUpdateReleasedAt] = useState(course.releasedAt);

  // For Preview course
  const updatedPreview = {
    name: updtedName,
    category: updtedCategory,
    image: updtedImage,
    duration: updtedDuration,
    numberOfLessons: updtedNumberOfLessons,
    mentors: [updtedMentors],
    description: updtedDescription,
    courseLanguage: updtedCourseLanguage,
    level: updtedLevel,
    permanentLink: updtedPermanentLink,
    releasedAt: updateReleasedAt,
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  // function close
  const handleClose = () => {
    setOpen(false);
  };
  const updateCourse = (id) => {
    axios
      .put(`${BASE_URL}/courses/${id}`, {
        name: updtedName,
        category: updtedCategory,
        image: updtedImage,
        duration: updtedDuration,
        numberOfLessons: updtedNumberOfLessons,
        mentors: [updtedMentors],
        description: updtedDescription,
        courseLanguage: updtedCourseLanguage,
        level: updtedLevel,
        permanentLink: updtedPermanentLink,
        releasedAt: updateReleasedAt,
        learningOutcomes: [
          {
            id: 4940,
            body: "All about the history of old and modern cinematic lighting, the role of photography director and the cinematic lighting steps you can follow to get a special cinematic work.",
            cellSpan: 1,
            isImage: false,
            order: 1
          },
        ]
      })

      .then((response) => {
        console.log(response);
        toast.success('Courses Updated Successefully', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        handleClose();
        reGetCourses();
      })
      .catch((error) => {
        console.log(error);
        toast.error('Courses Updated Failed ', {
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
        {/* <DialogTitle className="text-center mt-3">{course.name}</DialogTitle> */}
        <DialogContent>
          <DialogContentText className="d-flex justify-content-center align-items-center flex-column">
            <CourseCard course={updatedPreview} />
          </DialogContentText>
          {/* course_Name */}
          <TextField
            autoFocus
            margin="dense"
            id="Course_Name"
            label="Course_Name"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={course.name}
            onChange={(e) => setUpdtedName(e.target.value)}
          />
          {/* permanent_Link */}
          <TextField
            autoFocus
            margin="dense"
            id="permanent_Link"
            label="permanent_Link"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={course.permanentLink}
            onChange={(e) => setUpdtedPermanentLink(e.target.value)}
          />
          {/* category */}
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Category"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={course.category}
            onChange={(e) => setcUpdtedCategory(e.target.value)}
          />
          {/* level */}
          <TextField
            autoFocus
            margin="dense"
            id="level"
            label="level"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={course.level}
            onChange={(e) => setUpdtedLevel(e.target.value)}
          />
          {/* Date */}
          <TextField
            autoFocus
            margin="dense"
            id="date"
            label="date"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={course.releasedAt}
            onChange={(e) => setUpdateReleasedAt(e.target.value)}
          />
          {/* updtedCourseLanguage */}
          <TextField
            autoFocus
            margin="dense"
            id="Course_Language"
            label="Course_Language"
            type="number"
            fullWidth
            variant="standard"
            defaultValue={course.courseLanguage}
            onChange={(e) => setUpdtedCourseLanguage(parseInt(e.target.value))}
          />

          {/* updtedDescription */}
          <TextField
            autoFocus
            margin="dense"
            id="Description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={course.description}
            onChange={(e) => setUpdtedDescription(e.target.value)}
          />
          {/* updtedDuration */}
          <TextField
            autoFocus
            margin="dense"
            id="Duration"
            label="Duration"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={course.duration}
            onChange={(e) => setUpdtedDuration(e.target.value)}
          />
          {/* updtedNumberOfLessons */}
          <TextField
            autoFocus
            margin="dense"
            id="NumberOfLessons"
            label="Number_Of_Lessons"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={course.numberOfLessons}
            onChange={(e) => setUpdtedNumberOfLessons(e.target.value)}
          />
          {/* updtedImage */}
          <TextField
            autoFocus
            margin="dense"
            id="ImgURL"
            label="Img_URL"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={course.image}
            onChange={(e) => setUpdtedImage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => updateCourse(course.id)}>Save Changes</Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </div>
  );
}
