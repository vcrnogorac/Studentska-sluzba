import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HOST from "../Setup";
import "../bootstrap.css";

function ViewExamDetails(props) {
  const exam = props.exam;
  return (
    <div>
      <h3 align="center">Exam details:</h3>
      <br />
      <table className="table container">
        <tbody>
          <tr>
            <td>Course name:</td>
            <td>{exam.course.name}</td>
          </tr>
          <tr>
            <td>Course code:</td>
            <td>{exam.course.courseCode}</td>
          </tr>
          <tr>
            <td>ECTS:</td>
            <td>{exam.course.ects}</td>
          </tr>
          <tr>
            <td>Date:</td>
            <td>{exam.date}</td>
          </tr>
          <tr>
            <td>Student firstname:</td>
            <td>{exam.student.firstname}</td>
          </tr>
          <tr>
            <td>Student lastname:</td>
            <td>{exam.student.lastname}</td>
          </tr>
          <tr>
            <td>Student index number:</td>
            <td>{exam.student.indexNumber}</td>
          </tr>
          <tr>
            <td>Grade:</td>
            <td>{exam.grade}</td>
          </tr>
          <tr>
            <td>Professor firstname:</td>
            <td>{exam.course.professor.firstname}</td>
          </tr>
          <tr>
            <td>Professor lastname:</td>
            <td>{exam.course.professor.lastname}</td>
          </tr>
          <tr>
            <td>Professor academic title:</td>
            <td>{exam.course.professor.academicTitle}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ExamDetails() {
  const [examDetails, setExamDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let url = HOST + "/exams/" + id;
    fetch(url).then((response) => {
      response.json().then((result) => {
        setExamDetails(result);
      });
    });
  }, []);

  return <div>{examDetails && <ViewExamDetails exam={examDetails} />}</div>;
}

export default ExamDetails;
