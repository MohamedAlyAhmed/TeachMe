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
import { ToastContainer ,toast} from "react-toastify";
export default function CoursesUpdate({ course }) {
    // For Update course
    const [updtedName, setUpdtedName] = useState("Course Name");
  const [updtedPermanentLink, setUpdtedPermanentLink] = useState(
    "Cinematic-Lighting-Masterclass"
  );
  const [updtedCategory, setcUpdtedCategory] = useState("Category Name");
  const [updtedLevel, setUpdtedLevel] = useState(1);
  const [updtedCourseLanguage, setUpdtedCourseLanguage] = useState("Arabic");
  const [updtedDescription, setUpdtedDescription] = useState("Description of course");
  const [updtedMentors, setUpdtedMentors] = useState("New-Course");
  const [updtedDuration, setUpdtedDuration] = useState("4.30");
  const [updtedNumberOfLessons, setUpdtedNumberOfLessons] = useState("4.30");
  const [updtedImage, setUpdtedImage] = useState(
    "https://previews.123rf.com/images/melpomen/melpomen1509/melpomen150900104/45650274-hand-pointing-to-online-course-concept-on-light-brown-wall-background.jpg"
  );
  const [updateReleasedAt, setUpdateReleasedAt] = useState("Release_Date");

    // For Preview course
 const updatedPreview = {
  name: updtedName,
  category: updtedCategory,
  image: updtedImage,
  duration: updtedDuration,
  numberOfLessons: updtedNumberOfLessons,
  mentors: updtedMentors,
  description: updtedDescription,
  courseLanguage: updtedCourseLanguage,
  level: updtedLevel,
  permanentLink: updtedPermanentLink,
  releasedAt:updateReleasedAt
};
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

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
  mentors: updtedMentors,
  description: updtedDescription,
  courseLanguage: updtedCourseLanguage,
  level: updtedLevel,
  permanentLink: updtedPermanentLink,
  releasedAt:updateReleasedAt
      })

      .then((response) => {
        console.log(response);
        toast.success("Courses Updated Successefully")
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed updated Course!")
      });
    handleClose();
    refreshPage();
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
    <button className="btn btn-primary" onClick={handleClickOpen}>
        Update
      </button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="text-center">{course.name}</DialogTitle>
      <DialogContent>
        <DialogContentText className="d-flex justify-content-center align-items-center flex-column">
          <CourseCard course={updatedPreview} />
          Mentor : {updtedMentors}
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
          type="text"
          fullWidth
          variant="standard"
          defaultValue={course.courseLanguage}
          onChange={(e) => setUpdtedCourseLanguage(e.target.value)}
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
        {/* updtedMentors */}
        <TextField
          autoFocus
          margin="dense"
          id="Mentor_Name"
          label="Mentor_Name"
          type="text"
          fullWidth
          variant="standard"
          defaultValue={course.mentors[0].name}
          onChange={(e) => setUpdtedMentors(e.target.value)}
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
        <Button onClick={() => updateCourse(course.id)}>
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  </div>
 
  )
}
