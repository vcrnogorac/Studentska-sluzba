import Courses from "../Courses/Courses";
import Exams from "../Exams/Exams";
import Professors from "../Professors/Professors";
import Students from "../Students/Students";
import Welcome from "./Wellcome";

export default [
  {
    path: "/",
    name: "Home",
    component: <Welcome />,
  },
  {
    path: "/students",
    name: "Students",
    component: <Students />,
  },
  {
    path: "/professors",
    name: "Professors",
    component: <Professors />,
  },
  {
    path: "/courses",
    name: "Courses",
    component: <Courses />,
  },
  {
    path: "/exams",
    name: "Exams",
    component: <Exams />,
  },
];
