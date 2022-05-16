import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HOST from "../Setup";
import "../bootstrap.css";

import "../bootstrap.css";
import MoreInfo from "../Home/MoreInfo";
import EditButton from "../Home/EditButton";
import AddButton from "../Home/AddButton";
import DeleteButton from "../Home/DeleteButton";

function ViewProfessorDetails(props) {
  const professor = props.professor;

  function deleteProfessor() {
    const url = HOST + "/professors/" + professor.id;
    fetch(url, { method: "DELETE" });
  }

  return (
    <div className="container">
      <h3 align="center">Professor details:</h3>
      <br />

      <table className="table">
        <tbody>
          <tr>
            <td>Firstname:</td>
            <td>{professor.firstname}</td>
          </tr>
          <tr>
            <td>Lastname:</td>
            <td>{professor.lastname}</td>
          </tr>
          <tr>
            <td>Academic title:</td>
            <td>{professor.academicTitle}</td>
          </tr>
          <tr>
            <td>Sex:</td>
            <td>{professor.sex == "M" ? "Man" : "Woman"}</td>
          </tr>
        </tbody>
      </table>

      <Link to={"/professors/edit/" + professor.id}>
        <EditButton text="Edit details" />
      </Link>
      {professor.courses.length == 0 && (
        <Link to={"/professors/"} onClick={deleteProfessor}>
          <DeleteButton text="Delete professor" />
        </Link>
      )}

      <br />
      <h4 align="center">Courses: </h4>
      <br />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Course name</th>
            <th scope="col">Course code</th>
            <th scope="col">ECTS</th>
            <th scope="col">More info</th>
          </tr>
        </thead>
        <tbody>
          {professor.courses.map((e, i) => (
            <tr key={i}>
              <td>{e.name}</td>
              <td>{e.courseCode}</td>
              <td>{e.ects}</td>
              <td>
                <Link to={"/courses/" + e.id}>
                  <MoreInfo />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>

        <Link to={"/professors/" + professor.id + "/courses"}>
          <AddButton text="Add new course" />
        </Link>
      </table>
    </div>
  );
}

function ProfessorDetails() {
  const [professorDetails, setProfessorDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let url = HOST + "/professors/" + id;
    fetch(url).then((response) => {
      response.json().then((result) => {
        setProfessorDetails(result);
      });
    });
  }, []);

  return (
    <div>
      {professorDetails && (
        <ViewProfessorDetails professor={professorDetails} />
      )}
    </div>
  );
}

export default ProfessorDetails;
