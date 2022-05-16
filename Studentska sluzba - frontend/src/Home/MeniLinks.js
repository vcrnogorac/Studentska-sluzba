import routes from "./routes";
import "./HomeStyle.css";
import { Link } from "react-router-dom";

function ManiLink(props) {
  return <p className="mani-link"> {props.name} </p>;
}

function MeniLinks() {
  return (
    <>
      {routes.map((e, i) => (
        <Link key={i} to={e.path}>
          <ManiLink name={e.name} />
        </Link>
      ))}
    </>
  );
}

export default MeniLinks;
