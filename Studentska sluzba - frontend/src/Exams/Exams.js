import "../bootstrap.css";
import { useEffect, useState } from "react";
import HOST from "../Setup";
import LoadingContents from "../Home/Loading";
import { Link } from "react-router-dom";
import MoreInfo from "../Home/MoreInfo";
import AddButton from "../Home/AddButton";

function Exams() {
  const [laoding, setLoading] = useState(true);
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const url = HOST + "/exams";

    fetch(url)
      .then((response) => {
        response.json().then((result) => {
          setExams(result);
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      {laoding && <LoadingContents />}
      <h3 className="text-center">All exams</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Student</th>
            <th scope="col">Course name</th>
            <th scope="col">Student index number</th>
            <th scope="col">Coure code</th>
            <th scope="col">Grade</th>
            <th scope="col">More info</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((e, i) => (
            <tr key={i}>
              <td>{e.date}</td>
              <td>
                {e.student.lastname} {e.student.firstname}
              </td>
              <td>{e.course.name}</td>
              <td>{e.student.indexNumber}</td>
              <td>{e.course.courseCode}</td>
              <td>{e.grade}</td>
              <td className="text-center">
                <Link to={"/exams/" + e.id}>
                  <MoreInfo />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/exams/edit">
        <AddButton text="Add new exam" />
      </Link>
    </div>
  );
}

export default Exams;
