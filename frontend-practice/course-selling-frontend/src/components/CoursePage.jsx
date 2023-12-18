import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseCard from "./CourseCard";
import { Button, TextField } from "@mui/material";

function CoursePage() {
  const courseId = useParams();
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/admin/courses/" + courseId.courseId, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setCourse(data.course));
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", flexDirection: "column", height: "85%", alignItems: "center" }}>
      <CourseCard course={course} />
      <div style={{display: "flex", width: "250px", marginTop: 20}}>
        <UpdateCourse course={course} setCourse={setCourse}></UpdateCourse>
      </div>
    </div>
  );
}

function UpdateCourse(props) {
  const { course } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgLink, setImgLink] = useState("");
  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "100%" }}>
      <TextField
        fullWidth
        id={"title"}
        label="Title"
        variant="outlined"
        type={"text"}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />

      <TextField
        fullWidth
        id={"description"}
        label="Description"
        variant="outlined"
        type={"text"}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />

      <TextField
        fullWidth
        id={"imageLink"}
        label="Image Link"
        variant="outlined"
        type={"text"}
        onChange={(e) => setImgLink(e.target.value)}
      />
      <br />
      <Button
        variant={"contained"}
        onClick={() => {
          course.title = title;
          course.description = description;
          course.imageLink = imgLink;
          fetch("http://localhost:3000/admin/courses/" + course._id, {
            method: "PUT",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              description: description,
              imageLink: imgLink ? imgLink : course.imageLink ,
            }),
          }).then((res) => res.json()).then(() => {alert("h");props.setCourse(course)} );
        }}
      > 
        Update Course
      </Button>
    </div>
  );
}

export default CoursePage;
