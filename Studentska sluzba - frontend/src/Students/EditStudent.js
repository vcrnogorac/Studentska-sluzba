import { useEffect, useState } from "react";
import HOST from "../Setup";
import "../bootstrap.css";
import { useNavigate, useParams } from "react-router-dom";
import AddButton from "../Home/AddButton";
import Select from "react-select";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [sex, setSex] = useState(null);
  const [indexNumber, setIndexNumber] = useState("");
  const [validInput, setValidInput] = useState(false);

  const sexOptions = [
    { value: "M", label: "Man" },
    { value: "Z", label: "Woman" },
  ];

  useEffect(() => {
    if (id) {
      let url = HOST + "/students/" + id;
      fetch(url).then((response) => {
        response.json().then((result) => {
          setFirstname(result.firstname);
          setLastname(result.lastname);
          setIndexNumber(result.indexNumber);
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

  function changeIndexNumber(event) {
    setIndexNumber(event.target.value);
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
      indexNumber.trim() == "" ||
      !sex
    ) {
      setValidInput(false);
    } else setValidInput(true);
  }

  function handleSubmit(event) {
    let url = HOST + "/students";

    let student = {};
    student["firstname"] = firstname;
    student["lastname"] = lastname;
    student["sex"] = sex.value;
    student["indexNumber"] = indexNumber;

    let methodName = "POST";
    if (id) {
      methodName = "PUT";
      student["id"] = id;
    }

    const requestOptions = {
      method: methodName,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    };

    event.preventDefault();
    fetch(url, requestOptions).then(() => {
      navigate("/students");
    });
  }

  return (
    <div>
      <h3 align="center">Student details:</h3>
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
            <div className="col-4">Index number:</div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                name="indexNumber"
                value={indexNumber}
                onChange={changeIndexNumber}
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

export default EditStudent;
