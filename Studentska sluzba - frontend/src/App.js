import "./App.css";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
import { Route, Routes } from "react-router-dom";
import routes from "./Home/routes";
import Layout from "./Layout";
import ProfessorDetails from "./Professors/ProfessorDetails";
import CourseDetails from "./Courses/CourseDetails";
import EditProfessor from "./Professors/EditProfessor";
import StudentDetails from "./Students/StudentDetails";
import ExamDetails from "./Exams/ExamDetails";
import EditCourse from "./Courses/EditCourse";
import EditStudent from "./Students/EditStudent";
import EditExam from "./Exams/EditExam";

function App() {
  const components = (
    <Routes>
      {routes.map((e, i) => (
        <Route key={i} path={e.path} element={e.component} />
      ))}

      <Route path="professors/:id" element={<ProfessorDetails />} />
      <Route path="/professors/edit" element={<EditProfessor />} />
      <Route path="/professors/edit/:id" element={<EditProfessor />} />

      <Route path="students/:studentId/addexam" element={<EditExam />} />
      <Route path="students/:id" element={<StudentDetails />} />
      <Route path="students/edit/:id" element={<EditStudent />} />
      <Route path="students/edit" element={<EditStudent />} />

      <Route path="courses/:courseId/addexam" element={<EditExam />} />
      <Route path="courses/:id" element={<CourseDetails />} />
      <Route path="courses/edit/:courseId" element={<EditCourse />} />
      <Route path="courses/edit/" element={<EditCourse />} />
      <Route
        path="professors/:professorId/courses/:courseId"
        element={<EditCourse />}
      />
      <Route path="professors/:professorId/courses" element={<EditCourse />} />
      <Route path="exams/:id" element={<ExamDetails />} />
      <Route path="exams/edit" element={<EditExam />} />
    </Routes>
  );

  return (
    <>
      <Header />
      <Layout components={components} />
      <Footer />
    </>
  );
}

export default App;
