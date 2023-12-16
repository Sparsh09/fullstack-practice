import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Appbar from "./components/Appbar";
import Signin from "./components/Signin";
import AddCourse from "./components/AddCourse";
import Courses from "./components/Courses";
import CoursePage from "./components/CoursePage";
function App() {
  return (
    <Router>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "#eeeeee",
          paddingTop: "10px",
        }}
      >
        <Appbar />
        <Routes>
          <Route path="/addcourse" element={<AddCourse />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/course/:courseId" element={<CoursePage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
