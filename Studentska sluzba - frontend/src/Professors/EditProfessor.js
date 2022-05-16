import { useEffect, useState } from "react";
import HOST from "../Setup";
import "../bootstrap.css";
import { useNavigate, useParams } from "react-router-dom";
import AddButton from "../Home/AddButton";
import Select from "react-select";

function EditProfessor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [sex, setSex] = useState(null);
  const [academicTitle, setAcademicTitle] = useState("");
  const [validInput, setValidInput] = useState(false);

  const sexOptions = [
    { value: "M", label: "Man" },
    { value: "Z", label: "Woman" },
  ];

  useEffect(() => {
    if (id) {
      let url = HOST + "/professors/" + id;
      fetch(url).then((response) => {
        response.json().then((result) => {
          setFirstname(result.firstname);
          setLastname(result.lastname);
          setAcademicTitle(result.academicTitle);
          setSex(sexOptions.find((e) => e.value == result.sex));
        });
      });
    }
  }, []);

  function changeFirstname(event) {
    setFirstname(event.target.value);
    checkValidInput();
  }

  function changeLastname(event) {
    setLastname(event.target.value);
    checkValidInput();
  }

  function changeAcademicTitle(event) {
    setAcademicTitle(event.target.value);
    checkValidInput();
  }

  function changeSex(event) {
    const newSelectedSex = sexOptions.find((s) => s.value == event.value);
    setSex(newSelectedSex);
    checkValidInput();
  }

  function checkValidInput() {
    if (
      firstname.trim() == "" ||
      lastname.trim() == "" ||
      academicTitle.trim() == "" ||
      !sex
    ) {
      setValidInput(false);
    } else setValidInput(true);
  }

  function handleSubmit(event) {
    let url = HOST + "/professors";

    let professor = {};
    professor["firstname"] = firstname;
    professor["lastname"] = lastname;
    professor["sex"] = sex.value;
    professor["academicTitle"] = academicTitle;

    let methodName = "POST";
    if (id) {
      methodName = "PUT";
      professor["id"] = id;
    }

    const requestOptions = {
      method: methodName,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(professor),
    };

    event.preventDefault();
    fetch(url, requestOptions).then(() => {
      navigate("/professors");
    });
  }

  return (
    <div>
      <h3 align="center">Professor details:</h3>
      <form>
        <div className="container">
          <div className="row">
            <div className="col-4">Firstname:</div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                name="firstname"
                value={firstname}
                onChange={changeFirstname}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">Lastname:</div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                name="lastname"
                value={lastname}
                onChange={changeLastname}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">Academic title:</div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                name="academicTitle"
                value={academicTitle}
                onChange={changeAcademicTitle}
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-4">Sex:</div>
            <div className="col-4">
              <Select options={sexOptions} onChange={changeSex} value={sex} />
            </div>
          </div>

          {validInput && <AddButton text="Save" onClick={handleSubmit} />}
          {validInput == false && <AddButton text="Save" />}
        </div>
      </form>
    </div>
  );
}

export default EditProfessor;
