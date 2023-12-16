import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", marginTop: 10, padding: 20 }}
    >
      {courses.courses?.map((course) => (
        <Link to={`/course/${course._id}`} key={course._id}>
          <CourseCard key={course.id} course={course} />
        </Link>
      ))}{" "}
    </div>
  );
}
export default Courses;
