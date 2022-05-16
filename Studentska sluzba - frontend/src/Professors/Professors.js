import "../bootstrap.css";
import { useEffect, useState } from "react";
import HOST from "../Setup";
import LoadingContents from "../Home/Loading";
import { Link } from "react-router-dom";
import MoreInfo from "../Home/MoreInfo";
import AddButton from "../Home/AddButton";

function Professors() {
  const [laoding, setLoading] = useState(false);
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    setLoading(true);

    //  let url = 'https://jsonplaceholder.typicode.com/users';
    let url = HOST + "/professors";

    fetch(url)
      .then((response) => {
        response.json().then((result) => {
          setProfessors(result);
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      {laoding && <LoadingContents />}
      <h3 className="text-center">All professors</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Sex</th>
            <th scope="col">Academic title</th>
            <th scope="col">More info</th>
          </tr>
        </thead>
        <tbody>
          {professors.map((e, i) => (
            <tr key={i}>
              <td>{e.firstname}</td>
              <td>{e.lastname}</td>
              <td>{e.sex === "M" ? "Man" : "Woman"}</td>
              <td>{e.academicTitle}</td>
              <td className="text-center">
                <Link to={"/professors/" + e.id}>
                  <MoreInfo />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/professors/edit">
        <AddButton text="Add new professor" />
      </Link>
    </div>
  );
}

export default Professors;
