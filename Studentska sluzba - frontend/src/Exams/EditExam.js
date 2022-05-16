import { useEffect, useState } from "react";
import HOST from "../Setup";
import "../bootstrap.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import AddButton from "../Home/AddButton";

function EditExam() {
  const { studentId } = useParams();
  const { courseId } = useParams();
  const { examId } = useParams();
  const navigate = useNavigate();
  const [validInput, setValidInput] = useState(false);

  const [courseOptions, setCourseOptions] = useState([]);
  const [studentOptions, setStudentOptions] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [grade, setGrade] = useState(0);
  const [date, setDate] = useState(null);

  const gradeOptions = [
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
  ];

  useEffect(() => {
    let url = HOST + "/courses";
    let helpListCourse = [];
    let helpListStudent = [];
    fetch(url).then((response) => {
      response.json().then((result) => {
        result.map((c, i) => {
          helpListCourse.push({
            value: c.id,
            label: c.courseCode + ", " + c.name,
          });
          if (courseId && c.id == courseId)
            setSelectedCourse({
              value: c.id,
              label: c.courseCode + ", " + c.name,
            });
        });
        setCourseOptions(helpListCourse);
      });
    });

    url = HOST + "/students";
    fetch(url).then((response) => {
      response.json().then((result) => {
        result.map((s, i) => {
          helpListStudent.push({
            value: s.id,
            label: s.indexNumber + ", " + s.firstname + " " + s.lastname,
          });
          if (studentId && s.id == studentId)
            setSelectedStudent({
              value: s.id,
              label: s.indexNumber + ", " + s.firstname + " " + s.lastname,
            });
        });
        setStudentOptions(helpListStudent);
      });
    });
  }, []);

  function checkValidInput() {}

  function onChangeCourse(event) {
    const newSelectedCourse = courseOptions.find((c) => c.value == event.value);
    setSelectedCourse(newSelectedCourse);
    checkValidInput();
  }

  function onChangeGrade(event) {
    setGrade(event.value);
    checkValidInput();
  }

  function onChangeDate(event) {
    setDate(event.target.value);
    checkValidInput();
  }

  function onChangeStudent(event) {
    const newSelectedStudent = studentOptions.find(
      (s) => s.value == event.value
    );
    setSelectedStudent(newSelectedStudent);
    checkValidInput();
  }

  function handleSubmit(event) {
    let url =
      HOST +
      "/students/" +
      selectedStudent.value +
      "/courses/" +
      selectedCourse.value +
      "/exams";
    let exam = {};
    exam["date"] = date;
    exam["grade"] = grade;
    let methodName = "POST";
    if (examId) {
      exam["id"] = examId;
      methodName = "PUT";
    }
    let requestOptions = {
      method: methodName,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(exam),
    };

    event.preventDefault();
    fetch(url, requestOptions).then(() => {
      navigate("/exams");
    });
  }

  return (
    <div>
      <h3 align="center">Exam details:</h3>
      <form>
        <div className="container">
          <div className="row ">
            <div className="col-4">Student:</div>
            <div className="col-4">
              <Select
                options={studentOptions}
                onChange={onChangeStudent}
                isDisabled={examId ? true : false}
                value={selectedStudent}
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-4">Course:</div>
            <div className="col-4">
              <Select
                options={courseOptions}
                onChange={onChangeCourse}
                isDisabled={examId ? true : false}
                value={selectedCourse}
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-4">Date:</div>
            <div className="col-4">
              <input
                type="date"
                className="form-control"
                name="dateExam"
                onChange={onChangeDate}
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-4">Grade:</div>
            <div className="col-4">
              <Select options={gradeOptions} onChange={onChangeGrade} />
            </div>
          </div>
          <AddButton text="Save" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
}

export default EditExam;
