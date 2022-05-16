import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HOST from "../Setup";
import "../bootstrap.css";
import DeleteButton from "../Home/DeleteButton";
import EditButton from "../Home/EditButton";
import AddButton from "../Home/AddButton";

function ViewStudentDetails(props) {
  const student = props.student;

  function deleteStudent() {
    const url = HOST + "/students/" + student.id;
    fetch(url, { method: "DELETE" });
  }

  function sumEcts(exams) {
    let s = 0;
    exams.map((e) => {
      s = s + e.course.ects;
    });
    return s;
  }
  return (
    <div className="container">
      <h3 align="center">Student details:</h3>

      <br />
      <table className="table">
        <tbody>
          <tr>
            <td>Firstname:</td>
            <td>{student.firstname}</td>
          </tr>
          <tr>
            <td>Lastname:</td>
            <td>{student.lastname}</td>
          </tr>
          <tr>
            <td>Sex:</td>
            <td>{student.sex === "M" ? "Man" : "Woman"}</td>
          </tr>
          <tr>
            <td>Index Number:</td>
            <td>{student.indexNumber}</td>
          </tr>
          <tr>
            <td>Average Grade:</td>
            <td>{student.averageGrade == 0 ? "--" : student.averageGrade}</td>
          </tr>
          <tr>
            <td>Number of successful exams:</td>
            <td>{student.successfulExams.length}</td>
          </tr>
          <tr>
            <td>Number of failed exams:</td>
            <td>{student.failedExams.length}</td>
          </tr>
          <tr>
            <td>Sum of ects:</td>
            <td>{sumEcts(student.successfulExams)}</td>
          </tr>
        </tbody>
      </table>

      <Link to={"/students/edit/" + student.id}>
        <EditButton text="Edit details" />
      </Link>
      {student.successfulExams.length == 0 && student.failedExams.length == 0 && (
        <Link to={"/students"} onClick={deleteStudent}>
          <DeleteButton text="Delete students" />
        </Link>
      )}

      <Link to={"/students/" + student.id + "/addexam"}>
        <AddButton text="Add new exam" />
      </Link>

      {student.successfulExams.length > 0 && (
        <div className="container">
          <br />
          <h4 align="center">Successful exams:</h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Course name</th>
                <th scope="col">Course code</th>
                <th scope="col">Date</th>
                <th scope="col">Grade</th>
                <th scope="col">Professor</th>
              </tr>
            </thead>
            <tbody>
              {student.successfulExams.map((e, i) => (
                <tr key={i}>
                  <td>{e.course.name}</td>
                  <td>{e.course.courseCode}</td>
                  <td>{e.date}</td>
                  <td>{e.grade}</td>
                  <td>
                    {e.course.professor.firstname} {e.course.professor.lastname}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {student.failedExams.length > 0 && (
        <div className="container">
          <br />
          <h4 align="center">Failed exams:</h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Course name</th>
                <th scope="col">Course code</th>
                <th scope="col">Date</th>
                <th scope="col">Grade</th>
                <th scope="col">Professor</th>
              </tr>
            </thead>
            <tbody>
              {student.failedExams.map((e, i) => (
                <tr key={i}>
                  <td>{e.course.name}</td>
                  <td>{e.course.courseCode}</td>
                  <td>{e.date}</td>
                  <td>{e.grade}</td>
                  <td>
                    {e.course.professor.firstname} {e.course.professor.lastname}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function StudentDetails() {
  const [studentDetails, setStudentDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let url = HOST + "/students/" + id;
    fetch(url).then((response) => {
      response.json().then((result) => {
        setStudentDetails(result);
      });
    });
  }, []);

  return (
    <div>
      {studentDetails && <ViewStudentDetails student={studentDetails} />}
    </div>
  );
}

export default StudentDetails;
