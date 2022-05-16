import "../bootstrap.css";
import { useEffect, useState } from "react";
import HOST from "../Setup";
import LoadingContents from "../Home/Loading";
import MoreInfo from "../Home/MoreInfo";
import { Link } from "react-router-dom";
import AddButton from "../Home/AddButton";

function Courses() {
  const [laoding, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const url = HOST + "/courses";

    fetch(url)
      .then((response) => {
        response.json().then((result) => {
          setCourses(result);
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      {laoding && <LoadingContents />}
      <h3 className="text-center">All courses</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Course Code</th>
            <th scope="col">Name</th>
            <th scope="col">ECTS</th>
            <th scope="col">Professor</th>
            <th scope="col">More info</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((e, i) => (
            <tr key={i}>
              <td>{e.courseCode}</td>
              <td>{e.name}</td>
              <td>{e.ects}</td>
              <td>
                {e.professor.firstname} {e.professor.lastname}
              </td>
              <td className="text-center">
                <Link to={"/courses/" + e.id}>
                  <MoreInfo />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/courses/edit">
        <AddButton text="Add new course" />
      </Link>
    </div>
  );
}

export default Courses;
