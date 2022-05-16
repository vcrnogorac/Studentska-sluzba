import "../bootstrap.css";
import { useEffect, useState } from "react";
import HOST from "../Setup";
import LoadingContents from "../Home/Loading";
import MoreInfo from "../Home/MoreInfo";
import { Link } from "react-router-dom";
import AddButton from "../Home/AddButton";

function Students() {
  const [laoding, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const url = HOST + "/students";

    fetch(url)
      .then((response) => {
        response.json().then((result) => {
          setStudents(result);
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      {laoding && <LoadingContents />}
      <h3 className="text-center">All students</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Sex</th>
            <th scope="col">Index number</th>
            <th scope="col">More info</th>
          </tr>
        </thead>
        <tbody>
          {students.map((e, i) => (
            <tr key={i}>
              <td>{e.firstname}</td>
              <td>{e.lastname}</td>
              <td>{e.sex === "M" ? "Man" : "Woman"}</td>
              <td>{e.indexNumber}</td>
              <td className="text-center">
                <Link to={"/students/" + e.id}>
                  <MoreInfo />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/students/edit">
        <AddButton text="Add new students" />
      </Link>
    </div>
  );
}

export default Students;
