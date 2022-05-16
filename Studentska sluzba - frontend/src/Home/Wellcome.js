import "./HomeStyle.css";

function Wellcome(props) {
  return (
    <div id="welcome">
      <img
        className="center-img"
        height="60%"
        /*src={require("../Images/welcome-gif.gif")} */
        src={require("../Images/PMF-BL.jpg")}
        alt="Welcome to app"
      />
      <h2>Student servis</h2>
    </div>
  );
}

export default Wellcome;
