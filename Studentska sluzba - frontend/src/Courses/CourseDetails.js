import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HOST from "../Setup";
import "../bootstrap.css";
import EditButton from "../Home/EditButton";
import DeleteButton from "../Home/DeleteButton";
import AddButton from "../Home/AddButton";

function ViewCourseDetails(props) {
  const course = props.course;

  function deleteCourse() {
    const url = HOST + "/courses/" + course.id;
    fetch(url, { method: "DELETE" });
  }
  return (
    <div className="container">
      <h3 align="center">Course details:</h3>
      <br />
      <table className="table">
        <tbody>
          <tr>
            <td>Course name:</td>
            <td>{course.name}</td>
          </tr>
          <tr>
            <td>Course code:</td>
            <td>{course.courseCode}</td>
          </tr>
          <tr>
            <td>ECTS:</td>
            <td>{course.ects}</td>
          </tr>
          <tr>
            <td>Professor:</td>
            <td>
              {course.professor.firstname} {course.professor.lastname},{" "}
              {course.professor.academicTitle}
            </td>
          </tr>
          <tr>
            <td>Average grade:</td>
            <td>{course.averageGrade == 0 ? "--" : course.averageGrade}</td>
          </tr>
          <tr>
            <td>Number of successful exams:</td>
            <td>{course.successfulExams.length}</td>
          </tr>
          <tr>
            <td>Number of failed exams:</td>
            <td>{course.failedExams.length}</td>
          </tr>
        </tbody>
      </table>

      <Link to={"/courses/edit/" + course.id}>
        <EditButton text="Edit details" />
      </Link>
      {course.successfulExams.length == 0 && course.failedExams.length == 0 && (
        <Link to={"/courses"} onClick={deleteCourse}>
          <DeleteButton text="Delete course" />
        </Link>
      )}
      <Link to={"/courses/" + course.id + "/addexam"}>
        <AddButton text="Add new exam" />
      </Link>

      {course.successfulExams.length > 0 && (
        <div id="tableSuccessfulExams" className="container">
          <br />
          <h4 align="center">Successful exams:</h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Student</th>
                <th scope="col">Index number</th>
                <th scope="col">Date</th>
                <th scope="col">Grade</th>
              </tr>
            </thead>
            <tbody>
              {course.successfulExams.map((e, i) => (
                <tr key={i}>
                  <td>
                    {e.student.firstname} {e.student.lastname}
                  </td>
                  <td>{e.student.indexNumber}</td>
                  <td>{e.date}</td>
                  <td>{e.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {course.failedExams.length > 0 && (
        <div id="tableFailedExams" className="container">
          <br />
          <h4 align="center">Failed exams:</h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Student</th>
                <th scope="col">Index number</th>
                <th scope="col">Date</th>
                <th scope="col">Grade</th>
              </tr>
            </thead>
            <tbody>
              {course.failedExams.map((e, i) => (
                <tr key={i}>
                  <td>
                    {e.student.firstname} {e.student.lastname}
                  </td>
                  <td>{e.student.indexNumber}</td>
                  <td>{e.date}</td>
                  <td>{e.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function CourseDetails() {
  const [courseDetails, setCourseDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let url = HOST + "/courses/" + id;
    fetch(url).then((response) => {
      response.json().then((result) => {
        setCourseDetails(result);
      });
    });
  }, []);

  return (
    <div>{courseDetails && <ViewCourseDetails course={courseDetails} />}</div>
  );
}

export default CourseDetails;
