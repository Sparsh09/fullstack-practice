import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseCard from "./CourseCard";

function CoursePage() {
  const courseId = useParams();
  const [course, setCourse] = useState([]);

  useEffect(() => {
    console.log(courseId.courseId);
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
  return <div style={{display: "flex", justifyContent: "center"}}><CourseCard course={course}/></div>;
}

export default CoursePage;
