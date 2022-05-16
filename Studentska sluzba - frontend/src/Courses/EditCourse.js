import { useEffect, useState } from "react";
import HOST from "../Setup";
import "../bootstrap.css";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import AddButton from "../Home/AddButton";

function EditCourse() {
  const { professorId } = useParams();
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [ects, setEcts] = useState("");
  const [professorOptions, setProfessorOptions] = useState([]);
  const [selectedProfessor, setSelectedProfessor] = useState();
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
    if (courseId) {
      let url = HOST + "/courses/" + courseId;
      fetch(url).then((response) => {
        response.json().then((result) => {
          setName(result.name);
          setCourseCode(result.courseCode);
          setEcts(result.ects);
          setSelectedProfessor({
            value: result.professor.id,
            label:
              result.professor.firstname +
              " " +
              result.professor.lastname +
              ", " +
              result.professor.academicTitle,
          });
        });
      });
    }

    let urlGetAllProfessors = HOST + "/professors";
    fetch(urlGetAllProfessors).then((response) => {
      response.json().then((result) => {
        let helpList = [];
        result.map((p) => {
          helpList.push({
            value: p.id,
            label: p.firstname + " " + p.lastname + ", " + p.academicTitle,
          });
          if (professorId && p.id == professorId) {
            setSelectedProfessor({
              value: p.id,
              label: p.firstname + " " + p.lastname + ", " + p.academicTitle,
            });
          }
        });
        setProfessorOptions(helpList);
      });
    });
  }, []);

  function changeName(event) {
    setName(event.target.value);
    checkValidInput();
  }

  function changeCourseCode(event) {
    setCourseCode(event.target.value);
    checkValidInput();
  }

  function changeEcts(event) {
    setEcts(event.target.value);
    checkValidInput();
  }

  function changeProfessor(event) {
    const newSelectedProfessor = professorOptions.find(
      (p) => p.value == event.value
    );
    setSelectedProfessor(newSelectedProfessor);
    checkValidInput();
  }

  function checkValidInput() {
    if (
      name.trim() != "" &&
      courseCode.trim() != "" &&
      ects > 0 &&
      selectedProfessor
    ) {
      setValidInput(true);
    } else setValidInput(false);
  }

  function handleSubmit(event) {
    let url = HOST + "/professors/" + selectedProfessor.value + "/courses";

    let course = {};
    course["name"] = name;
    course["courseCode"] = courseCode;
    course["ects"] = ects;
    let methodName = "POST";
    if (courseId) {
      course["id"] = courseId;
      methodName = "PUT";
    }

    let requestOptions = {
      method: methodName,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course),
    };

    event.preventDefault();
    fetch(url, requestOptions).then(() => {
      navigate("/courses");
    });
  }

  return (
    <div>
      <h3 align="center">Course details:</h3>
      <form>
        <div className="container">
          <div className="row">
            <div className="col-4">Name:</div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={changeName}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">Course code:</div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                name="courseCode"
                value={courseCode}
                onChange={changeCourseCode}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">ECTS:</div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                name="ects"
                value={ects}
                onChange={changeEcts}
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-4">Professor:</div>
            <div className="col-4">
              <Select
                options={professorOptions}
                onChange={changeProfessor}
                value={selectedProfessor}
                isDisabled={courseId ? true : false}
              />
            </div>
          </div>
          <AddButton text="Save" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
}

export default EditCourse;
